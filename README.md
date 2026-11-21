# T30L — The Under 30 Seconds List

A dark, three-panel Geometry Dash challenge-list layout inspired by the reference screenshot.

## T30L eligibility and order
- Challenges must be unrated.
- Challenges must be shorter than 30 seconds.
- Rank #1 is the hardest; rankings proceed toward easier challenges.

## Add a challenge
Edit `levels.js` and add an object to `T30L_CHALLENGES`. Each challenge can include:
- `id`, `rank`, `name`
- `creator`, `verifier`
- `lengthSeconds`, `levelId`
- `publisher`, `song`
- `difficultyTags`, `description`
- `thumbnail`, `videoUrl`
- `records` (array of `{ player, progress, date }`)

The included entries are placeholders and are not real placements.

## Add a thumbnail
1. Open the `assets` folder in your local project.
2. Put your image in that folder, e.g. `my-challenge.jpg`.
3. In that challenge's object in `levels.js`, set `thumbnail: "assets/my-challenge.jpg"`.
4. Upload/commit both the image and updated `levels.js` to the GitHub repository.

Use a 16:9 image for best results. JPG, PNG, and WebP are suitable. If `thumbnail` is empty, the page shows a designed placeholder.

## Add a preview video
Set `videoUrl` to a YouTube URL. The profile will show a Watch Video link. (This starter does not embed video playback.)

## Update the live website
Upload the updated project files to the root of the existing GitHub repository, replacing the previous versions, and commit the changes. GitHub Pages will redeploy automatically.

## Current limitations
This is a static GitHub Pages site. Challenge data and records are edited in `levels.js` by repository maintainers. Visitors cannot submit records or upload thumbnails directly yet; public submissions and moderation would need a backend/database and authentication.
