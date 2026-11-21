const listElement = document.querySelector("#challenge-list");
const searchElement = document.querySelector("#search");
const detailImage = document.querySelector("#challenge-thumbnail");
const fallback = document.querySelector("#media-fallback");
let selectedId = T30L_CHALLENGES[0]?.id;
let hardestFirst = true;

function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}
function formatTime(seconds) {
  return `0:${String(seconds).padStart(2, "0")}`;
}
function renderList() {
  const query = searchElement.value.trim().toLowerCase();
  const filtered = T30L_CHALLENGES
    .filter(c => `${c.name} ${c.creator} ${c.verifier}`.toLowerCase().includes(query))
    .sort((a, b) => hardestFirst ? a.rank - b.rank : b.rank - a.rank);

  document.querySelector("#challenge-count").textContent = T30L_CHALLENGES.length;
  listElement.innerHTML = filtered.map(c => `
    <button class="challenge-row ${c.id === selectedId ? "active" : ""}" data-id="${safeText(c.id)}">
      <span class="row-rank">#${c.rank}</span><span class="row-name">${safeText(c.name)}</span>
    </button>`).join("");

  listElement.querySelectorAll(".challenge-row").forEach(button => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.id;
      renderList();
      renderDetail();
      if (window.innerWidth <= 760) document.querySelector("#list-panel").classList.remove("mobile-open");
    });
  });
  if (!filtered.length) listElement.innerHTML = '<div class="list-empty">No challenges found.</div>';
}
function renderDetail() {
  const c = T30L_CHALLENGES.find(item => item.id === selectedId);
  if (!c) return;
  document.title = `${c.name} — T30L`;
  document.querySelector("#challenge-name").textContent = c.name;
  document.querySelector("#challenge-rank").textContent = `#${c.rank}`;
  document.querySelector("#challenge-description").textContent = c.description || "No description has been added yet.";

  detailImage.hidden = !c.thumbnail;
  fallback.hidden = Boolean(c.thumbnail);
  detailImage.onerror = () => { detailImage.hidden = true; fallback.hidden = false; };
  detailImage.src = c.thumbnail || "";
  detailImage.alt = `${c.name} thumbnail`;

  const videoLink = document.querySelector("#video-link");
  if (c.videoUrl) {
    videoLink.href = c.videoUrl;
    videoLink.hidden = false;
  } else {
    videoLink.hidden = true;
  }

  document.querySelector("#challenge-tags").innerHTML =
    `<span class="tag unrated">UNRATED</span>` +
    (c.difficultyTags || []).map(tag => `<span class="tag">${safeText(tag)}</span>`).join("");

  document.querySelector("#challenge-stats").innerHTML = `
    <div class="stat"><span>LEVEL ID</span><strong>${safeText(c.levelId || "—")}</strong></div>
    <div class="stat"><span>LIST POINTS</span><strong>${safeText(c.points ?? "—")}</strong></div>
    <div class="stat"><span>LENGTH</span><strong>${formatTime(c.lengthSeconds)}</strong></div>
  `;
  document.querySelector("#challenge-info").innerHTML = `
    <div><span>PUBLISHER</span><strong>${safeText(c.publisher || "Not provided")}</strong></div>
    <div><span>VERIFIER</span><strong>${safeText(c.verifier || "Not provided")}</strong></div>
    <div class="wide"><span>CREATOR</span><strong>${safeText(c.creator || "Not provided")}</strong></div>
    <div><span>SONG</span><strong>${safeText(c.song || "Not provided")}</strong></div>
  `;
  document.querySelector("#challenge-about").textContent = c.description || "No additional information.";
  const records = c.records || [];
  document.querySelector("#record-count").textContent = records.length;
  document.querySelector("#records-content").innerHTML = records.length
    ? records.map((record, i) => `<div class="record-row"><span class="record-position">#${i + 1}</span><div><strong>${safeText(record.player)}</strong><small>${safeText(record.progress || "100%")}</small></div><span class="record-date">${safeText(record.date || "")}</span></div>`).join("")
    : '<div class="no-records"><span class="no-records-icon">◷</span><strong>No records</strong><p>There are no accepted player records for this challenge yet.</p></div>';
}
searchElement.addEventListener("input", renderList);
document.querySelector("#sort-button").addEventListener("click", () => {
  hardestFirst = !hardestFirst;
  renderList();
});
document.querySelector("#mobile-menu").addEventListener("click", () => {
  document.querySelector("#list-panel").classList.toggle("mobile-open");
});
document.querySelectorAll("[data-inert]").forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  alert("This section is planned for a future T30L update.");
}));
renderList();
renderDetail();
