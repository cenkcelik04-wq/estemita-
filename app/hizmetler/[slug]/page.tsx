import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Estemita Aesthetic Clinic`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow={service.category} title={service.title} description={service.shortDescription} />

      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] rounded-xl overflow-hidden ambient-shadow">
            <Image fill className="object-cover" alt={service.title} src={service.image} />
          </div>
          <div className="flex flex-col gap-stack-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-DEFAULT w-fit border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary text-sm">verified</span>
              <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest text-xs">
                {service.category}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary max-md:font-headline-lg-mobile max-md:text-headline-lg-mobile">
              Uygulama Hakkında
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {service.shortDescription}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Uygulama öncesinde cilt yapınız ve ihtiyaçlarınız uzmanımız tarafından ücretsiz olarak
              değerlendirilir; seans sıklığı ve süresi bu değerlendirmeye göre kişiselleştirilir. Uygulama
              sonuçları kişiden kişiye değişebilir.
            </p>
            <Link
              href="/iletisim"
              className="mt-4 bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity tracking-widest w-fit"
            >
              Randevu Al
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile text-center max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-secondary text-5xl mb-4 block">diamond</span>
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Diğer Hizmetlerimizi İnceleyin</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            İhtiyaçlarınıza en uygun tedaviyi bulmak için tüm hizmetlerimize göz atabilir ya da doğrudan bizimle
            iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hizmetler"
              className="gold-border-btn text-secondary font-label-md text-label-md uppercase px-8 py-3 rounded-DEFAULT hover:bg-secondary hover:text-on-secondary transition-all tracking-widest inline-block"
            >
              Tüm Hizmetler
            </Link>
            <Link
              href="/iletisim"
              className="bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-3 rounded-DEFAULT hover:opacity-90 transition-opacity tracking-widest inline-block"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
