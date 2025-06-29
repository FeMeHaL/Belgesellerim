document.body.innerHTML = `
  <!-- Sol panel -->
  <div class="sidebar" id="sidebar">
    <div class="search-container">
      <input type="text" class="search-input" id="searchInput" placeholder="Bölüm başlığı ara..."
        onkeyup="searchEpisodes()">
    </div>
  </div>

  <!-- İçerik alanı -->
  <div class="content" id="episodeContainer"></div>

  <!-- Video oynatıcı -->
  <div class="video-overlay" id="videoOverlay">
    <span class="close-btn" onclick="closeVideo()">×</span>
    <iframe id="episodeVideo" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </div>
`;
