// Verilerin bulunduğu dış dosya
const allEpisodes = {
  "Kritik Anlar": {
    1: [
      {
        title: "[005] 1. Sezon 5. Bölüm - (Downed Pilot) - Bosna'da Düşen Uçak",
        date: "İlk Vizyona Girişi : 15 Mayıs 2007",
        thumbnail: "./img/KA01S05E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/506529168665653",
        tags: ["Uçak", "F16 Uçağının Düşürülmesi", "1995", "Bosna Hersek", "Pilot Kurtarma Operasyonu"]
      },
      {
        title: "[009] 1. Sezon 9. Bölüm - (Assault On Entebbe) - Uganda’ya Kaçırılan Uçak",
        date: "İlk Vizyona Girişi : 12 Haziran 2007",
        thumbnail: "./img/KA01S09E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/1031743588089291",
        tags: ["Uçak", "Uçak Kaçırma", "1976", "Uganda", "Rehine Operasyonu"]
      }
    ]
  },
  
    "Nazilerin Mega Yapıları": {
    1: [
      {
        title: "<br>NAZİLERİN MEGA YAPILARI<br><span class='episode-number'>[001]</span> 1. Sezon 1. Bölüm - (Atlantic Wall) - Atlantik Duvarı / Savunma Hattı",
        date: "<p class=\"episode-date\">İlk Vizyona Girişi : 1 Temmuz 2013</p>",
        thumbnail: "./img/NM01S01E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/100021513607216/videos/pcb.986959495364495/233550168915635",
        description: "Atlantik Duvarı, Nazi Almanyası tarafından 1942 ile 1944 yılları arasında, II. Dünya Savaşı sırasında Birleşik Krallık'tan Nazi işgali altındaki Avrupa'ya yönelik beklenen Müttefik işgaline karşı savunma olarak kıta Avrupası ve İskandinavya kıyıları boyunca inşa edilen kapsamlı bir kıyı savunma ve tahkimat sistemiydi.",
        tags: ["Kıyı Savunması", "Tahkimat", "1942", "D-Günü", "Topçu Bataryaları"]
      },
	  {
        title: "<br>NAZİLERİN MEGA YAPILARI<br><span class='episode-number'>[002]</span> 1. Sezon 2. Bölüm - (U-Boat Base) - Denizaltı Üssü / Hitler'in Sığınakları",
        date: "<p class=\"episode-date\">İlk Vizyona Girişi : 18 Kasım 2013</p>",
        thumbnail: "./img/NM01S02E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/1322528934837042",
        description: "Lorient Denizaltı Üssü, Fransa'nın Lorient kentinde bulunan bir denizaltı deniz üssüydü. 1941'de Alman Kriegsmarine tarafından inşa edildi ve 1943'e kadar genişletilmeye devam etti. Alman yenilgisinden sonra Fransız Donanması tarafından kullanıldı. 1995'te hizmet dışı bırakıldı ve sivil kullanıma dönüştürüldü.",
        tags: ["Lorient Denizaltı Üssü", "Dom Sığınakları", "1941", "Jacques Stosskopf", "Keroman Denizaltı Müzesi"]
      },
      {
        title: "<br>NAZİLERİN MEGA YAPILARI<br><span class='episode-number'>[003]</span> 1. Sezon 3. Bölüm - (V2 Rocket Bases) - V2 Roket Rampaları/ İntikam Silahları",
        date: "<p class=\"episode-date\">İlk Vizyona Girişi : 25 Kasım 2013</p>",
        thumbnail: "./img/NM01S03E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/1031219407729058",
        description: "V2, teknik adı Aggregat -4 ( A4 ) olan, dünyanın ilk uzun menzilli [ 4 ] güdümlü balistik füzesiydi. Sıvı yakıtlı bir roket motoruyla çalışan füze, İkinci Dünya Savaşı sırasında Nazi Almanyası'nda bir intikam silahı olarak geliştirildi ve Müttefiklerin Alman şehirlerini bombalamasına misilleme olarak Müttefik şehirlerine saldırmak üzere görevlendirildi. V2 roketi ayrıca 20 Haziran 1944'te MW 18014'ün dikey fırlatılmasıyla Kármán hattını (uzayın kenarı) geçerek uzaya giden ilk yapay nesne oldu.",
        tags: ["Roket", "Balistik Füze", "1944", "Mittelwerk", "Peenemünde Ordu Araştırma Merkezi"]
      }
    ]
  },

  "İnterpol Araştırmaları": {
    1: [
      {
        title: "<br>İNTERPOL ARAŞTIRMALARI<br><span class='episode-number'>[010]</span> 1. Sezon 10. Bölüm<br>(Terror in the Skies)<br>Göklerdeki Terör",
        date: "<p class=\"episode-date\">İlk Vizyona Girişi : 23 Kasım 2004</p>",
        thumbnail: "./img/II01S10E.jpg",
        video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ferhat.polaterce.9/videos/625048620697878",
        description: "Mısır Havayolları Uçuş 648, Yunanistan'ın Atina (Ellinikon) Uluslararası Havaalanından Mısır'ın Kahire Uluslararası Havaalanına gitmek üzere havalandığı sırada kalkıştan on dakika sonra uçak terör örgütü Ebu Nidal tarafından kaçırıldı. Teröristler uçağı Malta'ya götürmek istediler. Teröristleri pasaport kontrolü sırasında bir sürpriz bekliyordu. Maltalıları da sürpriz bekliyordu tabi.",
        tags: ["Uçak", "Uçak Kaçırma", "1985", "Rehine Operasyonu", "Egypt Air Flight 648"]
      }
    ],
    seasonYears: {
      1: 2004
    }
  }
};