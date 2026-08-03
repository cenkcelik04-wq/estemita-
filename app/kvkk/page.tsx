import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { clinic } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Estemita Aesthetic Clinic",
  description: "Estemita Aesthetic Clinic KVKK Aydınlatma Metni.",
};

export default function KvkkPage() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni" />

      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile max-w-3xl flex flex-col gap-8">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {clinic.fullName} (&quot;Kliniğimiz&quot;) olarak, danışanlarımızın, ziyaretçilerimizin ve
            çalışanlarımızın kişisel verilerinin korunmasına büyük önem veriyoruz. 6698 sayılı Kişisel Verilerin
            Korunması Kanunu (&quot;Kanun&quot;) çerçevesinde, veri sorumlusu sıfatıyla kişisel verilerinizi hangi
            amaçlarla işleyeceğimizi, kimlerle paylaşabileceğimizi ve haklarınızı bu Aydınlatma Metni ile
            açıklıyoruz.
          </p>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">1. Veri Sorumlusu</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Kanun uyarınca, {clinic.fullName} (Adres: {clinic.address}) veri sorumlusu sıfatıyla hareket
              etmektedir. Kliniğimiz, verilerinizin güvenli bir şekilde muhafaza edilmesi ve hukuka aykırı olarak
              işlenmesinin önlenmesi amacıyla gerekli her türlü teknik ve idari tedbiri almaktadır.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">2. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Toplanan kişisel verileriniz, Kanun&apos;un 5. ve 6. maddelerinde belirtilen kişisel veri işleme
              şartları dahilinde, aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <li>Randevu süreçlerinin yönetilmesi, takibi ve danışanlarımızın bilgilendirilmesi,</li>
              <li>
                Kişiye özel cilt bakımı, vücut şekillendirme ve estetik protokollerinin planlanması ve
                yürütülmesi,
              </li>
              <li>
                Uygulama öncesi sağlık durumunuzun ve cilt yapınızın işleme uygunluğunun değerlendirilmesi
                (uzman değerlendirmesi amacıyla),
              </li>
              <li>
                Kliniğimizin yasal yükümlülüklerinin yerine getirilmesi ve resmi kurumların taleplerine cevap
                verilmesi,
              </li>
              <li>Hizmet kalitemizin artırılması, danışan memnuniyeti süreçlerinin yönetilmesi,</li>
              <li>İletişim faaliyetlerinin yürütülmesi ve sorularınızın yanıtlanması.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">3. İşlenen Kişisel Veriler</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Kliniğimiz tarafından işlenen veriler şunları kapsayabilir:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <li>
                <strong className="text-primary">Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası
                (gerekli hallerde), doğum tarihi.
              </li>
              <li>
                <strong className="text-primary">İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi,
                adres bilgileri.
              </li>
              <li>
                <strong className="text-primary">Sağlık ve Uygulama Bilgileri:</strong> Cilt tipi, geçmiş cilt
                tedavileri, alerjik durumlar, kullanılan ilaçlar, hamilelik/emzirme bilgisi gibi işlemlerin
                güvenliğini etkileyecek özel nitelikli kişisel veriler.
              </li>
              <li>
                <strong className="text-primary">Görsel Veriler:</strong> Randevu ve seans öncesi/sonrası
                gelişim takibi amacıyla (açık rızanız doğrultusunda) çekilen fotoğraflar.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">4. Kişisel Verilerin Aktarılması</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda ve
              Kanun&apos;un aktarıma ilişkin kuralları çerçevesinde; yasal yükümlülüklerimizin yerine getirilmesi
              amacıyla yetkili kamu kurum ve kuruluşlarına, adli makamlara ve danışan ilişkileri yönetim
              sistemleri gibi teknik destek aldığımız iş ortaklarımıza (veri işleme sözleşmeleri güvencesiyle)
              aktarılabilmektedir. Kişisel verileriniz açık rızanız olmadan üçüncü taraflara ticari veya reklam
              amacıyla aktarılmaz.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-headline-md text-headline-md text-primary">5. Haklarınız</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Kanun&apos;un 11. maddesi uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
              <li>
                Eksik veya yanlış işlenmişse düzeltilmesini isteme, Kanun çerçevesinde silinmesini veya yok
                edilmesini talep etme,
              </li>
              <li>
                İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize
                bir sonucun ortaya çıkmasına itiraz etme.
              </li>
            </ul>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Bu haklarınızı kullanmak için, kimliğinizi teyit edici belgeler ile birlikte kliniğimizin{" "}
              {clinic.address} adresine yazılı olarak başvurabilir veya {clinic.phone} numaralı telefonumuz
              üzerinden bizimle irtibata geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
