// Verilerin bulunduğu dış dosya
const allEpisodes = {
  "İnterpol Araştırmaları": {
    1: [
      {
        title: "İnterpol Araştırmaları - [010] 1. Sezon 10. Bölüm - Göklerdeki Terör",
        date: "İlk Vizyona Girişi : 23 Kasım 2004",
        thumbnail: "./img/II01S10E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/116231829103937",
        tags: ["Uçak", "Uçak Kaçırma", "1985", "Yunanistan", "Rehine Operasyonu"],
        views: "buraya yazılacak !" // Burada dinamik veriyi yazacağız
      },
      {
        title: "İnterpol Araştırmaları - [011] 1. Sezon 11. Bölüm - Bir Uçak Kaçırma Operasyonu",
        date: "İlk Vizyona Girişi : 25 Aralık 2004",
        thumbnail: "./img/II01S11E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/1376284733513700",
        tags: ["Uçak", "Uçak Kaçırma", "1986", "Almanya", "Rehine Operasyonu"],
        views: "buraya yazılacak !" // Burada dinamik veriyi yazacağız
      }
    ],
    seasonYears: {
      1: 2004
    }
  }
};

// Dinamik veri çekme ve güncelleme işlemi
window.onload = function() {
  // Video 1 (ID: 116231829103937) ile ilgili öğeyi seçiyoruz
  let video1 = document.querySelector('div[data-video-id="116231829103937"]'); // Video 1 öğesini seç
  if (video1) {
    // Play count'ı almak için veriyi doğru şekilde parse ediyoruz
    let playCount1 = video1.getAttribute("data-play-count"); // Varsayalım ki video öğesinde data-play-count özelliği var
    if (playCount1) {
      allEpisodes["İnterpol Araştırmaları"][1][0].views = parseInt(playCount1, 10); // İlk video izlenme sayısını güncelle
    }
  }

  // Video 2 (ID: 1376284733513700) ile ilgili öğeyi seçiyoruz
  let video2 = document.querySelector('div[data-video-id="1376284733513700"]'); // Video 2 öğesini seç
  if (video2) {
    // Play count'ı almak için veriyi doğru şekilde parse ediyoruz
    let playCount2 = video2.getAttribute("data-play-count"); // Varsayalım ki video öğesinde data-play-count özelliği var
    if (playCount2) {
      allEpisodes["İnterpol Araştırmaları"][1][1].views = parseInt(playCount2, 10); // İkinci video izlenme sayısını güncelle
    }
  }

  // Güncellenmiş JSON verisini HTML sayfasında göstereceğiz
  document.getElementById("result").innerHTML = JSON.stringify(allEpisodes, null, 2);
};
