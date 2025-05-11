// İzlenme sayısını almak için fonksiyon (şu an için sabit değer döndürüyoruz)
async function getViews(videoUrl) {
  return 750; // Burayı, dinamik olarak alacak şekilde güncelleyebilirsiniz
}

// Verilerin bulunduğu dış dosya
const allEpisodes = {
  "Kritik Anlar": {
    1: [
      {
        title: "[005] 1. Sezon 5. Bölüm - (Downed Pilot) - Bosna'da Düşen Uçak",
        date: "İlk Vizyona Girişi : 15 Mayıs 2007",
        thumbnail: "./img/KA01S05E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/506529168665653",
        tags: ["Uçak", "F16 Uçağının Düşürülmesi", "1995", "Bosna Hersek", "Pilot Kurtarma Operasyonu"],
        views: 0 // İzlenme sayısı başlangıçta 0
      },
      {
        title: "[009] 1. Sezon 9. Bölüm - (Assault On Entebbe) - Uganda’ya Kaçırılan Uçak",
        date: "İlk Vizyona Girişi : 12 Haziran 2007",
        thumbnail: "./img/KA01S09E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/1031743588089291",
        tags: ["Uçak", "Uçak Kaçırma", "1976", "Uganda", "Rehine Operasyonu"],
        views: 0 // İzlenme sayısı başlangıçta 0
      }
    ]
  },

  "İnterpol Araştırmaları": {
    1: [
      {
        title: "İnterpol Araştırmaları<br><span class='episode-number'>[010]</span> 1. Sezon 10. Bölüm<br>(Terror in the Skies) - Göklerdeki Terör",
        date: "<p class=\"episode-date\">İlk Vizyona Girişi : 23 Kasım 2004</p>",
        thumbnail: "./img/II01S10E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/116231829103937",
        tags: ["Uçak", "Uçak Kaçırma", "1985", "Yunanistan", "Rehine Operasyonu"],
        views: 0 // İzlenme sayısı başlangıçta 0
      }
    ],
    seasonYears: {
      1: 2004
    }
  }
};

// İzlenme sayısını güncelleme fonksiyonu
async function updateAllEpisodes() {
  for (const series in allEpisodes) {
    for (const season in allEpisodes[series]) {
      for (const episode of allEpisodes[series][season]) {
        const videoUrl = episode.video; // Video URL'sini al
        const views = await getViews(videoUrl); // İzlenme sayısını al

        episode.views = views; // İzlenme sayısını güncelle
      }
    }
  }

  // Güncellenmiş veriyi konsola yazdır
  console.log(allEpisodes);
}

// Verileri güncelle
updateAllEpisodes();
