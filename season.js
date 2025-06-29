let currentSeries = "";
let currentSeason = 1;

const episodes = allEpisodes;

// Sezon yükleme
function loadSeason(season, seriesName) {
  currentSeries = seriesName;
  currentSeason = season;
  const container = document.getElementById('episodeContainer');
  container.innerHTML = '';

  const seasonEpisodes = episodes[seriesName][season];

  if (!seasonEpisodes || seasonEpisodes.length === 0) {
    container.innerHTML = "<p>Bu sezona ait bölüm bulunamadı.</p>";
    return;
  }

  seasonEpisodes.forEach(ep => {
    const epDiv = document.createElement('div');
    epDiv.className = 'episode';
    epDiv.innerHTML = `
      <div class="episode-image" onclick="playVideo('${ep.video}')">
        <img src="${ep.thumbnail}" alt="${ep.title}">
      </div>
      <p class="episode-title" onclick="playVideo('${ep.video}')">${ep.title}</p>
      <p class="episode-date">${ep.date}</p>
      <div class="tooltip-and-tags">
        ${ep.description ? `
          <div class="tooltip-container">
            <span class="tooltip-text">Bölüm Konusu</span>
            <div class="tooltip-balloon">${ep.description}</div>
          </div>
        ` : ''}
        <div class="episode-tags">
          ${ep.tags.map(tag => `<a class="tag" onclick="searchTag('${tag}')">${tag}</a>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(epDiv);
  });
}

// Sezon butonlarını yükle
function loadSeasons(seriesName) {
  const sidebar = document.getElementById('sidebar');

  sidebar.innerHTML = `
    <div class="search-container">
      <input type="text" class="search-input" id="searchInput" placeholder="Bölüm başlığı ara..." onkeyup="searchEpisodes()">
    </div>
  `;

  const seasons = Object.keys(episodes[seriesName])
    .filter(key => !isNaN(key))
    .map(key => parseInt(key))
    .sort((a, b) => a - b); // küçükten büyüğe sırala

  seasons.forEach(season => {
    const yearText = episodes[seriesName].seasonYears?.[season]
      ? ` (${episodes[seriesName].seasonYears[season]})` : '';

    const btn = document.createElement('button');
    btn.className = 'season-button';
    btn.innerText = `${season}. SEZON${yearText}`;
    btn.onclick = () => loadSeason(season, seriesName);
    sidebar.appendChild(btn);
  });

  // Otomatik olarak en büyük sezonu yükle
  const lastSeason = Math.max(...seasons);
  loadSeason(lastSeason, seriesName);
}
