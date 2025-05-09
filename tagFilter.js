// tagFilter.js
function getTagFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("tag");
}

function renderEpisodesByTag(tag) {
  const container = document.getElementById("results");
  const header = document.getElementById("header");
  header.textContent = `"${tag}" etiketine sahip bölümler`;

  const filtered = allEpisodes.filter(ep => ep.tags.includes(tag));
  if (filtered.length === 0) {
    container.innerHTML = "<p>Hiç bölüm bulunamadı.</p>";
    return;
  }

  filtered.forEach(ep => {
    const epDiv = document.createElement("div");
    epDiv.className = "episode";
    epDiv.innerHTML = `
      <h3>${ep.title}</h3>
      <p>${ep.date}</p>
      <img src="${ep.thumbnail}" alt="${ep.title}" />
      <div>${ep.tags.map(t => `<span class="tag" onclick="redirectToTag('${t}')">${t}</span>`).join("")}</div>
    `;
    container.appendChild(epDiv);
  });
}

function redirectToTag(tag) {
  window.location.href = `filter.html?tag=${encodeURIComponent(tag)}`;
}

const selectedTag = getTagFromURL();
if (selectedTag) {
  renderEpisodesByTag(selectedTag);
}
