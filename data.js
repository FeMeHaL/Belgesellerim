const allEpisodes = {
  "İnterpol Araştırmaları": {
    1: [
      {
        title: "İnterpol Araştırmaları<br><span class='episode-number'>[010]</span> 1. Sezon 10. Bölüm<br>(Terror in the Skies) - Göklerdeki Terör",
        date: "<p class=\"episode-date\">İlk Vizyona Girişi : 23 Kasım 2004</p>",
        thumbnail: "./img/II01S10E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/116231829103937",
        tags: ["Uçak", "Uçak Kaçırma", "1985", "Yunanistan", "Rehine Operasyonu"],
        views: "buraya yazılacak !"
      }
    ]
  }
};

// Sayfa kaynağından alınan tüm veri buraya string olarak gelecek:
const sourceCode = `view-source:https://www.facebook.com/100021513607216/videos/116231829103937/`;

// İlk "is_live_streaming":false ile başlayan JSON parçasını bul
const match = sourceCode.match(/({\s*"is_live_streaming":false[\s\S]+?"is_play_count_supported":false\s*})/);

if (match) {
  const jsonStr = match[1];
  const jsonObj = JSON.parse(jsonStr);
  allEpisodes["İnterpol Araştırmaları"][1][0].views = jsonObj.play_count;
}
