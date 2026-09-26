import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MapPin, Phone, Clock } from "lucide-react";

import { Logo } from "@/components/delulu/Logo";
import { menu, extras } from "@/components/delulu/menu-data";
import heroImg from "@/assets/hero-burger.jpg";
import comboImg from "@/assets/combo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DELULU — Good Food Best Decisions | Burgers in H-13, Islamabad" },
      {
        name: "description",
        content:
          "DELULU fast food in H-13, Islamabad. Afghani burgers, seekh kabab burgers, wraps, loaded fries and wings. Main Character Combo Rs 700/-. Daily 12pm–12am.",
      },
      { property: "og:title", content: "DELULU — Good Food Best Decisions" },
      {
        property: "og:description",
        content:
          "Afghani burgers, wraps, loaded fries and wings in H-13, Islamabad. Order the Main Character Combo for Rs 700/-.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#combo", label: "Combo" },
  { href: "#location", label: "Location" },
  { href: "#order", label: "Order" },
];

const PHONE = "0348-8382641";

function GoldButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-extrabold uppercase tracking-wide transition-transform duration-200 hover:scale-105";
  return (
    <a
      href={href}
      className={
        variant === "solid"
          ? `${base} bg-gold-gradient text-primary-foreground`
          : `${base} border-2 border-gold text-gold hover:bg-gold hover:text-primary-foreground`
      }
    >
      {children}
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between">
        <a href="#top" className="min-w-0 shrink-0">
          <Logo size="sm" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden md:block">
            <GoldButton href={`tel:${PHONE}`}>Order Now</GoldButton>
          </div>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-3 text-gold md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background px-4 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-bold uppercase tracking-wide text-foreground/90 hover:bg-secondary hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE}`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold-gradient px-6 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-primary-foreground"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

const floaters = [
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&h=300&q=70",
    alt: "",
    className:
      "left-[2%] top-[24%] w-24 opacity-70 animate-float-a sm:w-32",
  },
  {
    src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=300&h=300&q=70",
    alt: "",
    className:
      "right-[6%] top-[8%] w-20 opacity-70 blur-[1px] animate-float-b sm:w-28",
  },
  {
    src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=300&h=300&q=70",
    alt: "",
    className:
      "bottom-[10%] left-[38%] hidden w-20 opacity-75 animate-float-c sm:block sm:w-24",
  },
  {
    src: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=300&h=300&q=70",
    alt: "",
    className:
      "bottom-[22%] right-[30%] hidden w-24 opacity-60 blur-[2px] animate-float-b md:block",
  },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

      {/* Ambient floating food images behind the headline */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {floaters.map((f) => (
          <img
            key={f.src}
            src={f.src}
            alt={f.alt}
            width={300}
            height={300}
            loading="lazy"
            className={`absolute rounded-2xl border border-gold/20 object-cover shadow-xl ${f.className}`}
          />
        ))}
        {/* readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-24">
        <div className="animate-fade-in">
          <span className="inline-block rounded-full border border-gold/40 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            H-13, Islamabad
          </span>
          <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Good Food
            <br />
            <span className="text-gold-gradient">Best Decisions.</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            Smashed, stacked and seriously loaded. Afghani burgers, seekh kabab stacks, cheesy
            loaded fries and crispy wings — hot off the grill till midnight.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GoldButton href={`tel:${PHONE}`}>Order Now</GoldButton>
            <GoldButton href="#menu" variant="outline">
              View Menu
            </GoldButton>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-full bg-gold/25 blur-3xl" />
          <img
            src={heroImg}
            alt="Crispy chicken burger with loaded cheese fries"
            width={1200}
            height={1200}
            className="relative w-full rounded-3xl border border-gold/30 object-cover shadow-2xl"
          />
          <div className="absolute -bottom-5 left-4 rotate-[-6deg] rounded-2xl bg-gold-gradient px-5 py-2 text-sm font-black uppercase text-primary-foreground shadow-lg sm:left-8">
            Real Food Real Mood
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const [active, setActive] = useState(menu[0]!.id);
  const cat = menu.find((c) => c.id === active) ?? menu[0]!;

  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
          The <span className="text-gold-gradient">Menu</span>
        </h2>
        <p className="mt-3 text-muted-foreground">Everything freshly made to order. Prices in PKR.</p>
      </div>

      <div className="mt-9 flex flex-wrap justify-center gap-2 sm:gap-3">
        {menu.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide transition-all sm:text-sm ${
              active === c.id
                ? "bg-gold-gradient text-primary-foreground"
                : "border border-border text-foreground/75 hover:border-gold hover:text-gold"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {cat.note && (
        <p className="mt-6 text-center text-xs font-semibold uppercase tracking-widest text-gold">
          {cat.note}
        </p>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cat.items.map((item) => (
          <article
            key={item.name}
            className="card-lift animate-fade-in overflow-hidden rounded-xl border border-border bg-card shadow-lg"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                width={800}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <h3 className="min-w-0 text-lg font-black uppercase leading-tight tracking-tight text-foreground">
                  {item.name}
                </h3>
                <span className="shrink-0 rounded-full bg-gold-gradient px-3 py-1 text-sm font-black text-primary-foreground shadow-md">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm font-bold uppercase tracking-wide text-muted-foreground">
        {extras}
      </p>
    </section>
  );
}

function Combo() {
  return (
    <section id="combo" className="scroll-mt-24 px-4 py-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border-2 border-gold bg-card shadow-[var(--shadow-gold)]">
        <div className="grid items-center gap-8 p-7 md:grid-cols-2 md:p-12">
          <div>
            <span className="inline-block rounded-full bg-gold-gradient px-4 py-1 text-xs font-black uppercase tracking-widest text-primary-foreground">
              Featured Combo
            </span>
            <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
              Main Character <span className="text-gold-gradient">Combo</span>
            </h2>
            <p className="mt-4 text-lg font-semibold text-foreground/85">
              Zinger Burger + Small Pizza Fries + 250ml Drink
            </p>
            <p className="mt-5 text-4xl font-black text-gold-gradient sm:text-5xl">Rs 700/-</p>
            <div className="mt-7">
              <GoldButton href={`tel:${PHONE}`}>Grab The Combo</GoldButton>
            </div>
          </div>
          <img
            src={comboImg}
            alt="Zinger burger, pizza fries and a cold drink combo"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-2xl border border-gold/30 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2">
        <div id="order" className="scroll-mt-24">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
            Find <span className="text-gold-gradient">Us</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Walk in, or call ahead and we'll have it ready hot.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <MapPin className="mt-0.5 shrink-0 text-gold" size={20} />
              <div className="min-w-0">
                <p className="font-extrabold uppercase">DELULU, H-13, Islamabad</p>
                <p className="text-sm text-muted-foreground">Dine in • Takeaway • Delivery</p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <Phone className="mt-0.5 shrink-0 text-gold" size={20} />
              <div className="min-w-0">
                <a href={`tel:${PHONE}`} className="font-extrabold uppercase hover:text-gold">
                  {PHONE}
                </a>
                <p className="text-sm text-muted-foreground">Call to place your order</p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
              <Clock className="mt-0.5 shrink-0 text-gold" size={20} />
              <div className="min-w-0">
                <p className="font-extrabold uppercase">Daily 12pm – 12am</p>
                <p className="text-sm text-muted-foreground">Open seven days a week</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gold/30 bg-card">
          <iframe
            title="DELULU location map — H-13, Islamabad"
            src="https://www.google.com/maps?q=H-13,%20Islamabad&output=embed"
            className="h-80 w-full md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-3">
        <div>
          <Logo size="md" />
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gold">
            Good Food Best Decisions.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Real Food Real Mood.</p>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-gold">Contact</h3>
          <p className="mt-4 text-sm text-muted-foreground">DELULU, H-13, Islamabad</p>
          <a href={`tel:${PHONE}`} className="mt-1 block text-sm text-muted-foreground hover:text-gold">
            {PHONE}
          </a>
          <p className="mt-1 text-sm text-muted-foreground">Daily 12pm – 12am</p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 Delulu. All rights reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <Combo />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
