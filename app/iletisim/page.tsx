import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { clinic } from "@/lib/site-config";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Estemita Aesthetic Clinic",
  description: "Estemita Aesthetic Clinic ile iletişime geçin, randevu talep edin.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bize Ulaşın"
        description="Sorularınız veya randevu talebiniz için formu doldurun ya da doğrudan bizimle iletişime geçin."
      />

      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-stack-md">
            <h2 className="font-headline-md text-headline-md text-primary mb-2">İletişim Bilgileri</h2>
            <div className="flex items-start gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary">location_on</span>
              <span className="font-body-md text-body-md">{clinic.address}</span>
            </div>
            <a href={clinic.phoneHref} className="flex items-start gap-3 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-secondary">call</span>
              <span className="font-body-md text-body-md">{clinic.phone}</span>
            </a>
            <a href={`mailto:${clinic.email}`} className="flex items-start gap-3 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <span className="font-body-md text-body-md">{clinic.email}</span>
            </a>
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-secondary">chat</span>
              <span className="font-body-md text-body-md">WhatsApp ile Yazın</span>
            </a>
            <div className="flex items-start gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary">schedule</span>
              <div className="flex flex-col gap-1">
                {clinic.workingHours.map((entry) => (
                  <span key={entry.days} className="font-body-md text-body-md">
                    {entry.days}: {entry.hours}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden ambient-shadow h-72">
              <iframe
                title="Estemita Aesthetic Clinic Konum"
                className="w-full h-full border-0"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`}
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
