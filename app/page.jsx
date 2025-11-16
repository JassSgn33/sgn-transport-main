
"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Truck, Scale, ShieldCheck, Wrench, ChevronRight, Users, HardHat, Route, Instagram, FileText } from "lucide-react";

const BUSINESS = {
  name: "SGN Transport Inc.",
  tagline: "Reliable dump‑truck hauling across the GTA",
  phone: "+1 (647) 968‑4422",
  email: "Sgntransport94@gmail.com",
  address: "273 Glidden Rd, Brampton, ON",
  hours: "Mon–Sat 6:00am–7:00pm",
  social: { instagram: "https://instagram.com/sgntransport" }
};

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Coverage", href: "#coverage" },
  { label: "Compliance", href: "#compliance" },
  { label: "Drivers", href: "#drivers" },
  { label: "Brokers", href: "#brokers" },
  { label: "Order Trucks", href: "#order" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: <Truck className="h-6 w-6" />, title: "Dump‑Truck Hauling", desc: "Hourly or per‑load hauling for asphalt, aggregates, soil, and demolition spoils." },
  { icon: <Route className="h-6 w-6" />, title: "Site to Site / Disposal", desc: "Clean‑fill, topsoil, and approved disposal runs, ticketed and tracked." },
  { icon: <Scale className="h-6 w-6" />, title: "Asphalt & Paving Support", desc: "Night work, mill & fill, shuttle runs with on‑time staging for pavers." },
  { icon: <Wrench className="h-6 w-6" />, title: "Project Support", desc: "Subdivisions, roadworks, and municipal jobs with experienced drivers." },
];

const logos = ["Glover Rd","Kingsborough","Cambridge–Brantford","Peel Region","Halton","Durham"];

const fleet = [
  { name: "Tri‑Axle Dump", spec: "Detroit/PACCAR/Cummins • Eaton", note: "Tarps • Beacon • Back‑up cams" },
  { name: "Quad/Lead (on request)", spec: "Broker partners", note: "Permits arranged" },
  { name: "Live Load/Scale‑ticket flow", spec: "Digital logs", note: "Ticket photo & upload" },
];

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }} viewport={{ once: true }}>
    {children}
  </motion.div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <img src="/sgn-logo.jpg" alt="SGN Logo" className="h-12 w-auto rounded-md shadow-sm bg-white p-1"/>
              <div className="leading-tight">
                <div className="font-semibold">{BUSINESS.name}</div>
                <div className="text-xs text-neutral-500">Since 2020 • Brampton, ON</div>
              </div>
            </a>
            <nav className="hidden md:flex gap-6 text-sm">
              {NAV.map(n => <a key={n.href} href={n.href} className="text-neutral-600 hover:text-neutral-900">{n.label}</a>)}
            </nav>
            <div className="flex items-center gap-3">
              <a href="#order" className="btn btn-primary">Order Trucks</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{BUSINESS.tagline}</h1>
              <p className="mt-4 text-neutral-600 text-lg">
                Tri‑axle specialists delivering on‑time loads for subdivisions, roadworks, and municipal projects across Peel, Halton, Durham, and the GTA.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#order" className="btn btn-primary flex items-center">Order Trucks <ChevronRight className="ml-1 h-4 w-4" /></a>
                <a href="#services" className="btn btn-outline">Our Services</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-neutral-600">
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> CVOR • WSIB • Insured</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4"/> {BUSINESS.hours}</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {BUSINESS.address}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[16/10] bg-gradient-to-br from-neutral-200 to-neutral-300 grid place-items-center">
                  <Truck className="h-24 w-24 opacity-60" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="backdrop-blur bg-white/80 rounded-2xl p-4 shadow">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                      <div className="flex items-center gap-2"><Phone className="h-4 w-4"/><a href={`tel:${BUSINESS.phone}`} className="hover:underline">{BUSINESS.phone}</a></div>
                      <div className="flex items-center gap-2"><Mail className="h-4 w-4"/><a href={`mailto:${BUSINESS.email}`} className="hover:underline">{BUSINESS.email}</a></div>
                      <a className="inline-flex items-center gap-1 text-neutral-800 hover:underline" href="#order">Book a truck <ChevronRight className="h-4 w-4"/></a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Trusted by */}
          <FadeIn delay={0.2}>
            <div className="mt-12">
              <div className="text-xs uppercase tracking-wider text-neutral-500">Trusted on projects like</div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {logos.map(l => <div key={l} className="rounded-xl border bg-white px-4 py-3 text-center text-sm text-neutral-600">{l}</div>)}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold">Services</h2>
            <p className="mt-2 text-neutral-600">Hourly or per‑load, day or night. Professional drivers, clean equipment, and clear communication.</p>
          </FadeIn>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="card">
                  <div className="card-header">
                    <div className="card-title flex items-center gap-3 text-lg">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-neutral-100">{s.icon}</span>
                      {s.title}
                    </div>
                  </div>
                  <div className="card-content">{s.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">Our Fleet</h2>
                <p className="mt-2 text-neutral-600">Tri‑axles ready for heavy duty work. Well‑maintained with daily inspections.</p>
              </div>
              <a href="#contact" className="btn btn-outline">Request availability</a>
            </div>
          </FadeIn>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {fleet.map((f, i) => (
              <FadeIn key={f.name} delay={0.05 * i}>
                <div className="card">
                  <div className="card-header">
                    <div className="card-title flex items-center gap-2"><HardHat className="h-5 w-5"/>{f.name}</div>
                  </div>
                  <div className="card-content">
                    <div><span className="font-medium">Spec:</span> {f.spec}</div>
                    <div className="mt-1"><span className="font-medium">Notes:</span> {f.note}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold">Coverage Area</h2>
            <p className="mt-2 text-neutral-600">Peel • Halton • Durham • York • Toronto • Waterloo Region</p>
          </FadeIn>
          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            <FadeIn>
              <div className="card overflow-hidden">
                <div className="card-content p-0">
                  <iframe
                    title="SGN Transport — Map"
                    className="w-full h-[360px]"
                    loading="lazy"
                    src="https://www.google.com/maps?q=273+Glidden+Rd,+Brampton,+ON&output=embed"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                {["Subdivision earthworks","Asphalt & municipal paving","Topsoil & clean‑fill moves","Day & night shifts","Ticketed disposal runs","Broker coordination"]
                  .map(item => (
                    <li key={item} className="flex items-center gap-2 p-3 rounded-xl border bg-neutral-50">
                      <ShieldCheck className="h-4 w-4"/> {item}
                    </li>
                  ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold">Compliance & Safety</h2>
            <p className="mt-2 text-neutral-600">Professional, insured, and documentation‑ready for site onboarding.</p>
          </FadeIn>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="card"><div className="card-header"><div className="card-title flex items-center gap-2"><FileText className="h-5 w-5"/>CVOR & Insurance</div></div><div className="card-content">Active CVOR, liability and cargo insurance. Certificates provided upon request.</div></div>
            <div className="card"><div className="card-header"><div className="card-title flex items-center gap-2"><ShieldCheck className="h-5 w-5"/>WSIB & Training</div></div><div className="card-content">WSIB clearance, daily circle checks, and safety‑first procedures.</div></div>
            <div className="card"><div className="card-header"><div className="card-title flex items-center gap-2"><Users className="h-5 w-5"/>Experienced Drivers</div></div><div className="card-content">Reliable, punctual operators with subdivision and municipal experience.</div></div>
          </div>
        </div>
      </section>

      {/* Drivers */}
      <section id="drivers" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold">Drivers — Work With SGN</h2>
            <p className="mt-2 text-neutral-600">Apply to drive tri‑axle dump trucks with reliable, year‑round work.</p>
          </FadeIn>
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="card lg:col-span-2">
              <div className="card-content p-6">
                <form action="https://formspree.io/f/your-id-here" method="POST" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="role" defaultValue="Driver" type="hidden" />
                  <input name="name" placeholder="Full name" className="input" required />
                  <input name="phone" placeholder="Phone" className="input" required />
                  <input name="email" type="email" placeholder="Email" className="input" required />
                  <input name="license" placeholder="Licence class (AZ/DZ)" className="input" required />
                  <input name="experience" placeholder="Years of experience" className="input" />
                  <input name="availability" placeholder="Availability (days/nights/weekends)" className="input" />
                  <textarea name="notes" placeholder="Tell us about your experience, tickets, preferred regions…" className="textarea sm:col-span-2 min-h-[120px]" />
                  <div className="sm:col-span-2 flex items-center gap-3">
                    <button type="submit" className="btn btn-primary">Submit Application</button>
                    <div className="text-xs text-neutral-500">We’ll contact you within 1 business day.</div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-header"><div className="card-title">Driver Requirements</div></div>
              <div className="card-content space-y-2">
                <div>• Clean abstract & CVOR preferred</div>
                <div>• Experience on subdivisions & municipal sites</div>
                <div>• Safety‑first attitude; daily inspections</div>
                <div>• Punctual, professional communication</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brokers */}
      <section id="brokers" className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold">Brokers — Join Our Network</h2>
            <p className="mt-2 text-neutral-600">Have extra trucks? Partner with SGN for steady work across the GTA.</p>
          </FadeIn>
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="card lg:col-span-2">
              <div className="card-content p-6">
                <form action="https://formspree.io/f/your-id-here" method="POST" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="role" defaultValue="Broker" type="hidden" />
                  <input name="company" placeholder="Company name" className="input" required />
                  <input name="contact" placeholder="Contact name" className="input" required />
                  <input name="phone" placeholder="Phone" className="input" required />
                  <input name="email" type="email" placeholder="Email" className="input" required />
                  <input name="fleet" placeholder="Truck types & count (e.g., 4 tri‑axles)" className="input sm:col-span-2" />
                  <input name="coverage" placeholder="Regions (Peel, Halton, Durham, etc.)" className="input sm:col-span-2" />
                  <textarea name="compliance" placeholder="WSIB/Insurance details, tickets, special notes…" className="textarea sm:col-span-2 min-h-[120px]" />
                  <div className="sm:col-span-2 flex items-center gap-3">
                    <button type="submit" className="btn btn-primary">Apply to Partner</button>
                    <div className="text-xs text-neutral-500">We’ll review and follow up quickly.</div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-header"><div className="card-title">What We Look For</div></div>
              <div className="card-content space-y-2">
                <div>• Active WSIB & insurance</div>
                <div>• Reliable trucks & professional operators</div>
                <div>• Clear comms & ticket uploads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Trucks */}
      <section id="order" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">Order Trucks for Your Job</h2>
                <p className="mt-2 text-neutral-600">Tell us your scope and schedule—day or night—and we’ll stage trucks on time.</p>
              </div>
            </div>
          </FadeIn>
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="card lg:col-span-2">
              <div className="card-content p-6">
                <form action="https://formspree.io/f/your-id-here" method="POST" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="role" defaultValue="Order" type="hidden" />
                  <input name="company" placeholder="Company name" className="input" required />
                  <input name="contact" placeholder="Contact name" className="input" required />
                  <input name="email" type="email" placeholder="Email" className="input" required />
                  <input name="phone" type="tel" placeholder="Phone" className="input" required />
                  <input name="site" placeholder="Site / Pickup location" className="input sm:col-span-2" />
                  <input name="date" type="date" placeholder="Start date" className="input" />
                  <input name="shift" placeholder="Shift (day/night)" className="input" />
                  <input name="trucks" placeholder="# of trucks required" className="input" />
                  <input name="material" placeholder="Material (asphalt, topsoil, clean‑fill, demo, etc.)" className="input sm:col-span-2" />
                  <input name="disposal" placeholder="Disposal site (if applicable)" className="input sm:col-span-2" />
                  <input name="po" placeholder="PO/Reference (optional)" className="input" />
                  <textarea name="details" placeholder="Loads/hour or per‑load, staging notes, gate times…" className="textarea sm:col-span-2 min-h-[120px]" />
                  <div className="sm:col-span-2 flex items-center gap-3">
                    <button type="submit" className="btn btn-primary">Submit Order Request</button>
                    <div className="text-xs text-neutral-500">Or call <a href={`tel:${BUSINESS.phone}`} className="underline">{BUSINESS.phone}</a></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-header"><div className="card-title">Fast Scheduling</div></div>
              <div className="card-content space-y-2">
                <div>• Same‑day & next‑day options</div>
                <div>• Clear ticketing & invoicing</div>
                <div>• Peel, Halton, Durham, York, Toronto, Waterloo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-2 text-neutral-600">Call, email, or send a request—we’ll respond fast.</p>
          </FadeIn>
          <div className="mt-6 grid lg:grid-cols-3 gap-8">
            <div className="card"><div className="card-content space-y-3">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/><a href={`tel:${BUSINESS.phone}`} className="hover:underline">{BUSINESS.phone}</a></div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/><a href={`mailto:${BUSINESS.email}`} className="hover:underline">{BUSINESS.email}</a></div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/>{BUSINESS.address}</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4"/>{BUSINESS.hours}</div>
              <div className="flex items-center gap-2"><Instagram className="h-4 w-4"/><a href={BUSINESS.social.instagram} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></div>
            </div></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="font-semibold">{BUSINESS.name}</div>
              <div className="text-sm text-neutral-600 mt-1">Serving contractors across the GTA with punctual, professional dump‑truck hauling.</div>
            </div>
            <div className="md:text-right text-sm text-neutral-600">
              © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
