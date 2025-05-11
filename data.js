// Tüm videolar için izlenme sayısını almak için genel bir fonksiyon
async function fetchVideoViews(videoUrl) {
  try {
    const response = await fetch(videoUrl); // Videonun sayfasından veriyi alıyoruz (bu API veya benzeri bir yapı ile olabilir)
    const sourceCode = await response.text(); // Sayfa kaynağını alıyoruz
    
    // "is_play_count_supported": false kısmından play_count değerini alıyoruz
    const match = sourceCode.match(/"is_play_count_supported":\s*false[\s\S]+?"play_count":\s*(\d+)/);
    
    if (match) {
      return match[1]; // play_count değerini döndürüyoruz
    } else {
      throw new Error("Play count verisi bulunamadı.");
    }
  } catch (error) {
    console.error("Video verisi alınırken hata oluştu:", error);
    return null;
  }
}

// Tüm bölümleri güncelleme fonksiyonu
async function updateVideoViews() {
  const allEpisodes = {
    "İnterpol Araştırmaları": {
      1: [
        {
          title: "İnterpol Araştırmaları<br><span class='episode-number'>[010]</span> 1. Sezon 10. Bölüm<br>(Terror in the Skies) - Göklerdeki Terör",
          date: "<p class=\"episode-date\">İlk Vizyona Girişi : 23 Kasım 2004</p>",
          thumbnail: "./img/II01S10E.jpg",
          video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/116231829103937",
          tags: ["Uçak", "Uçak Kaçırma", "1985", "Yunanistan", "Rehine Operasyonu"],
          views: "750" // Dinamik değer burada kullanılacak
        }
      ]
    }
  };
  
  const episodes = allEpisodes["İnterpol Araştırmaları"][1]; // Tüm bölümleri alıyoruz
  
  // Tüm bölümler için views değerlerini güncelleme
  for (const episode of episodes) {
    const videoUrl = episode.video; // Videonun URL'sini alıyoruz
    const views = await fetchVideoViews(videoUrl); // Videonun izlenme sayısını alıyoruz
    
    if (views) {
      episode.views = views; // İzlenme sayısını güncelliyoruz
    }
  }
  
  // Güncellenmiş verileri HTML'e yansıtmak için
  episodes.forEach(episode => {
    document.querySelector(`.views[data-video="${episode.video}"]`).innerText = episode.views;
  });
}

// Başlatmak için
updateVideoViews();
