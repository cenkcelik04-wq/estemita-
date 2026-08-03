import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Hakkımızda | Estemita Aesthetic Clinic",
  description: `${clinic.doctor.name} ve Estemita Aesthetic Clinic hakkında bilgi alın.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Uzmanlık ve Güvenin Buluştuğu Yer"
        description="Estemita, medikal titizlikle sanatsal estetik anlayışını bir araya getiren, hasta odaklı bir estetik cerrahi ve medikal estetik klinğidir."
      />

      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <Reveal className="col-span-1 md:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden h-[700px] ambient-shadow max-md:h-[500px]">
                <Image fill className="object-cover" alt={clinic.doctor.name} src="/images/doctor.jpg" />
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
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <Reveal className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile text-center max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-primary max-md:font-headline-lg-mobile max-md:text-headline-lg-mobile mb-6">
            Sizi Kliniğimizde Ağırlamaktan Mutluluk Duyarız
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            İhtiyaçlarınızı dinlemek ve size en uygun tedavi protokolünü birlikte belirlemek için ücretsiz ön
            görüşme randevunuzu planlayın.
          </p>
          <Link
            href="/iletisim"
            className="bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity tracking-widest inline-block"
          >
            Randevu Al
          </Link>
        </Reveal>
      </section>
    </>
  );
}
