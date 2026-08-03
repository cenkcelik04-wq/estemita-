import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { clinic, services } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-stack-lg overflow-hidden bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile w-full grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative z-10">
          <div className="flex flex-col gap-stack-md max-w-xl fade-in-up">
            <span className="font-label-md text-label-md text-tertiary uppercase tracking-[0.1em]">
              ESTEMITA AESTHETIC CLINIC
            </span>
            <h1 className="font-display-lg text-display-lg text-primary max-md:font-headline-lg-mobile max-md:text-headline-lg-mobile leading-tight">
              Zamanın Ötesinde Bir Güzellik
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Medikal uzmanlık ve zarif dokunuşların buluştuğu Estemita&apos;da, doğal güzelliğinizi ön plana
              çıkaran kişiselleştirilmiş estetik çözümler sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/iletisim"
                className="bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity tracking-widest"
              >
                Randevu Al
              </Link>
              <Link
                href="/hizmetler"
                className="gold-border-btn text-secondary font-label-md text-label-md uppercase px-8 py-4 rounded-DEFAULT hover:bg-secondary hover:text-on-secondary transition-all tracking-widest"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-xl overflow-hidden ambient-shadow fade-in-up stagger-1 max-md:h-[400px]">
            <Image
              fill
              className="object-cover"
              alt="Estemita Aesthetic Clinic konsültasyon odası"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo4-5zspDUWbuWZSNr3edPvXwPBmP1pk4Kx7QuCgBAnZY8-Sjsb8kD0gacHTJbGRAs_v-XSyZW2rol3JbVqyeWNhkZCfW7qoMOFzuGB1j1uuI7N_vVeRUmzT_kxUmUkZbzOmw49pDyP1FgIuqdm37PSO9NB51kAWMpdKk2yhVCW7USRdP6fw28OuCC9oIHbMgsZlnF6sTGiJ7k28A9aeZOvolgdi6exTD-jvsawldW0cXDqNifzfc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[400px] font-light text-primary">spa</span>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <Reveal className="col-span-1 md:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden h-[700px] ambient-shadow max-md:h-[500px]">
                <Image
                  fill
                  className="object-cover"
                  alt={clinic.doctor.name}
                  src="/images/doctor.jpg"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-surface-container-highest p-8 rounded-xl ambient-shadow hidden md:block border border-outline-variant/30">
                <span className="font-headline-md text-headline-md text-primary block mb-2">
                  {clinic.doctor.name}
                </span>
                <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                  {clinic.doctor.title}
                </span>
              </div>
            </Reveal>
            <div className="col-span-1 md:col-span-1 md:col-start-7 hidden md:block h-full">
              <div className="w-[1px] h-3/4 bg-outline-variant/50 mx-auto mt-12" />
            </div>
            <Reveal delay={150} className="col-span-1 md:col-span-5 flex flex-col gap-stack-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-DEFAULT w-fit border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest text-xs">
                  Uzmanlık &amp; Güven
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary max-md:font-headline-lg-mobile max-md:text-headline-lg-mobile">
                Sanat ve Tıbbın Kusursuz Uyumu
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {clinic.doctor.name}, uzun yıllara dayanan cerrahi deneyimi ve estetik vizyonuyla hastalarına
                Isparta&apos;da hizmet vermektedir. Her hastanın benzersiz vücut yapısına ve isteklerine uygun,
                doğal sonuçları hedefleyen kişiye özel tedavi protokolleri tasarlamaktadır.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Uluslararası standartlarda, en son cerrahi teknolojileri kullanarak gerçekleştirdiği başarılı
                operasyonlarla hem Türkiye&apos;den hem de dünyanın dört bir yanından gelen hastalarının
                hayatlarına dokunmakta, kalıcı özgüven kazandırmaktadır.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-outline-variant/30">
                <div>
                  <CountUp
                    value={clinic.stats.experienceYears}
                    className="block font-headline-md text-headline-md text-secondary mb-1"
                  />
                  <span className="font-label-md text-label-md text-tertiary uppercase text-xs tracking-wider">
                    Yıllık Deneyim
                  </span>
                </div>
                <div>
                  <CountUp
                    value={clinic.stats.happyPatients}
                    className="block font-headline-md text-headline-md text-secondary mb-1"
                  />
                  <span className="font-label-md text-label-md text-tertiary uppercase text-xs tracking-wider">
                    Mutlu Danışan
                  </span>
                </div>
              </div>
              <Link
                href="/hakkimizda"
                className="mt-4 inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-widest w-fit hover:text-secondary transition-colors"
              >
                Doktorumuzu Tanıyın
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section (Bento Grid) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.1em] mb-4 block">
              Hizmetlerimiz
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary max-md:font-headline-lg-mobile max-md:text-headline-lg-mobile mb-6">
              Özel Tedavi Seçenekleri
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              En güncel teknolojiler ve kanıta dayalı medikal yaklaşımlarla sunulan, cildinizin ihtiyacına özel
              tasarlanmış premium estetik uygulamalar.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <Reveal className="md:col-span-2">
              <Link
                href={`/hizmetler/${services[0].slug}`}
                className="relative h-full rounded-xl overflow-hidden group ambient-shadow bg-surface cursor-pointer block"
              >
                <Image
                  fill
                  alt={services[0].title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src={services[0].image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="font-headline-md text-headline-md text-on-primary mb-2">{services[0].title}</h3>
                  <p className="font-body-md text-body-md text-surface-container-low max-w-md line-clamp-2">
                    {services[0].shortDescription}
                  </p>
                  <div className="mt-4 flex items-center text-on-primary font-label-md text-label-md uppercase tracking-widest gap-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    İncele <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </Reveal>

            {services.slice(1).map((service, index) => (
              <Reveal key={service.slug} delay={(index + 1) * 100}>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="relative h-full rounded-xl overflow-hidden group ambient-shadow bg-surface cursor-pointer block"
                >
                  <Image
                    fill
                    alt={service.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="font-headline-md text-headline-md text-on-primary mb-2">{service.title}</h3>
                    <p className="font-body-md text-body-md text-surface-container-low line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6 relative rounded-xl overflow-hidden flex items-center justify-center p-12 bg-primary-fixed-dim ambient-shadow">
            <div className="text-center max-w-lg z-10">
              <span className="material-symbols-outlined text-secondary text-5xl mb-4 block">diamond</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
                Size Özel Bir Plan Oluşturalım
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                İhtiyaçlarınızı belirlemek ve en uygun tedavi protokolünü çizmek için ücretsiz ön görüşme
                randevunuzu planlayın.
              </p>
              <Link
                href="/iletisim"
                className="bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-3 rounded-DEFAULT hover:opacity-90 transition-opacity tracking-widest inline-block"
              >
                İletişime Geçin
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
