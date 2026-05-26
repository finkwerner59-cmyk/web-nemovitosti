"use client";

import React, { useState } from "react";
import { Camera, Home, Mail, Phone, Instagram, Facebook, MapPin, ArrowRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const portfolio = [
    { title: "Moderní byt", category: "Interiér", image: "/portfolio/foto-1.svg" },
    { title: "Rodinný dům", category: "Exteriér", image: "/portfolio/foto-2.svg" },
    { title: "Kuchyně a detail", category: "Detail", image: "/portfolio/foto-3.svg" },
    { title: "Ložnice", category: "Interiér", image: "/portfolio/foto-4.svg" },
    { title: "Obývací prostor", category: "Interiér", image: "/portfolio/foto-5.svg" },
    { title: "Luxusní nemovitost", category: "Real estate", image: "/portfolio/foto-6.svg" },
  ];

  const services = [
    "Fotografování bytů a domů",
    "Fotografie pro realitní inzerci",
    "Fotky pro Airbnb a krátkodobé pronájmy",
    "Úprava barev, světla a perspektivy",
    "Exteriéry, interiéry a detaily prostoru",
    "Obsah pro sociální sítě a prezentaci nemovitosti",
  ];

  const navItems = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Služby", href: "#sluzby" },
    { label: "O mně", href: "#omne" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-wide">
            <Camera className="w-5 h-5" /> Werner Fink
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            {navItems.map((item) => <a key={item.href} href={item.href} className="hover:text-white transition">{item.label}</a>)}
          </nav>
          <a href="#kontakt" className="hidden md:inline-flex items-center gap-2 bg-white text-neutral-950 px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition">
            Poptat focení <ArrowRight className="w-4 h-4" />
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-neutral-950 border-t border-white/10 px-5 py-4 space-y-4">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block text-neutral-300 hover:text-white">{item.label}</a>)}
          </div>
        )}
      </header>

      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/portfolio/hero.svg" alt="Úvodní fotografie nemovitosti" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-neutral-300 mb-4 tracking-[0.3em] uppercase text-xs">Realitní & interiérový fotograf</p>
            <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">Fotografie nemovitostí, které prodávají prostor.</h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl mb-8 leading-relaxed">Profesionální prezentace bytů, domů a interiérů pro realitní inzerci, pronájmy i sociální sítě.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 px-7 py-4 rounded-full font-medium hover:bg-neutral-200 transition">Zobrazit portfolio <ArrowRight className="w-4 h-4" /></a>
              <a href="#kontakt" className="inline-flex items-center justify-center border border-white/30 px-7 py-4 rounded-full font-medium hover:bg-white/10 transition">Kontaktovat</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-neutral-950" id="portfolio">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-neutral-400 uppercase tracking-[0.25em] text-xs mb-3">Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-semibold">Ukázka mojí práce</h2>
            </div>
            <p className="text-neutral-400 max-w-xl">Fotky v této šabloně vyměníš za svoje v souboru app/page.jsx a nahraješ je do složky public/portfolio.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="group relative rounded-3xl overflow-hidden bg-neutral-900 aspect-[4/5] shadow-xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="text-sm text-neutral-300 mb-1">{item.category}</p>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-neutral-950" id="sluzby">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-neutral-500 uppercase tracking-[0.25em] text-xs mb-3">Služby</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Co pro tebe nafotím</h2>
            <p className="text-neutral-600 text-lg leading-relaxed">Zaměřuji se na čisté, světlé a realistické fotografie, které pomáhají nemovitost ukázat profesionálně a atraktivně.</p>
          </div>
          <div className="grid gap-4">
            {services.map((service) => <div key={service} className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-100"><Home className="w-5 h-5 shrink-0" /><span className="font-medium">{service}</span></div>)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-900" id="omne">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-800"><img src="/portfolio/o-mne.svg" alt="Fotograf při práci" className="w-full h-full object-cover" /></div>
          <div>
            <p className="text-neutral-400 uppercase tracking-[0.25em] text-xs mb-3">O mně</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Werner Fink</h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-5">Jsem fotograf zaměřený na nemovitosti, interiéry a prezentaci prostoru. Mým cílem je vytvořit fotky, které působí čistě, profesionálně a pomáhají nemovitosti zaujmout už při prvním pohledu.</p>
            <p className="text-neutral-300 text-lg leading-relaxed">Fotím byty, domy, pronájmy, Airbnb i komerční prostory. Důraz dávám na světlo, kompozici, přirozené barvy a celkový dojem z prostoru.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-950"><div className="max-w-7xl mx-auto px-5"><div className="rounded-[2rem] bg-white text-neutral-950 p-8 md:p-14 grid lg:grid-cols-3 gap-8 items-center"><div className="lg:col-span-2"><p className="text-neutral-500 uppercase tracking-[0.25em] text-xs mb-3">Spolupráce</p><h2 className="text-3xl md:text-5xl font-semibold mb-4">Chceš nafotit nemovitost?</h2><p className="text-neutral-600 text-lg">Napiš mi, o jaký prostor jde, kde se nachází a kdy by se ti focení hodilo.</p></div><a href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-neutral-950 text-white px-7 py-4 rounded-full font-medium hover:bg-neutral-800 transition">Domluvit focení <ArrowRight className="w-4 h-4" /></a></div></div></section>

      <section className="py-24 bg-neutral-950 border-t border-white/10" id="kontakt">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-neutral-400 uppercase tracking-[0.25em] text-xs mb-3">Kontakt</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ozvi se mi</h2>
            <p className="text-neutral-300 text-lg mb-8 leading-relaxed">Pro poptávku focení mi napiš e-mail, zavolej nebo mě kontaktuj přes sociální sítě.</p>
            <div className="space-y-4 text-neutral-300">
              <a href="mailto:tvujemail@example.com" className="flex items-center gap-3 hover:text-white transition"><Mail className="w-5 h-5" /> tvujemail@example.com</a>
              <a href="tel:+420777777777" className="flex items-center gap-3 hover:text-white transition"><Phone className="w-5 h-5" /> +420 777 777 777</a>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /> Česká republika</div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-neutral-950 transition"><Instagram className="w-5 h-5" /></a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-neutral-950 transition"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          <form className="bg-neutral-900 p-6 md:p-8 rounded-3xl space-y-5" action="https://formsubmit.co/tvujemail@example.com" method="POST">
            <input type="hidden" name="_subject" value="Nová poptávka focení z webu" />
            <div><label className="block text-sm text-neutral-400 mb-2">Jméno</label><input name="jmeno" className="w-full bg-neutral-950 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-white/40" placeholder="Tvoje jméno" required /></div>
            <div><label className="block text-sm text-neutral-400 mb-2">E-mail</label><input name="email" type="email" className="w-full bg-neutral-950 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-white/40" placeholder="tvuj@email.cz" required /></div>
            <div><label className="block text-sm text-neutral-400 mb-2">Zpráva</label><textarea name="zprava" className="w-full bg-neutral-950 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-white/40 min-h-36" placeholder="Napiš, co potřebuješ nafotit..." required /></div>
            <button type="submit" className="w-full bg-white text-neutral-950 py-4 rounded-full font-medium hover:bg-neutral-200 transition">Odeslat poptávku</button>
            <p className="text-xs text-neutral-500">Aby formulář chodil na tvůj e-mail, v kódu nahraď tvujemail@example.com svým e-mailem.</p>
          </form>
        </div>
      </section>

      <footer className="bg-neutral-950 border-t border-white/10 py-8"><div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between gap-4 text-sm text-neutral-500"><p>© 2026 Werner Fink. Realitní fotografie.</p><p>Web pro portfolio fotografa nemovitostí.</p></div></footer>
    </div>
  );
}
