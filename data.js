let dynamicViews = "750"; // Başlangıçta dinamik izlenme sayısını saklamak için bir yer ayarlıyoruz

const allEpisodes = {
  "İnterpol Araştırmaları": {
    1: [
      {
        title: "İnterpol Araştırmaları<br><span class='episode-number'>[010]</span> 1. Sezon 10. Bölüm<br>(Terror in the Skies) - Göklerdeki Terör",
        date: "<p class=\"episode-date\">İlk Vizyona Girişi : 23 Kasım 2004</p>",
        thumbnail: "./img/II01S10E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/116231829103937",
        tags: ["Uçak", "Uçak Kaçırma", "1985", "Yunanistan", "Rehine Operasyonu"],
        views: dynamicViews // Dinamik değer burada kullanılacak
      }
    ]
  }
};

// Sayfa kaynağından alınan tüm veri buraya string olarak gelecek (örnek veri)
const sourceCode = `view-source:https://www.facebook.com/100021513607216/videos/116231829103937/`;

// Sayfa kaynağında "is_play_count_supported":false ile başlayan JSON parçasını arıyoruz
const match = sourceCode.match(/(\{\s*"is_live_streaming":false[\s\S]+?"is_play_count_supported":false\s*\})/);

if (match) {
  // JSON verisini alıyoruz
  const jsonStr = match[1];
  
  // JSON stringini parse ediyoruz
  const jsonObj = JSON.parse(jsonStr);
  
  // jsonObj'den play_count değerini alıyoruz
  dynamicViews = jsonObj.play_count;

  // Son olarak allEpisodes objesindeki views kısmını güncelliyoruz
  allEpisodes["İnterpol Araştırmaları"][1][0].views = dynamicViews;
}

// Dinamik veriyi HTML sayfasına yansıtmak için:
document.querySelector('.views').innerText = dynamicViews; // Buradaki .views sınıfına sahip elemanın içeriğini güncelliyoruz
