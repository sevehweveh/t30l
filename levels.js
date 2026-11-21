/*
  T30L challenge database.

  Add one object per challenge. Rank #1 is the HARDEST.
  Only add challenges that meet the T30L rules: unrated and under 30 seconds.

  THUMBNAILS:
  1. Put the image file in the "assets" folder in your GitHub repository.
  2. Set thumbnail to its path, for example: "assets/my-challenge.jpg"
  3. Commit the image and this file to GitHub.

  Optional video: set videoUrl to a YouTube/watch URL.
*/
const T30L_CHALLENGES = [
  {
    id: "sample-challenge",
    rank: 1,
    name: "Example Challenge",
    creator: "Example Creator",
    verifier: "Example Verifier",
    lengthSeconds: 24,
    levelId: "00000000",
    publisher: "Not provided",
    song: "Not provided",
    difficultyTags: ["Wave", "Timings", "Fast-Paced"],
    description: "This is a placeholder entry to demonstrate the T30L layout. Replace it with a real, eligible challenge.",
    thumbnail: "",
    videoUrl: "",
    records: []
  },
  {
    id: "sample-challenge-2",
    rank: 2,
    name: "Another Example",
    creator: "Another Creator",
    verifier: "Not provided",
    lengthSeconds: 19,
    levelId: "00000001",
    publisher: "Not provided",
    song: "Not provided",
    difficultyTags: ["Wave", "Memory"],
    description: "Second placeholder entry. Update the challenge details and placement before publishing the official list.",
    thumbnail: "",
    videoUrl: "",
    records: []
  },
  {
    id: "sample-challenge-3",
    rank: 3,
    name: "Short Example",
    creator: "Sample Creator",
    verifier: "Not provided",
    lengthSeconds: 28,
    levelId: "00000002",
    publisher: "Not provided",
    song: "Not provided",
    difficultyTags: ["Timings"],
    description: "Third placeholder entry. All sample entries are fictional examples, not official placements.",
    thumbnail: "",
    videoUrl: "",
    records: []
  }
];
