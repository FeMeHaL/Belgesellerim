 // Başlığa göre arama
    function searchEpisodes() {
      const searchInput = document.getElementById('searchInput').value.toLowerCase();
      const container = document.getElementById('episodeContainer');

      if (searchInput.trim() === "") {
        loadSeason(currentSeason, currentSeries);
        return;
      }

      container.innerHTML = '';

      const allEpisodesArray = [];

      const seriesData = episodes[currentSeries];
      for (let season in seriesData) {
        if (Array.isArray(seriesData[season])) {
          allEpisodesArray.push(...seriesData[season]);
        }
      }

      const filtered = allEpisodesArray.filter(ep =>
        ep.title.toLowerCase().includes(searchInput)
      );

      if (filtered.length === 0) {
        container.innerHTML = `<p>"${searchInput}" ile eşleşen bölüm bulunamadı.</p>`;
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
