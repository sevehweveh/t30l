# T30L — The Under 30 Seconds List

A static Geometry Dash community list for **unrated challenges under 30 seconds**. The list is ranked hardest to easiest: rank #1 is the hardest.

## Preview locally
Open `index.html` in a browser, or use the VS Code Live Server extension.

## Add or edit challenges
Edit `levels.js`. Example structure:

```js
{
  id: "unique-url-friendly-id",
  rank: 1,
  name: "Challenge name",
  creator: "Creator name",
  verifier: "Verifier name",
  lengthSeconds: 24,
  levelId: "Geometry Dash level ID",
  description: "Short description."
}
```

`lengthSeconds` must be less than 30. Rank #1 should be the hardest challenge. The current entries are placeholders, not real placements.

## Publish with GitHub Pages
1. Upload all files in this folder to the root of your `t30l` repository.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. Wait for GitHub Pages to publish the site.

## Current limitations
This is a static starter site. Visitors can search and sort challenges and open individual challenge pages. Player record submission, moderator tools, and a live database are not included yet.
