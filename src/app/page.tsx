import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  AtSign,
  Leaf,
  MapPin,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Signature Cut",
    description: "A tailored cut designed around your face shape, hair texture and everyday routine.",
    price: "From €45",
  },
  {
    number: "02",
    title: "Soft Color",
    description: "Natural-looking color, gloss and tonal work for elegant, low-maintenance results.",
    price: "From €85",
  },
  {
    number: "03",
    title: "Ritual Treatment",
    description: "Restorative hair rituals focused on shine, softness and long-term hair health.",
    price: "From €55",
  },
];

const gallery = [
  "Soft blonde",
  "Natural texture",
  "Gloss finish",
  "Editorial styling",
];

const values = [
  "One-to-one consultation",
  "Natural product selection",
  "Calm appointment rhythm",
  "Premium finish, never rushed",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#20261f]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#ded8ca]/70 bg-[#f7f4ed]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#243522] text-white">
              <Scissors size={17} />
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Studio Landing
            </span>
          </a>

          <nav className="hidden items-center gap-10 text-sm text-[#687264] md:flex">
            <a href="#services" className="transition hover:text-[#20261f]">
              Services
            </a>
            <a href="#studio" className="transition hover:text-[#20261f]">
              Studio
            </a>
            <a href="#booking" className="transition hover:text-[#20261f]">
              Booking
            </a>
          </nav>

          <a
            href="#booking"
            className="rounded-full border border-[#243522] px-5 py-2.5 text-sm font-medium text-[#243522] transition hover:bg-[#243522] hover:text-white"
          >
            Reserve
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-20 pt-32 lg:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d9d1c0] bg-white/50 px-4 py-2 text-sm text-[#687264]">
              <Leaf size={15} />
              Boutique hair salon · Ibiza
            </div>

            <h1 className="max-w-5xl text-[4.2rem] font-semibold leading-[0.9] tracking-[-0.06em] text-[#1d241c] sm:text-8xl lg:text-[7.8rem]">
              Hair that feels effortless.
            </h1>

            <div className="mt-10 grid gap-8 border-l border-[#cfc7b7] pl-6 md:grid-cols-[0.75fr_1fr]">
              <p className="text-sm uppercase tracking-[0.35em] text-[#7c876f]">
                Color · Cut · Rituals
              </p>

              <p className="max-w-xl text-xl leading-9 text-[#596353]">
                A quiet, editorial salon experience for soft color, precise
                cuts and healthy hair rituals — created with intention, calm and
                a premium finish.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#243522] px-7 py-4 font-medium text-white transition hover:bg-[#3f553a]"
              >
                Book an appointment
                <ArrowRight size={18} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-medium text-[#243522] shadow-sm shadow-[#243522]/5 transition hover:bg-[#eee8dc]"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-16 z-10 hidden rounded-[2rem] bg-white p-5 shadow-2xl shadow-[#243522]/10 md:block">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e5ecdd]">
                  <Sparkles size={19} className="text-[#243522]" />
                </span>
                <div>
                  <p className="font-semibold">Premium finish</p>
                  <p className="text-sm text-[#7c876f]">Natural shine & tone</p>
                </div>
              </div>
            </div>

            <div className="relative h-[680px] overflow-hidden rounded-t-full bg-[#d9dfcc] p-4 shadow-2xl shadow-[#243522]/10">
              <div className="h-full rounded-t-full bg-[linear-gradient(160deg,#fffaf1_0%,#dce5d2_45%,#9fae91_100%)]">
                <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f7d8c6]/70 blur-2xl" />
                <div className="absolute bottom-14 left-8 right-8 rounded-[2rem] bg-white/75 p-6 backdrop-blur-xl">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full bg-[#243522] px-4 py-2 text-sm text-white">
                      New season
                    </span>
                    <span className="text-sm text-[#687264]">Élan Lookbook</span>
                  </div>

                  <h2 className="max-w-sm text-4xl font-semibold leading-tight tracking-[-0.04em]">
                    Soft layers, luminous color, quiet confidence.
                  </h2>
                </div>

                <div className="absolute right-8 top-24 rounded-full bg-white/70 px-5 py-3 text-sm text-[#596353] backdrop-blur-xl">
                  4.9 / 5 client rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ded8ca] bg-[#20261f] px-6 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-3">
          <div>
            <p className="text-4xl font-semibold tracking-tight">8+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/50">
              Years experience
            </p>
          </div>
          <div>
            <p className="text-4xl font-semibold tracking-tight">1k+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/50">
              Clients styled
            </p>
          </div>
          <div>
            <p className="text-4xl font-semibold tracking-tight">4.9</p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/50">
              Average rating
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#7c876f]">
              Services
            </p>

            <h2 className="max-w-4xl text-5xl font-semibold leading-[1] tracking-[-0.05em] sm:text-7xl">
              Considered services for modern, healthy hair.
            </h2>
          </div>

          <div className="divide-y divide-[#d8d0bf] border-y border-[#d8d0bf]">
            {services.map((service) => (
              <article
                key={service.title}
                className="grid gap-6 py-10 transition hover:bg-white/45 md:grid-cols-[0.25fr_1fr_1.2fr_0.35fr]"
              >
                <p className="text-sm text-[#7c876f]">{service.number}</p>
                <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                  {service.title}
                </h3>
                <p className="max-w-2xl text-lg leading-8 text-[#596353]">
                  {service.description}
                </p>
                <p className="font-semibold text-[#243522] md:text-right">
                  {service.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="bg-white px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#7c876f]">
              The studio
            </p>

            <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1] tracking-[-0.05em] sm:text-7xl">
              A calmer way to experience beauty.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#596353]">
              Studio Landing is designed as a quiet pause in the city: soft light,
              natural tones, personal consultation and a slower rhythm focused
              on precision.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-full border border-[#d8d0bf] px-5 py-4 text-[#596353]"
                >
                  <Check size={17} className="text-[#243522]" />
                  {value}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {gallery.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-56 items-end rounded-[2rem] p-6 ${
                  index === 0
                    ? "bg-[#dfe8d6]"
                    : index === 1
                      ? "bg-[#ead8c9]"
                      : index === 2
                        ? "bg-[#f3efe5]"
                        : "bg-[#b9c6aa]"
                }`}
              >
                <p className="text-2xl font-semibold tracking-[-0.03em]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[3rem] bg-[#243522] text-white lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 md:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">
                Client note
              </p>

              <div className="mt-10 flex gap-1 text-[#d9dfcc]">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-8 max-w-xl text-3xl leading-tight tracking-[-0.03em] md:text-4xl">
                “It feels less like a salon appointment and more like a
                beautifully considered ritual. Calm, precise and incredibly
                elegant.”
              </p>

              <p className="mt-8 text-white/60">— Clara M.</p>
            </div>

            <div className="min-h-[440px] bg-[linear-gradient(135deg,#e9d5c3_0%,#dfe8d6_45%,#7d9270_100%)] p-8 md:p-14">
              <div className="flex h-full flex-col justify-between rounded-[2rem] bg-white/25 p-8 text-[#20261f] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white px-4 py-2 text-sm">
                    Private appointments
                  </span>
                  <CalendarDays size={22} />
                </div>

                <div>
                  <p className="max-w-md text-5xl font-semibold leading-[0.95] tracking-[-0.05em]">
                    Beauty with space to breathe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-white px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#7c876f]">
              Booking
            </p>

            <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1] tracking-[-0.05em] sm:text-7xl">
              Begin with a consultation.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#596353]">
              Tell us what you are looking for and we will guide you towards the
              right cut, color or ritual before confirming your appointment.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@elanstudio.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#243522] px-7 py-4 font-medium text-white transition hover:bg-[#3f553a]"
              >
                Request booking
                <ArrowRight size={18} />
              </a>

              <a
                href="https://AtSign.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8d0bf] px-7 py-4 font-medium text-[#243522] transition hover:bg-[#f7f4ed]"
              >
                <AtSign size={18} />
                Instagram
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-[#d8d0bf] bg-[#f7f4ed] p-8 md:p-10">
            <div className="space-y-5">
              <div className="flex items-center gap-4 rounded-[1.5rem] bg-white p-5">
                <Clock className="text-[#243522]" />
                <div>
                  <p className="font-semibold">Opening hours</p>
                  <p className="text-[#687264]">Tuesday — Saturday · 10:00 — 19:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-[1.5rem] bg-white p-5">
                <MapPin className="text-[#243522]" />
                <div>
                  <p className="font-semibold">Studio location</p>
                  <p className="text-[#687264]">Carrer de Mallorca, Ibiza</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-[1.5rem] bg-white p-5">
                <Scissors className="text-[#243522]" />
                <div>
                  <p className="font-semibold">First appointment</p>
                  <p className="text-[#687264]">Includes consultation and styling advice</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-[#243522] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Next availability
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                Friday · 12:30
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ded8ca] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-[#687264] md:flex-row">
          <p>© 2026 JJDoria . All rights reserved.</p>
          <p>Hair salon · Color · Styling · Rituals</p>
        </div>
      </footer>
    </main>
  );
}