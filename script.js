const tableBody = document.querySelector("#level-table");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const emptyState = document.querySelector("#empty-state");

const formatTime = (seconds) => `0:${String(seconds).padStart(2, "0")}`;

function renderLevels() {
  const query = searchInput.value.trim().toLowerCase();
  const sort = sortSelect.value;
  let levels = T30L_LEVELS.filter(level =>
    `${level.name} ${level.creator} ${level.difficulty}`.toLowerCase().includes(query)
  );

  if (sort === "name") levels.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "length") levels.sort((a, b) => a.lengthSeconds - b.lengthSeconds);
  if (sort === "rank") levels.sort((a, b) => a.rank - b.rank);

  tableBody.innerHTML = levels.map(level => `
    <tr>
      <td class="rank-cell">#${level.rank}</td>
      <td><a class="level-name" href="level.html?id=${encodeURIComponent(level.id)}">${escapeHTML(level.name)}<span class="row-arrow">↗</span></a></td>
      <td class="muted">${escapeHTML(level.creator)}</td>
      <td class="time-cell">${formatTime(level.lengthSeconds)}</td>
      <td><span class="difficulty">${escapeHTML(level.difficulty)}</span></td>
    </tr>
  `).join("");

  emptyState.hidden = levels.length !== 0;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

document.querySelector("#level-count").textContent = T30L_LEVELS.length;
searchInput.addEventListener("input", renderLevels);
sortSelect.addEventListener("change", renderLevels);
renderLevels();
