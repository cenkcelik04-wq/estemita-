import Image from "next/image";
import Link from "next/link";
import { clinic, legalLinks, navLinks } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="w-full mt-stack-lg bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-desktop py-stack-lg flex flex-col md:flex-row justify-between items-start gap-gutter max-md:px-margin-mobile">
        <div className="flex flex-col gap-6 max-w-sm">
          <Link href="/" className="flex items-center">
            <Image src="/images/estemita_logo.png" alt="Estemita Aesthetic Clinic" width={120} height={120} className="h-14 w-auto object-contain" />
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Isparta&apos;da kişiye özel plastik, rekonstrüktif ve estetik cerrahi ile medikal estetik uygulamaları.
            {" "}
            {clinic.doctor.name} liderliğinde her hasta için bireysel planlama.
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary">location_on</span>
              <span className="font-body-md text-body-md">{clinic.address}</span>
            </div>
            <a href={clinic.phoneHref} className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-secondary">call</span>
              <span className="font-body-md text-body-md">{clinic.phone}</span>
            </a>
            <a href={`mailto:${clinic.email}`} className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <span className="font-body-md text-body-md">{clinic.email}</span>
            </a>
            <div className="flex items-start gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary">schedule</span>
              <div className="flex flex-col">
                {clinic.workingHours.map((entry) => (
                  <span key={entry.days} className="font-body-md text-body-md">
                    {entry.days}: {entry.hours}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-label-md text-label-md text-primary font-semibold uppercase tracking-widest mb-2">
            Hızlı Menü
          </span>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-label-md text-label-md text-primary font-semibold uppercase tracking-widest mb-2">
            Yasal
          </span>
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-outline-variant/30 max-w-container-max mx-auto px-margin-desktop py-6 max-md:px-margin-mobile flex flex-col gap-4">
        <p className="font-body-md text-body-md text-on-surface-variant text-xs">
          Uygulama sonuçları kişiden kişiye değişebilir. Detaylı bilgi için uzman değerlendirmesi önerilir.
        </p>
        <div className="flex justify-between items-center max-md:flex-col gap-4">
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">
            © {new Date().getFullYear()} ESTEMITA AESTHETIC CLINIC. TÜM HAKLARI SAKLIDIR.
          </p>
          <div className="flex gap-4 text-on-surface-variant">
            <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a href="#" className="hover:text-secondary transition-colors" aria-label="Paylaş">
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
