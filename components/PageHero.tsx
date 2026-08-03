export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-surface-container-low py-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.1em] mb-4 block">
            {eyebrow}
          </span>
          <h1 className="font-headline-lg text-headline-lg text-primary max-md:font-headline-lg-mobile max-md:text-headline-lg-mobile mb-6">
            {title}
          </h1>
          {description && (
            <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
