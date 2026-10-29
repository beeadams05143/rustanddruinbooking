(function () {
  const BUCKET = "gigos-social-media";
  const MAX_SECONDS = 60;
  const MAX_BYTES = 100 * 1024 * 1024;
  const $ = (id) => document.getElementById(id);
  const categoryLabels = {
    engagement: "Engagement", "behind-scenes": "Behind the scenes", community: "Community",
    booking: "Booking outreach", show: "Show promotion", holiday: "Holiday",
  };

  function getContext() {
    return {
      client: window.state?.calendar?.client,
      userId: window.state?.calendar?.session?.user?.id || "",
      dna: window.state?.bandDNA || {},
      workspace: window.state?.workOrderWorkspace,
    };
  }

  function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[char]);
  }

  function getIdeas() {
    return window.GigOSSocialContentLibrary?.ideas || [];
  }

  function tagify(text) {
    const name = String(getContext().dna.bandName || "YourBand")
      .normalize("NFKD").replace(/[^a-zA-Z0-9]/g, "");
    const tags = ["#LiveMusic", "#SupportLocalMusic", name ? `#${name}` : ""]
      .filter(Boolean).join(" ");
    return `${text.trim()}\n\n${tags}`;
  }

  function personalize(text) {
    const { dna } = getContext();
    const firstLineup = Array.isArray(dna.lineups) ? dna.lineups[0]?.name : "";
    return String(text || "")
      .replaceAll("[Band]", dna.bandName || "our band")
      .replaceAll("[Town]", dna.hometown || "our area")
      .replaceAll("[style]", (Array.isArray(dna.genreTags) ? dna.genreTags.join(", ") : "") || "live music")
      .replaceAll("[lineup]", firstLineup || "the band");
  }

  function getSelectedEvent() {
    const value = $("socialPlanEvent")?.value || "";
    return (window.state?.calendar?.events || []).find((event) => String(event.id) === value) || null;
  }

  function eventLabel(event) {
    const dateValue = event?.start_time || event?.start || event?.event_date || "";
    const date = dateValue ? new Date(dateValue).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) : "Date not set";
    return `${date} · ${event?.title || event?.name || "Booked show"}`;
  }

  function renderEventOptions() {
    const select = $("socialPlanEvent");
    if (!select) return;
    const selected = select.value;
    const now = Date.now();
    const events = (window.state?.calendar?.events || [])
      .filter((event) => {
        const when = new Date(event.start_time || event.start || event.event_date || "").getTime();
        return !Number.isFinite(when) || when >= now;
      })
      .sort((a, b) => new Date(a.start_time || a.start || a.event_date || 0) - new Date(b.start_time || b.start || b.event_date || 0));
    select.innerHTML = '<option value="">Choose a show (optional)</option>' + events.map((event) =>
      `<option value="${escapeHtml(event.id)}">${escapeHtml(eventLabel(event))}</option>`).join("");
    if (events.some((event) => String(event.id) === selected)) select.value = selected;
  }

  function renderIdeaLibrary() {
    const wrap = $("socialIdeaLibrary");
    if (!wrap) return;
    const category = $("socialIdeaCategory")?.value || "all";
    const ideas = getIdeas().filter((idea) => category === "all" || idea.category === category);
    wrap.innerHTML = ideas.map((idea) => `
      <article class="social-idea-card">
        <span class="priority-tag normal">${escapeHtml(idea.categoryLabel)}</span>
        <h4>${escapeHtml(idea.title)}</h4>
        <p class="social-idea-caption">${escapeHtml(tagify(personalize(idea.captionTemplate)))}</p>
        <p class="social-idea-media"><strong>Photo/video idea:</strong> ${escapeHtml(idea.mediaSuggestion)}</p>
        <button class="btn ghost" type="button" data-social-idea="${escapeHtml(idea.id)}">Use this idea</button>
      </article>`).join("") || '<p class="muted">No ideas in this category yet.</p>';
  }

  function setDraftFromIdea(id) {
    const idea = getIdeas().find((entry) => entry.id === id);
    if (!idea) return;
    const event = getSelectedEvent();
    let caption = personalize(idea.captionTemplate);
    if (event && (idea.category === "show" || idea.category === "booking")) {
      const venue = event.venue_name || event.location || "the venue";
      caption = caption.replaceAll("[Venue]", venue).replaceAll("[Date]", eventLabel(event));
    }
    const holiday = $("socialPlanHoliday")?.value;
    if (holiday && idea.category === "holiday") caption = caption.replaceAll("[Holiday]", holiday);
    $("socialPostCaption").value = tagify(caption);
    $("socialMediaSuggestion").textContent = `Suggested visual: ${idea.mediaSuggestion}`;
    $("socialPostCaption").dataset.title = idea.title;
    $("socialPostCaption").dataset.category = idea.category;
  }

  function renderSavedPosts() {
    const wrap = $("socialSavedPosts");
    if (!wrap) return;
    const saved = getContext().workspace?.socialPosts || [];
    wrap.innerHTML = saved.length ? saved.map((post) => `
      <article class="work-order-card">
        <div class="work-order-head"><div><h4>${escapeHtml(post.title || "Social post")}</h4>
        <p class="work-order-meta">${escapeHtml(categoryLabels[post.category] || post.category || "Draft")} · ${escapeHtml(post.scheduled_for || "Unscheduled")}</p></div></div>
        <p class="work-order-note">${escapeHtml(post.caption || "")}</p>
        <p class="muted"><strong>Visual:</strong> ${escapeHtml(post.media_suggestion || "Not added")}</p>
      </article>`).join("") : '<p class="muted">Your saved social post drafts will appear here.</p>';
  }

  async function buildPostPlan() {
    const goal = $("socialPlanGoal")?.value || "engagement";
    const holiday = $("socialPlanHoliday")?.value || "";
    const event = getSelectedEvent();
    if (goal === "show" && !event) return setStatus("socialPlanStatus", "Choose a booked show to build its post plan.", true);
    if (goal === "holiday" && !holiday) return setStatus("socialPlanStatus", "Choose a holiday or season to build its post plan.", true);
    const allowed = goal === "holiday" ? ["holiday", "engagement"]
      : goal === "show" ? ["show", "engagement", "behind-scenes"]
      : goal === "booking" ? ["booking", "community", "behind-scenes", "engagement"]
      : ["engagement", "behind-scenes", "community"];
    const candidates = getIdeas().filter((idea) => allowed.includes(idea.category));
    const byCategory = (category) => candidates.filter((idea) => idea.category === category);
    const chosen = goal === "show"
      ? [byCategory("show")[0], byCategory("engagement")[0], byCategory("show")[1], byCategory("show")[2], byCategory("show")[7]].filter(Boolean)
      : goal === "holiday"
        ? [byCategory("holiday")[0], byCategory("engagement")[0], byCategory("holiday")[1], byCategory("holiday")[2], byCategory("holiday")[7]].filter(Boolean)
        : goal === "booking"
          ? [byCategory("booking")[0], byCategory("engagement")[0], byCategory("booking")[1], byCategory("community")[0], byCategory("behind-scenes")[0]].filter(Boolean)
          : candidates.slice(0, 5);
    const showOffsets = [-21, -7, -1, 0, 1];
    const drafts = chosen.map((idea, index) => {
      let caption = personalize(idea.captionTemplate);
      if (event) caption = caption.replaceAll("[Venue]", event.venue_name || event.location || "the venue").replaceAll("[Date]", eventLabel(event));
      if (holiday) caption = caption.replaceAll("[Holiday]", holiday);
      if (holiday && idea.category === "holiday" && !caption.toLowerCase().includes(holiday.toLowerCase())) {
        caption = `${holiday} is coming up! ${caption}`;
      }
      const scheduled = new Date();
      if (event && (goal === "show" || goal === "holiday")) {
        const eventDate = new Date(event.start_time || event.start || event.event_date || "");
        if (!Number.isNaN(eventDate.getTime())) {
          scheduled.setTime(eventDate.getTime());
          scheduled.setDate(scheduled.getDate() + showOffsets[index]);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (scheduled < today) scheduled.setTime(today.getTime());
        }
      } else scheduled.setDate(scheduled.getDate() + 1 + index * 2);
      return {
        id: `social-${Date.now()}-${index}`,
        title: idea.title,
        category: idea.category,
        caption: tagify(caption),
        media_suggestion: idea.mediaSuggestion,
        holiday: holiday || null,
        event_id: event?.id || null,
        scheduled_for: scheduled.toISOString().slice(0, 10),
        status: "draft",
      };
    });
    const workspace = getContext().workspace;
    workspace.socialPosts = [...drafts, ...(workspace.socialPosts || [])];
    saveDraft();
    renderSavedPosts();
    const context = [holiday, event ? eventLabel(event) : ""].filter(Boolean).join(" · ");
    $("socialPlanStatus").textContent = `Added ${drafts.length} editable post ideas to this week${context ? ` for ${context}` : ""}. Check the suggested photo/video for each post.`;
    const { client, userId } = getContext();
    if (client && userId) {
      const rows = drafts.map((post) => ({
        user_id: userId,
        title: post.title,
        category: post.category,
        caption: post.caption,
        media_suggestion: post.media_suggestion,
        holiday: post.holiday,
        event_id: post.event_id,
        scheduled_for: post.scheduled_for,
        status: post.status,
      }));
      const { error } = await client.from("social_post_drafts").insert(rows);
      if (error) setStatus("socialPlanStatus", "Plan is saved on this device. Supabase sync needs the social planner setup SQL.", true);
      else loadSavedPosts();
    }
  }

  async function saveSocialPost() {
    const { client, userId, workspace } = getContext();
    const area = $("socialPostCaption");
    const caption = area?.value.trim() || "";
    if (!caption) return setStatus("socialPlanStatus", "Choose an idea or write a post before saving.", true);
    const ideaId = area.dataset.title || "Custom social post";
    const idea = getIdeas().find((entry) => entry.title === ideaId);
    const post = {
      id: `social-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`,
      title: ideaId,
      category: area.dataset.category || "engagement",
      caption,
      media_suggestion: $("socialMediaSuggestion")?.textContent.replace(/^Suggested visual:\s*/, "") || "",
      status: "draft",
      created_at: new Date().toISOString(),
    };
    workspace.socialPosts = [post, ...(workspace.socialPosts || [])];
    saveDraft();
    if (client && userId) {
      const { error } = await client.from("social_post_drafts").insert({
        user_id: userId,
        title: post.title,
        category: post.category,
        caption: post.caption,
        media_suggestion: post.media_suggestion,
        status: "draft",
      });
      if (error) setStatus("socialPlanStatus", "Saved on this device. Supabase sync needs the social planner setup SQL.", true);
      else setStatus("socialPlanStatus", "Post draft saved.");
    } else setStatus("socialPlanStatus", "Saved on this device. Sign in to sync post drafts.");
    renderSavedPosts();
  }

  function setStatus(id, message, error = false) {
    const el = $(id);
    if (!el) return;
    el.textContent = message;
    el.classList.toggle("warning", error);
  }

  async function getFolders() {
    const { client, userId, workspace } = getContext();
    const defaults = ["Raw Footage", "Reels I Can Reuse", "Bassist Video", "Drummer Video", "Audience Video"];
    if (!workspace.socialFolders?.length) workspace.socialFolders = defaults;
    if (!client || !userId) return workspace.socialFolders.map((name) => ({ id: name, name }));
    const { data, error } = await client.from("social_media_folders").select("id,name").eq("user_id", userId).order("name");
    if (error) {
      setStatus("socialVideoStatus", "Video library setup is not connected yet. Run the included setup SQL, then reload.", true);
      return workspace.socialFolders.map((name) => ({ id: name, name }));
    }
    const rows = data || [];
    if (!rows.length) {
      const inserts = defaults.map((name) => ({ user_id: userId, name }));
      const created = await client.from("social_media_folders").upsert(inserts, { onConflict: "user_id,name" }).select("id,name");
      if (!created.error) return created.data || [];
    }
    return rows;
  }

  async function renderVideoLibrary() {
    const select = $("socialVideoFolder");
    const list = $("socialVideoList");
    if (!select || !list) return;
    const folders = await getFolders();
    const previous = select.value;
    select.innerHTML = folders.map((folder) => `<option value="${escapeHtml(folder.id)}">${escapeHtml(folder.name)}</option>`).join("");
    if (folders.some((folder) => String(folder.id) === previous)) select.value = previous;
    const { client, userId, workspace } = getContext();
    if (!client || !userId) {
      list.innerHTML = '<p class="muted">Sign in to upload and sync video clips. Folder names are shown for planning.</p>';
      return;
    }
    const { data, error } = await client.from("social_media_clips").select("id,title,folder_id,storage_path,original_name,duration_seconds,created_at").eq("user_id", userId).eq("folder_id", select.value).order("created_at", { ascending: false });
    if (error) {
      list.innerHTML = '<p class="muted">Video library setup is not connected yet. Run the included setup SQL, then reload.</p>';
      return;
    }
    const videos = data || [];
    getContext().workspace.socialVideos = videos;
    if (!videos.length) {
      list.innerHTML = '<p class="muted">No videos in this folder yet. Add a clip up to 60 seconds.</p>';
      return;
    }
    list.innerHTML = videos.map((video) => `<article class="social-video-card" data-social-video="${escapeHtml(video.id)}"><h4>${escapeHtml(video.title || video.original_name)}</h4><p class="muted">${video.duration_seconds}s · ${escapeHtml(video.original_name)}</p><video controls preload="none" aria-label="Preview ${escapeHtml(video.title || video.original_name)}"></video><div class="inline-actions"><button class="btn ghost" type="button" data-use-social-video="${escapeHtml(video.id)}">Use in post</button><button class="btn ghost" type="button" data-delete-social-video="${escapeHtml(video.id)}">Delete clip</button></div></article>`).join("");
    for (const video of videos) {
      const { data: signed, error: signedError } = await client.storage.from(BUCKET).createSignedUrl(video.storage_path, 3600);
      if (!signedError) {
        const player = list.querySelector(`[data-social-video="${CSS.escape(String(video.id))}"] video`);
        if (player) player.src = signed.signedUrl;
      }
    }
  }

  async function createFolder() {
    const name = window.prompt("Name this video folder");
    const trimmed = String(name || "").trim();
    if (!trimmed) return;
    const { client, userId, workspace } = getContext();
    if (!client || !userId) {
      workspace.socialFolders = [...new Set([...(workspace.socialFolders || []), trimmed])];
      saveDraft();
      setStatus("socialVideoStatus", "Folder saved on this device. Sign in to sync it.");
      return renderVideoLibrary();
    }
    const { error } = await client.from("social_media_folders").insert({ user_id: userId, name: trimmed });
    if (error) return setStatus("socialVideoStatus", error.code === "23505" ? "That folder already exists." : "Could not create folder. Check the social planner setup SQL.", true);
    setStatus("socialVideoStatus", `Folder “${trimmed}” created.`);
    renderVideoLibrary();
  }

  function readVideoDuration(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => { URL.revokeObjectURL(url); resolve(video.duration); };
      video.onerror = () => { URL.revokeObjectURL(url); reject(new Error("Could not read this video file.")); };
      video.src = url;
    });
  }

  async function uploadVideo(file) {
    const { client, userId } = getContext();
    if (!file) return;
    if (!client || !userId) return setStatus("socialVideoStatus", "Sign in before uploading a video.", true);
    if (!file.type.startsWith("video/")) return setStatus("socialVideoStatus", "Choose a video file.", true);
    if (file.size > MAX_BYTES) return setStatus("socialVideoStatus", "This video is over the 100 MB upload limit.", true);
    const folder = $("socialVideoFolder")?.value;
    const title = $("socialVideoTitle")?.value.trim() || file.name.replace(/\.[^.]+$/, "");
    if (!folder) return setStatus("socialVideoStatus", "Create or choose a folder first.", true);
    setStatus("socialVideoStatus", "Checking video length…");
    let duration;
    try { duration = await readVideoDuration(file); }
    catch (error) { return setStatus("socialVideoStatus", error.message, true); }
    if (!Number.isFinite(duration) || duration <= 0 || duration > MAX_SECONDS) {
      return setStatus("socialVideoStatus", "Choose a video that is 60 seconds or shorter.", true);
    }
    const path = `${userId}/${folder}/${Date.now()}-${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    setStatus("socialVideoStatus", "Uploading video…");
    const { error: uploadError } = await client.storage.from(BUCKET).upload(path, file, { contentType: file.type, upsert: false });
    if (uploadError) return setStatus("socialVideoStatus", "Video upload failed. Check the private bucket setup and try again.", true);
    const { error: rowError } = await client.from("social_media_clips").insert({
      user_id: userId,
      folder_id: folder,
      title,
      original_name: file.name,
      storage_path: path,
      duration_seconds: Math.ceil(duration),
      file_size_bytes: file.size,
      mime_type: file.type,
    });
    if (rowError) {
      await client.storage.from(BUCKET).remove([path]);
      return setStatus("socialVideoStatus", "The video uploaded, but its library record could not be saved. Setup SQL may be missing.", true);
    }
    $("socialVideoTitle").value = "";
    $("socialVideoFile").value = "";
    setStatus("socialVideoStatus", `“${title}” added to your video library.`);
    renderVideoLibrary();
  }

  async function deleteVideo(id) {
    const { client, userId } = getContext();
    if (!client || !userId) return;
    const { data, error } = await client.from("social_media_clips").select("id,storage_path").eq("id", id).eq("user_id", userId).maybeSingle();
    if (error || !data) return setStatus("socialVideoStatus", "Could not find that clip.", true);
    const { error: rowError } = await client.from("social_media_clips").delete().eq("id", id).eq("user_id", userId);
    if (rowError) return setStatus("socialVideoStatus", "Could not delete the clip record.", true);
    const { error: storageError } = await client.storage.from(BUCKET).remove([data.storage_path]);
    setStatus("socialVideoStatus", storageError ? "Clip removed from the library list; storage cleanup needs attention." : "Clip deleted.", Boolean(storageError));
    renderVideoLibrary();
  }

  async function loadSavedPosts() {
    const { client, userId, workspace } = getContext();
    renderSavedPosts();
    if (!client || !userId) return;
    const { data, error } = await client.from("social_post_drafts").select("id,title,category,caption,media_suggestion,status,scheduled_for,created_at").eq("user_id", userId).order("created_at", { ascending: false }).limit(100);
    if (!error && data) {
      workspace.socialPosts = data;
      saveDraft();
      renderSavedPosts();
    }
  }

  function render() {
    renderEventOptions();
    renderIdeaLibrary();
    renderSavedPosts();
    renderVideoLibrary();
    loadSavedPosts();
  }

  document.addEventListener("click", (event) => {
    const ideaButton = event.target.closest("[data-social-idea]");
    if (ideaButton) setDraftFromIdea(ideaButton.dataset.socialIdea);
    if (event.target.closest("#socialBuildWeek")) buildPostPlan();
    if (event.target.closest("#socialSavePost")) saveSocialPost();
    if (event.target.closest("#socialCreateFolder")) createFolder();
    const useVideoButton = event.target.closest("[data-use-social-video]");
    if (useVideoButton) {
      const video = getContext().workspace?.socialVideos?.find((item) => String(item.id) === useVideoButton.dataset.useSocialVideo);
      if (video) $("socialMediaSuggestion").textContent = `Suggested visual: Use saved video “${video.title || video.original_name}” from your clip library.`;
    }
    const deleteButton = event.target.closest("[data-delete-social-video]");
    if (deleteButton) deleteVideo(deleteButton.dataset.deleteSocialVideo);
    if (event.target.closest("#socialCopyPost")) copyTextToClipboard($("socialPostCaption")?.value || "", {
      statusEl: $("socialPlanStatus"), successMessage: "Post copied.", failureMessage: "Could not copy the post.",
    });
  });

  document.addEventListener("change", (event) => {
    if (event.target.id === "socialIdeaCategory") renderIdeaLibrary();
    if (event.target.id === "socialVideoFolder") renderVideoLibrary();
    if (event.target.id === "socialVideoFile") uploadVideo(event.target.files?.[0]);
  });

  window.GigOSSocialPlanner = { render };
  if (!$("socialContentWrap")?.classList.contains("hidden")) render();
})();
