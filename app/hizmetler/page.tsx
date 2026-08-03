import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Estemita Aesthetic Clinic",
  description:
    "Medikal cilt bakımı, lazer epilasyon, BodyFX, dermapen ve altın iğne uygulamalarımız hakkında bilgi alın.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Özel Tedavi Seçenekleri"
        description="En güncel teknolojiler ve kanıta dayalı medikal yaklaşımlarla sunulan, cildinizin ihtiyacına özel tasarlanmış premium estetik uygulamalar."
      />

      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile flex flex-col gap-16">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              className={`scroll-mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div id={service.slug} className="scroll-mt-32 relative h-[400px] rounded-xl overflow-hidden ambient-shadow group">
                <Image
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={service.title}
                  src={service.image}
                />
              </div>
              <div className="flex flex-col gap-stack-sm">
                <h2 className="font-headline-lg text-headline-lg text-primary max-md:font-headline-lg-mobile max-md:text-headline-lg-mobile">
                  {service.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="gold-border-btn text-secondary font-label-md text-label-md uppercase px-8 py-4 rounded-DEFAULT hover:bg-secondary hover:text-on-secondary transition-all tracking-widest w-fit"
                  >
                    Detaylı Bilgi
                  </Link>
                  <Link
                    href="/iletisim"
                    className="bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity tracking-widest w-fit"
                  >
                    Randevu Al
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <Reveal className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile text-center max-w-2xl">
          <span className="material-symbols-outlined text-secondary text-5xl mb-4 block">diamond</span>
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Size Özel Bir Plan Oluşturalım</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            İhtiyaçlarınızı belirlemek ve en uygun tedavi protokolünü çizmek için ücretsiz ön görüşme randevunuzu
            planlayın.
          </p>
          <Link
            href="/iletisim"
            className="bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-3 rounded-DEFAULT hover:opacity-90 transition-opacity tracking-widest inline-block"
          >
            İletişime Geçin
          </Link>
        </Reveal>
      </section>
    </>
  );
}
