# Estemita Aesthetic Clinic

Next.js 14 (App Router) + Tailwind CSS ile hazırlanmış, "Aura Aesthetic Precision" tasarım sistemini uygulayan klinik web sitesi.

## Kurulum

Bu makinede Node.js kurulu değil. Önce Homebrew ve Node.js kurmanız gerekiyor:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

Sonra proje klasöründe:

```bash
cd ~/estemita
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılacaktır.

## Eksik görseller

Aşağıdaki dosyalar henüz eklenmedi, yer tutucu (broken image) olarak görünecektir:

- `public/images/doctor.jpg` — Op. Dr. Avni Hakan Ölmeztürk fotoğrafı
- `public/images/gallery/1.jpg` ... `6.jpg` — Galeri sayfası görselleri

Bu dosyaları ekledikten sonra otomatik olarak siteye yansıyacaktır.

## Sayfalar

- `/` — Ana sayfa
- `/hakkimizda` — Doktor ve klinik hakkında
- `/hizmetler` — Tüm tedavi seçenekleri
- `/galeri` — Klinik ve uygulama görselleri
- `/iletisim` — İletişim bilgileri + randevu formu (şu an sadece front-end, e-posta/CRM entegrasyonu eklenmedi)

## Notlar

- Adres bilgisi mockup'ta "Isparta" olarak geçiyor ancak metinlerde "Antalya" ifadesi de vardı; Isparta esas alındı. Doğru şehri onaylayın.
