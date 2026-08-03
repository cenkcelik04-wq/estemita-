"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col gap-stack-sm bg-surface-container-low rounded-xl p-8 ambient-shadow">
        <h2 className="font-headline-md text-headline-md text-primary">Teşekkürler!</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Talebiniz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md">
      <h2 className="font-headline-md text-headline-md text-primary mb-2">Randevu Talep Formu</h2>

      <label className="flex flex-col gap-2">
        <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest text-xs">
          Ad Soyad
        </span>
        <input
          required
          name="name"
          type="text"
          className="bg-transparent border-b border-outline py-3 focus:outline-none focus:bg-surface-container-low font-body-md text-body-md text-on-surface transition-colors"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest text-xs">
          Telefon
        </span>
        <input
          required
          name="phone"
          type="tel"
          className="bg-transparent border-b border-outline py-3 focus:outline-none focus:bg-surface-container-low font-body-md text-body-md text-on-surface transition-colors"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest text-xs">
          E-posta
        </span>
        <input
          required
          name="email"
          type="email"
          className="bg-transparent border-b border-outline py-3 focus:outline-none focus:bg-surface-container-low font-body-md text-body-md text-on-surface transition-colors"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest text-xs">
          Mesajınız
        </span>
        <textarea
          name="message"
          rows={4}
          className="bg-transparent border-b border-outline py-3 focus:outline-none focus:bg-surface-container-low font-body-md text-body-md text-on-surface transition-colors resize-none"
        />
      </label>

      <button
        type="submit"
        className="mt-4 bg-primary text-on-primary font-label-md text-label-md uppercase px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity tracking-widest w-fit"
      >
        Gönder
      </button>
    </form>
  );
}
