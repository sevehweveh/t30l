const tableBody = document.querySelector("#level-table");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const emptyState = document.querySelector("#empty-state");
const formatTime = seconds => `0:${String(seconds).padStart(2, "0")}`;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function renderLevels() {
  const query = searchInput.value.trim().toLowerCase();
  const sort = sortSelect.value;
  let challenges = T30L_LEVELS.filter(challenge =>
    `${challenge.name} ${challenge.creator} ${challenge.verifier}`.toLowerCase().includes(query)
  );
  if (sort === "name") challenges.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "length") challenges.sort((a, b) => a.lengthSeconds - b.lengthSeconds);
  if (sort === "rank") challenges.sort((a, b) => a.rank - b.rank);

  tableBody.innerHTML = challenges.map(challenge => `
    <tr>
      <td class="rank-cell">#${challenge.rank}</td>
      <td><a class="level-name" href="level.html?id=${encodeURIComponent(challenge.id)}">${escapeHTML(challenge.name)}<span class="row-arrow">↗</span></a></td>
      <td class="muted">${escapeHTML(challenge.creator)}</td>
      <td class="time-cell">${formatTime(challenge.lengthSeconds)}</td>
      <td><span class="difficulty">UNRATED</span></td>
    </tr>
  `).join("");
  emptyState.hidden = challenges.length !== 0;
}
document.querySelector("#level-count").textContent = T30L_LEVELS.length;
searchInput.addEventListener("input", renderLevels);
sortSelect.addEventListener("change", renderLevels);
renderLevels();
