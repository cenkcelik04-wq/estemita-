import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { clinic } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Estemita Aesthetic Clinic",
  description: "Estemita Aesthetic Clinic Gizlilik Politikası.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="Gizlilik Politikası" />

      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile max-w-3xl flex flex-col gap-8">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {clinic.fullName} (&quot;Kliniğimiz&quot;) olarak, web sitemizi ziyaret eden kullanıcılarımızın
            gizlilik haklarına saygı duyuyor ve bilgi güvenliğini önemsiyoruz. Bu Gizlilik Politikası, sitemizi
            ziyaret ettiğinizde veya iletişim kanallarımızı kullandığınızda hangi verilerin toplandığını,
            bunların nasıl kullanıldığını ve korunduğunu açıklamaktadır.
          </p>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">1. Toplanan Bilgiler</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Web sitemizi ziyaretiniz sırasında aşağıdaki şekillerde bilgi toplayabiliriz:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <li>
                <strong className="text-primary">Gönüllü Olarak Paylaşılan Bilgiler:</strong> Sitemiz üzerinden
                WhatsApp butonlarına tıkladığınızda veya telefon numaramızı aradığınızda paylaştığınız iletişim
                bilgileri ve mesaj içerikleri.
              </li>
              <li>
                <strong className="text-primary">Otomatik Toplanan Bilgiler:</strong> Web sitemizin performansını
                artırmak ve kullanıcı deneyimini iyileştirmek amacıyla çerezler (cookies) ve analiz araçları
                vasıtasıyla toplanan IP adresi, tarayıcı türü, yönlendirici sayfalar, işletim sistemi ve sitede
                kalış süresi gibi anonim istatistiksel veriler.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">2. Bilgilerin Kullanım Amaçları</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Toplanan anonim ve kişisel verileriniz yalnızca aşağıdaki amaçlarla kullanılmaktadır:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <li>Sorularınıza, taleplerinize cevap vermek ve randevu işlemlerinizi kolaylaştırmak,</li>
              <li>Sitemizin kullanılabilirliğini, hızını ve performansını optimize etmek,</li>
              <li>İstatistiki analizler yaparak web sitemizin içeriklerini ve sunduğumuz hizmetleri geliştirmek,</li>
              <li>Yasal yükümlülüklerin yerine getirilmesini sağlamak.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">3. Çerezler (Cookies)</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Web sitemiz, ziyaretçilerin kullanım tercihlerini analiz etmek amacıyla tarayıcı çerezleri
              kullanmaktadır. Çerezler hakkında detaylı bilgiye ve çerez tercihlerinizi nasıl
              yönetebileceğinize{" "}
              <Link href="/cerez-politikasi" className="text-secondary hover:text-primary transition-colors">
                Çerez Politikası
              </Link>{" "}
              sayfamızdan ulaşabilirsiniz.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">4. Bilgi Güvenliği ve Üçüncü Taraflar</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Kliniğimiz, toplanan verilerin yetkisiz erişime, kayba veya çalınmaya karşı korunması için
              endüstri standartlarında teknik önlemler almaktadır. Sitemiz üzerindeki iletişim verileriniz veya
              istatistiki kullanım verileriniz yasal zorunluluklar hariç olmak üzere ticari, pazarlama ya da
              reklam amacıyla üçüncü şahıslarla paylaşılmaz, satılmaz veya kiralanmaz.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">5. Dış Bağlantılar</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Sitemiz, Google Haritalar, Instagram veya diğer sosyal mecralar gibi dış web sitelerine bağlantılar
              içerebilir. Bu sitelerin kendilerine ait gizlilik politikaları mevcut olup, yönlendirildiğiniz dış
              sitelerin gizlilik uygulamalarından Kliniğimiz sorumlu tutulamaz. Ziyaret ettiğiniz her sitenin
              gizlilik politikasını incelemeniz önerilir.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">6. Güncellemeler ve İletişim</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Kliniğimiz, bu Gizlilik Politikası hükümlerini gerekli gördüğü takdirde web sitesinde yayınlamak
              suretiyle güncelleyebilir. Güncellenen politika sitede yayınlandığı tarihte yürürlüğe girer.
              Gizlilik esaslarımız hakkındaki her türlü sorunuz için bizimle {clinic.phone} numaralı hattımız
              üzerinden iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
