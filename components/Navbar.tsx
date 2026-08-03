"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site-config";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full top-0 sticky z-50 bg-surface transition-all duration-300 ${
        scrolled ? "shadow-lg" : "ambient-shadow"
      }`}
    >
      <div
        className={`max-w-container-max mx-auto px-margin-desktop flex justify-between items-center max-md:px-margin-mobile transition-all duration-300 ${
          scrolled ? "h-20" : "h-24"
        }`}
      >
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/images/estemita_logo.png"
            alt="Estemita Aesthetic Clinic"
            width={160}
            height={160}
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-12" : "h-16"}`}
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md uppercase tracking-widest transition-all duration-300"
                    : "text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest transition-all"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/iletisim"
          className="hidden md:inline-flex bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest px-6 py-3 rounded-DEFAULT hover:opacity-90 transition-opacity"
        >
          RANDEVU AL
        </Link>

        <button
          className="md:hidden text-primary p-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menüyü aç/kapat"
        >
          <span className="material-symbols-outlined text-[32px] transition-transform duration-300">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <div
        className={`md:hidden absolute left-0 w-full bg-surface shadow-lg overflow-hidden transition-all duration-300 ease-out ${
          scrolled ? "top-20" : "top-24"
        } ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col py-4 px-margin-mobile gap-4">
          {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    isActive
                      ? "text-primary font-bold border-l-2 border-primary pl-4 py-2 font-label-md text-label-md uppercase tracking-widest"
                      : "text-on-surface-variant pl-4 py-2 font-label-md text-label-md uppercase tracking-widest"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/iletisim"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-on-primary text-center font-label-md text-label-md uppercase tracking-widest px-6 py-4 mt-2 rounded-DEFAULT mx-4"
            >
              RANDEVU AL
            </Link>
          </nav>
        </div>
    </header>
  );
}
