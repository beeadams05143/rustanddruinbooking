# Gigos Booking Suite

Static HTML/CSS/JS app for agreements, invoices, receipts, and calendar tools.

## Project Files
- `index.html`
- `styles.css`
- `app.js`
- `logo.png`

## Run Locally
Open `index.html` directly in a browser, or run a simple static server from this folder.

Example:
```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080`.

## Deploy to Netlify
This repo is configured for static deployment.

- Build command: *(none)*
- Publish directory: `.`

Netlify will serve `index.html` as the site entry point.

## Social Content Planner storage setup

The Social Content tab stores post drafts and video-folder metadata in Supabase and uploads clips to a private Storage bucket. Before using video uploads, run `database/social_media_planner_setup.sql` in the Supabase SQL Editor for this project. The SQL creates the required tables, private bucket, and signed-in-user RLS policies. The application limits videos to 60 seconds and 100 MB.
