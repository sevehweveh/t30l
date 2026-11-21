# T30L — The Under 30 Seconds List

A static Geometry Dash community-list website built with HTML, CSS, and vanilla JavaScript. It is ready to publish with GitHub Pages.

## Preview locally
Open `index.html` in a browser. For a more reliable local preview, use the VS Code Live Server extension.

## Add or edit levels
Edit `levels.js`. Each level uses this structure:

```js
{
  id: "unique-url-friendly-id",
  rank: 1,
  name: "Level name",
  creator: "Creator name",
  lengthSeconds: 24,
  difficulty: "Extreme Demon",
  levelId: "Geometry Dash level ID",
  description: "Short level description."
}
```

Keep `lengthSeconds` below 30. The current entries are clearly marked examples and should be replaced with real, checked entries before launch.

## Publish with GitHub Pages
1. Create a new GitHub repository named `t30l`.
2. Upload all files from this folder to the repository's root (not the zip file).
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for GitHub Pages to publish the site. The public URL will appear on the Pages settings screen.

## Important
This starter version is a static site. Visitors can search and sort the list and open individual level pages, but they cannot submit levels or records yet. Those features would require a backend or a managed database/authentication service.
