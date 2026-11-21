const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const level = T30L_LEVELS.find(item => item.id === id);
const detail = document.querySelector("#level-detail");

if (!level) {
  detail.innerHTML = '<div class="eyebrow">NOT FOUND</div><h1>Level not found</h1><p class="muted">This level may have been removed or the link may be incorrect.</p><a class="back-link" href="index.html#list">← BACK TO THE LIST</a>';
} else {
  document.title = `${level.name} — T30L`;
  document.querySelector("#level-name").textContent = level.name;
  document.querySelector("#level-creator").textContent = `Created by ${level.creator}`;
  document.querySelector("#detail-stats").innerHTML = `
    <div><span>RANK</span><strong>#${level.rank}</strong></div>
    <div><span>LENGTH</span><strong>0:${String(level.lengthSeconds).padStart(2, "0")}</strong></div>
    <div><span>DIFFICULTY</span><strong>${level.difficulty}</strong></div>
    <div><span>GD LEVEL ID</span><strong>${level.levelId || "Not provided"}</strong></div>
  `;
  document.querySelector("#level-description").textContent = level.description || "No description has been added.";
}
