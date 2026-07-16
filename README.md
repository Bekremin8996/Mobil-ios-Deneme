# 📝 Günlük Aktivite Asistanı

Günlük aktivitelerinizi takip eden, otomatik kategorize eden ve istatistiklerinizi gösteren akıllı chatbot uygulaması!

## 🌟 Özellikler

### ✅ Temel Özellikler
- **Akıllı Chatbot Arayüzü** - Telegram/WhatsApp tarzı modern sohbet ekranı
- **Otomatik Kategorizasyon** - Aktiviteleriniz otomatik olarak kategorilere ayrılır
- **8 Farklı Kategori**:
  - 💼 İş (toplantı, proje, sunum, vb.)
  - 💪 Sağlık (spor, egzersiz, koşu, vb.)
  - 👥 Sosyal (arkadaşlar, aile, buluşmalar, vb.)
  - 📚 Eğitim (okuma, kurs, öğrenme, vb.)
  - 🎨 Hobi (müzik, film, oyun, vb.)
  - 🏠 Ev İşleri (temizlik, yemek, alışveriş, vb.)
  - 💰 Finans (banka, fatura, ödeme, vb.)
  - 📌 Diğer

### 📊 İstatistikler
- **Zaman Filtresi**: Bu Hafta / Bu Ay / Tümü
- **Kategori Analizi**: Hangi kategoride kaç aktivite yaptığınızı görün
- **Son Aktiviteler**: En son eklediğiniz aktivitelerin listesi
- **Toplam Sayaç**: Toplam aktivite sayınız

### 💾 Veri Yönetimi
- **Local Storage**: Tüm verileriniz tarayıcınızda güvenle saklanır
- **Offline Çalışma**: İnternet bağlantısı olmadan da kullanabilirsiniz
- **Veri Silme**: İstediğiniz zaman tüm verileri silebilirsiniz

### 📱 Mobil Uyumlu
- Telefon, tablet ve bilgisayarda mükemmel çalışır
- Responsive tasarım
- Touch-friendly arayüz

## 🚀 Kullanım

### Web Tarayıcısında Açma
1. `index.html` dosyasını çift tıklayın
2. Veya bir web sunucusu ile çalıştırın:
   ```bash
   # Python ile
   python -m http.server 8000
   
   # Node.js ile (http-server)
   npx http-server
   ```
3. Tarayıcınızda açın: `http://localhost:8000`

### Telefonda Kullanma
1. Dosyaları bir web sunucusuna yükleyin (GitHub Pages, Netlify, Vercel, vb.)
2. Veya bilgisayarınızda çalıştırıp telefon tarayıcısından local IP'ye bağlanın
3. Tarayıcı menüsünden "Ana Ekrana Ekle" seçeneğini kullanarak PWA gibi kullanın

## 📖 Nasıl Çalışır?

### Aktivite Ekleme
Chatbot arayüzüne günlük aktivitelerinizi yazın:

**Örnekler:**
- "Bugün 1 saat spor yaptım"
- "Toplantıya gittim ve proje sunumunu tamamladım"
- "Arkadaşlarımla kahve içtik"
- "30 sayfa kitap okudum"
- "Market alışverişi yaptım ve akşam yemeği hazırladım"

### Otomatik Kategorizasyon
Sistem, yazdığınız metindeki anahtar kelimeleri analiz eder ve otomatik olarak kategorilere ayırır:

- **İş**: iş, toplantı, proje, ofis, çalışma, müşteri, sunum, rapor
- **Sağlık**: spor, koşu, yürüyüş, yoga, fitness, gym, egzersiz
- **Sosyal**: arkadaş, aile, görüşme, buluşma, sohbet, kahve
- **Eğitim**: okuma, kitap, ders, kurs, öğrenme, makale
- **Hobi**: müzik, oyun, film, dizi, resim, fotoğraf
- **Ev İşleri**: temizlik, yemek, alışveriş, market, çamaşır
- **Finans**: para, banka, fatura, ödeme, harcama
- **Diğer**: Yukarıdaki kategorilere uymayan her şey

### İstatistikleri Görüntüleme
1. Sağ üstteki **📊** butonuna tıklayın
2. Zaman filtresini seçin (Bu Hafta / Bu Ay / Tümü)
3. Kategori analizlerinizi ve son aktivitelerinizi görün

## 🎨 Tasarım Özellikleri

- **Modern Gradient Renk Paleti**: Mor-mavi gradient tema
- **Smooth Animasyonlar**: Mesajlar ve modal geçişlerinde akıcı animasyonlar
- **Emoji Kullanımı**: Her kategori için özel emoji
- **Dark Mode Hazır**: İleride dark mode eklenebilir
- **Accessible**: Erişilebilirlik standartlarına uygun

## 🔧 Teknik Detaylar

### Teknolojiler
- **HTML5**: Semantik ve modern HTML yapısı
- **CSS3**: Flexbox, Grid, Animasyonlar, Gradient
- **Vanilla JavaScript**: Framework kullanmadan saf JavaScript
- **LocalStorage API**: Veri saklama
- **Responsive Design**: Mobile-first yaklaşım

### Tarayıcı Desteği
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobil tarayıcılar (iOS Safari, Chrome Mobile)

### Dosya Yapısı
```
.
├── index.html          # Ana HTML dosyası
├── styles.css          # Stil dosyası
├── app.js             # JavaScript mantığı
└── README.md          # Bu dosya
```

## 💡 Kullanım İpuçları

1. **Düzenli Kayıt Tutun**: Her gün aktivitelerinizi kaydedin
2. **Detaylı Yazın**: Ne kadar detaylı yazarsanız, kategorizasyon o kadar doğru olur
3. **İstatistikleri İnceleyin**: Haftalık/aylık aktivite paternlerinizi analiz edin
4. **Motivasyon Mesajları**: Her 5 aktivitede bir motivasyon mesajı alırsınız!
5. **Ana Ekrana Ekleyin**: Telefonda uygulama gibi kullanmak için ana ekrana ekleyin

## 🔐 Gizlilik

- Tüm veriler **sadece sizin cihazınızda** saklanır
- Hiçbir veri sunucuya gönderilmez
- İnternet bağlantısı olmadan da çalışır
- Verilerinizi istediğiniz zaman silebilirsiniz

## 🎯 Gelecek Özellikler

- [ ] Dark mode desteği
- [ ] Daha fazla kategori ekleme özelliği
- [ ] Grafik ve chart görselleştirmeleri
- [ ] Export/Import (JSON, CSV)
- [ ] Günlük hedef belirleme
- [ ] Hatırlatıcı bildirimleri
- [ ] Ruh hali takibi
- [ ] Fotoğraf ekleme
- [ ] Arama ve filtreleme

## 📝 Lisans

Bu proje açık kaynak kodludur ve serbestçe kullanılabilir.

## 🤝 Katkıda Bulunma

Önerileriniz ve katkılarınız için açığız! Pull request göndermekten çekinmeyin.

---

**Made with ❤️ by Cursor AI**

Keyifli kullanımlar! 🎉
