-- GigOS Social Content Planner setup.
-- Run in the Supabase SQL Editor for project ipxjalcgiaqcyubrxqxu.
-- All rows and video objects are private to the signed-in account that created them.

create table if not exists public.social_media_folders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (length(trim(name)) between 1 and 80),
  created_at timestamptz not null default now(),
  unique (user_id, name),
  unique (id, user_id)
);

create table if not exists public.social_media_clips (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  folder_id uuid not null,
  title text not null check (length(trim(title)) between 1 and 160),
  original_name text not null,
  storage_path text not null unique,
  duration_seconds integer not null check (duration_seconds between 1 and 60),
  file_size_bytes bigint not null check (file_size_bytes > 0 and file_size_bytes <= 104857600),
  mime_type text not null check (mime_type like 'video/%'),
  created_at timestamptz not null default now(),
  constraint social_media_clips_folder_owner_fk
    foreign key (folder_id, user_id)
    references public.social_media_folders(id, user_id)
    on delete cascade
);

create index if not exists social_media_clips_user_folder_created_idx
  on public.social_media_clips (user_id, folder_id, created_at desc);

create table if not exists public.social_post_drafts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'Social post',
  category text not null default 'engagement',
  caption text not null,
  media_suggestion text not null default '',
  holiday text,
  event_id uuid,
  scheduled_for date,
  status text not null default 'draft' check (status in ('draft', 'scheduled', 'posted')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists social_post_drafts_user_created_idx
  on public.social_post_drafts (user_id, created_at desc);

alter table public.social_media_folders enable row level security;
alter table public.social_media_clips enable row level security;
alter table public.social_post_drafts enable row level security;

grant select, insert, update, delete on public.social_media_folders to authenticated;
grant select, insert, update, delete on public.social_media_clips to authenticated;
grant select, insert, update, delete on public.social_post_drafts to authenticated;

drop policy if exists "social_folders_owner_all" on public.social_media_folders;
create policy "social_folders_owner_all" on public.social_media_folders
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "social_clips_owner_all" on public.social_media_clips;
create policy "social_clips_owner_all" on public.social_media_clips
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.social_media_folders f
      where f.id = folder_id and f.user_id = (select auth.uid())
    )
  );

drop policy if exists "social_post_drafts_owner_all" on public.social_post_drafts;
create policy "social_post_drafts_owner_all" on public.social_post_drafts
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'gigos-social-media',
  'gigos-social-media',
  false,
  104857600,
  array['video/mp4', 'video/quicktime', 'video/webm', 'video/x-m4v', 'video/3gpp']
)
on conflict (id) do update set
  public = false,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "gigos_social_video_owner_select" on storage.objects;
create policy "gigos_social_video_owner_select" on storage.objects
  for select to authenticated
  using (
    bucket_id = 'gigos-social-media'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "gigos_social_video_owner_insert" on storage.objects;
create policy "gigos_social_video_owner_insert" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'gigos-social-media'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "gigos_social_video_owner_update" on storage.objects;
create policy "gigos_social_video_owner_update" on storage.objects
  for update to authenticated
  using (
    bucket_id = 'gigos-social-media'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  )
  with check (
    bucket_id = 'gigos-social-media'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "gigos_social_video_owner_delete" on storage.objects;
create policy "gigos_social_video_owner_delete" on storage.objects
  for delete to authenticated
  using (
    bucket_id = 'gigos-social-media'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );
