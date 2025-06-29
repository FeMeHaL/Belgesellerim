// Belgesel listesini yükler
function loadDocumentaries() {
  const sidebar = document.getElementById('sidebar');

  sidebar.innerHTML = `
    <div class="search-container">
      <input type="text" class="search-input" id="searchInput" placeholder="Bölüm başlığı ara..." onkeyup="searchEpisodes()">
    </div>
  `;

  for (let series in episodes) {
    const btn = document.createElement('button');
    btn.className = 'season-button';
    btn.innerText = series;
    btn.onclick = () => {
      loadSeasons(series);
      loadSeason(1, series);
    };
    sidebar.appendChild(btn);
  }
}

// Video oynatıcıyı açar
function playVideo(src) {
  const overlay = document.getElementById('videoOverlay');
  const video = document.getElementById('episodeVideo');

  if (src.includes("youtube.com")) {
    const videoId = src.split("v=")[1].split("&")[0];
    video.src = `https://www.youtube.com/embed/${videoId}`;
  } else if (src.includes("facebook.com")) {
    video.src = src;
  }

  overlay.style.display = 'flex';
}

// Video oynatıcıyı kapatır
function closeVideo() {
  const overlay = document.getElementById('videoOverlay');
  const video = document.getElementById('episodeVideo');
  overlay.style.display = 'none';
  video.src = '';
}
