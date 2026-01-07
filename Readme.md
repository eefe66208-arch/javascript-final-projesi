# Dönem Sonu Projesi - Programlama Şakaları Uygulaması

Bu proje, internet üzerindeki bir API'den veri çekerek ekranda listeleyen ve bu veriler üzerinde işlem yapan tek sayfalık bir web sitesidir. Tasarımda cyberpunk stili kullanılmıştır.

Kullanılan API Bilgileri
API Adı: JokeAPI
Kullanılan Endpoint: https://v2.jokeapi.dev/joke/Programming?amount=10

Uygulama Nasıl Çalışıyor?
1. Sayfa ilk açıldığında JavaScript'teki fetch komutu ile API adresine istek atılıyor ve 10 adet şaka verisi çekiliyor.
2. Gelen veriler bir diziye aktarılıyor ve forEach döngüsü ile HTML kartları oluşturulup sayfaya ekleniyor.
3. Kullanıcı arama kutusuna bir şey yazdığında veya kategoriyi değiştirdiğinde, elimizdeki dizi filter metodu ile süzülüyor ve sadece uyan sonuçlar ekranda kalıyor.
4. Kartlardaki Detay butonuna tıklandığında, tıklanan kartın ID bilgisi alınıyor, find metodu ile o şakanın tüm bilgileri bulunuyor ve açılan pencerede (modal) gösteriliyor.

Kullanılan JavaScript Konuları
Projeyi geliştirirken derste gördüğümüz şu konuları kullandım:
- Veri çekmek için Fetch API ve async/await yapısı
- Hataları yakalamak için try/catch blokları
- HTML elemanlarını kontrol etmek için DOM manipülasyonu (getElementById, querySelector, innerHTML)
- Verileri işlemek için Dizi Metotları (forEach, filter, find)
- Kullanıcı etkileşimi için addEventListener (click ve input olayları)
- Koşul kontrolleri için if/else ve ternary operatörü

Kurulum
Dosyaları bilgisayara indirip index.html dosyasını tarayıcıda açmak yeterlidir.