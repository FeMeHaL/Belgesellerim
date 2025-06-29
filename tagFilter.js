// Etikete tıklanınca arama yap
    function searchTag(tag) {
      filterByTag(tag);
    }

    // Belirli etikete göre filtreleme
    function filterByTag(tag) {
      const container = document.getElementById('episodeContainer');
      container.innerHTML = '';

      const allEpisodesArray = [];

      document.getElementById('sidebar').style.transform = "translateX(-100%)";

      for (let series in episodes) {
        for (let season in episodes[series]) {
          if (Array.isArray(episodes[series][season])) {
            allEpisodesArray.push(...episodes[series][season]);
          }
        }
      }

      const filtered = allEpisodesArray.filter(ep => ep.tags.includes(tag));

      if (filtered.length === 0) {
        container.innerHTML = `<p>"${tag}" etiketiyle eşleşen bölüm bulunamadı.</p>`;
        return;
      }

      filtered.forEach(ep => {
        const epDiv = document.createElement('div');
        epDiv.className = 'episode';
        epDiv.innerHTML = `
      <div class="episode-image" onclick="playVideo('${ep.video}')">
	  <img src="${ep.thumbnail}" alt="${ep.title}">
	  </div>

      <p class="episode-title" onclick="playVideo('${ep.video}')">${ep.title}</p>
      <p class="episode-date">${ep.date}</p>
      ${ep.description ? `
        <div class="tooltip-container">
          <span class="tooltip-text">Bölüm Konusu</span>
          <div class="tooltip-balloon">${ep.description}</div>
        </div>
      ` : ''}
      <p class="episode-tags">
        ${ep.tags.map(tag => `<a class="tag" onclick="searchTag('${tag}')">${tag}</a>`).join('')}
      </p>
    `;
        container.appendChild(epDiv);
      });
    }