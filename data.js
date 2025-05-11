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
        views: 0 // Başlangıçta 0
      },
      {
        title: "[009] 1. Sezon 9. Bölüm - (Assault On Entebbe) - Uganda’ya Kaçırılan Uçak",
        date: "İlk Vizyona Girişi : 12 Haziran 2007",
        thumbnail: "./img/KA01S09E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/1031743588089291",
        tags: ["Uçak", "Uçak Kaçırma", "1976", "Uganda", "Rehine Operasyonu"],
        views: 0 // Başlangıçta 0
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
        views: "buraya yazılacak !" // Burada dinamik veriyi yazacağız
      },
      {
        title: "İnterpol Araştırmaları<br><span class='episode-number'>[011]</span> 1. Sezon 11. Bölüm<br>(Göklerdeki Korku) - Bir Uçak Kaçırma Operasyonu",
        date: "<p class=\"episode-date\">İlk Vizyona Girişi : 25 Aralık 2004</p>",
        thumbnail: "./img/II01S11E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/1376284733513700",
        tags: ["Uçak", "Uçak Kaçırma", "1986", "Almanya", "Rehine Operasyonu"],
        views: "buraya yazılacak !" // Burada da dinamik veriyi yazacağız
      }
    ],
    seasonYears: {
      1: 2004
    }
  }
};

// Dinamik veri çekme ve güncelleme işlemi

// Video 1 (ID: 116231829103937)
let video1 = document.querySelector('div[data-ft*="116231829103937"]'); 
if (video1) {
  let playCount1 = video1.innerHTML.match(/"play_count":(\d+)/);
  if (playCount1) {
    allEpisodes["İnterpol Araştırmaları"][1][0].views = parseInt(playCount1[1], 10); // İlk video izlenme sayısını güncelle
  }
}

// Video 2 (ID: 1376284733513700)
let video2 = document.querySelector('div[data-ft*="1376284733513700"]');
if (video2) {
  let playCount2 = video2.innerHTML.match(/"play_count":(\d+)/);
  if (playCount2) {
    allEpisodes["İnterpol Araştırmaları"][1][1].views = parseInt(playCount2[1], 10); // İkinci video izlenme sayısını güncelle
  }
}

// Sonucu yazdırma: Burada `views` değerini HTML sayfasında dinamik olarak göstereceğiz.
document.getElementById("result").innerHTML = JSON.stringify(allEpisodes, null, 2);
