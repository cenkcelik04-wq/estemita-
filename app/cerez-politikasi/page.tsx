import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { clinic } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Çerez Politikası | Estemita Aesthetic Clinic",
  description: "Estemita Aesthetic Clinic Çerez Politikası.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="Çerez Politikası" />

      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile max-w-3xl flex flex-col gap-8">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {clinic.fullName} (&quot;Kliniğimiz&quot;) olarak, web sitemizin verimli çalışmasını sağlamak,
            kullanıcı deneyiminizi optimize etmek ve site istatistiklerini analiz etmek amacıyla çerezler
            (cookies) kullanmaktayız. Sitemizi ziyaret ederek çerezlerin bu politikada belirtilen şekilde
            kullanılmasını onaylamış olursunuz.
          </p>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">1. Çerez (Cookie) Nedir?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla bilgisayarınıza veya mobil
              cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin daha hızlı çalışmasını,
              tercihlerinize göre özelleştirilmesini ve site yöneticilerine anonim analiz verileri sunulmasını
              sağlar. Çerezler cihazınızdaki kişisel dosyalarınıza veya sistem verilerinize erişemez.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">2. Kullanılan Çerez Türleri</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Web sitemizde kullanılan çerezler işlevlerine göre aşağıdaki gruplara ayrılır:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <li>
                <strong className="text-primary">Zorunlu Çerezler:</strong> Web sitemizin temel işlevlerini
                yerine getirebilmesi, sayfalar arasında güvenli bir şekilde gezinebilmeniz ve site içi temel
                araçları kullanabilmeniz için gerekli teknik çerezlerdir. Bu çerezler devre dışı bırakılamaz.
              </li>
              <li>
                <strong className="text-primary">Performans ve Analiz Çerezleri:</strong> Sitemizi kaç kişinin
                ziyaret ettiğini, hangi sayfaların daha çok tıklandığını ve ziyaretçilerin sitede nasıl hareket
                ettiğini anlamamızı sağlayan, tamamen anonim istatistiksel veriler toplayan çerezlerdir (örneğin
                Google Analytics çerezleri).
              </li>
              <li>
                <strong className="text-primary">İşlevsel Çerezler:</strong> Sitemizi bir sonraki ziyaretinizde
                dil tercihlerinizi, ekran çözünürlüğü gibi kişisel ayarlarınızı hatırlayarak size daha hızlı ve
                pratik bir gezinme deneyimi sunan çerezlerdir.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">3. Çerezlerin Kullanım Amaçları</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Kliniğimiz çerezleri aşağıdaki amaçlarla kullanmaktadır:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <li>Sitenin çalışma performansını ve hızını artırmak,</li>
              <li>Kullanıcı tercihlerini hatırlayarak kullanım kolaylığı sunmak,</li>
              <li>
                Google Analytics ve Meta Pixel gibi analiz araçlarıyla anonim kullanım eğilimlerini analiz
                ederek sitemizi geliştirmek,
              </li>
              <li>İletişim butonlarının (WhatsApp, Harita yönlendirmesi vb.) işlevselliğini sağlamak.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">4. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Çerezleri kabul etmek veya yönetmek tamamen sizin kontrolünüzdedir. Kullandığınız tarayıcının
              (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge vb.) ayarlar menüsünden çerezleri tamamen
              engelleyebilir, cihazınıza yerleştirilmiş çerezleri silebilir ya da yalnızca belirli sitelerden
              gelen çerezleri kabul edebilirsiniz.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Çerezlerin devre dışı bırakılması durumunda, web sitemizin bazı fonksiyonlarının (örneğin WhatsApp
              hızlı iletişim hattı veya Google Harita gösterimi gibi entegrasyonlar) tam olarak
              çalışmayabileceğini hatırlatmak isteriz.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">5. İletişim</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Çerez Politikamız hakkındaki her türlü görüşünüz veya sorunuz için bizimle {clinic.phone} numaralı
              hattımız üzerinden iletişime geçmekten çekinmeyin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
