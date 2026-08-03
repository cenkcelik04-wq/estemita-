import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog | Estemita Aesthetic Clinic",
  description: "Cilt bakımı, lazer epilasyon ve medikal estetik hakkında bilimsel ve pratik bakım önerileri.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Estemita Günlüğü"
        title="Güzellik & Cilt Bakımı Hakkında Her Şey"
        description="Isparta'da daha sağlıklı, canlı ve pürüzsüz bir cilde sahip olmanız için hazırladığımız bilimsel, etik ve pratik bakım önerilerini keşfedin."
      />

      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col gap-4 p-8 rounded-xl bg-surface-container-low ambient-shadow border border-outline-variant/30"
            >
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest text-xs w-fit px-3 py-1 rounded-DEFAULT bg-surface-container-highest">
                {post.category}
              </span>
              <h2 className="font-headline-md text-headline-md text-primary leading-snug">{post.title}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-on-surface-variant font-label-md text-label-md text-xs uppercase tracking-widest mt-auto pt-4 border-t border-outline-variant/30">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} okuma</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile text-center max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Uygulamalarımızı Yakından Tanıyın</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Blog yazılarımızda bahsettiğimiz tüm medikal cilt bakımı, bölgesel zayıflama ve altın iğne
            uygulamaları için Isparta merkezdeki kliniğimizde ücretsiz ön değerlendirme yaptırabilirsiniz.
          </p>
          <Link
            href="/iletisim"
            className="bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-3 rounded-DEFAULT hover:opacity-90 transition-opacity tracking-widest inline-block"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </>
  );
}
