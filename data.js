const allEpisodes = {
  "İnterpol Araştırmaları": {
    1: [
      {
        title: "1. Sezon 10. Bölüm",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/116231829103937",
        views: "buraya yazılacak !"
      }
    ]
  }
};

// Sayfa kaynağından alınan tüm veri buraya string olarak gelecek:
const sourceCode = `...buraya view-source: içeriğini yapıştırıyorsun...`;

// İlk "is_live_streaming":false ile başlayan JSON parçasını bul
const match = sourceCode.match(/({\s*"is_live_streaming":false[\s\S]+?"is_play_count_supported":false\s*})/);

if (match) {
  const jsonStr = match[1];
  const jsonObj = JSON.parse(jsonStr);
  allEpisodes["İnterpol Araştırmaları"][1][0].views = jsonObj.play_count;
}
