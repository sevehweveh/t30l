const params = new URLSearchParams(window.location.search);
const challenge = T30L_LEVELS.find(item => item.id === params.get("id"));
const detail = document.querySelector("#level-detail");

if (!challenge) {
  detail.innerHTML = '<div class="eyebrow">NOT FOUND</div><h1>Challenge not found</h1><p class="muted">This challenge may have been removed or the link may be incorrect.</p><a class="back-link" href="index.html#list">← BACK TO THE LIST</a>';
} else {
  document.title = `${challenge.name} — T30L`;
  document.querySelector("#level-name").textContent = challenge.name;
  document.querySelector("#level-creator").textContent = `Created by ${challenge.creator}`;
  document.querySelector("#detail-stats").innerHTML = `
    <div><span>RANK</span><strong>#${challenge.rank}</strong></div>
    <div><span>LENGTH</span><strong>0:${String(challenge.lengthSeconds).padStart(2, "0")}</strong></div>
    <div><span>VERIFIER</span><strong>${challenge.verifier || "Not provided"}</strong></div>
    <div><span>GD LEVEL ID</span><strong>${challenge.levelId || "Not provided"}</strong></div>
  `;
  document.querySelector("#level-description").textContent = challenge.description || "No description has been added.";
}
