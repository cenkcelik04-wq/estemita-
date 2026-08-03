import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Galeri | Estemita Aesthetic Clinic",
  description: "Estemita Aesthetic Clinic klinik ortamı ve uygulamalarımızdan görüntüler.",
};

const galleryImages = [
  { src: "/images/gallery/1.jpg", alt: "Klinik iç mekan" },
  { src: "/images/gallery/2.jpg", alt: "Konsültasyon odası" },
  { src: "/images/gallery/3.jpg", alt: "Tedavi odası" },
  { src: "/images/gallery/4.jpg", alt: "Bekleme alanı" },
  { src: "/images/gallery/5.jpg", alt: "Klinik detay" },
  { src: "/images/gallery/6.jpg", alt: "Klinik girişi" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeri"
        title="Kliniğimizden Kareler"
        description="Konforlu ve huzurlu ortamımızı, tedavi öncesi/sonrası sonuçlarımızı keşfedin."
      />

      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.src} className="relative h-72 rounded-xl overflow-hidden ambient-shadow bg-surface-container-low">
              <Image fill className="object-cover" alt={image.alt} src={image.src} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
