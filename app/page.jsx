"use client";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, Truck, Scale, ShieldCheck,
  Wrench, ChevronRight, Users, HardHat, Route, Instagram, FileText
} from "lucide-react";

const BUSINESS = {
  name: "SGN Transport Inc.",
  tagline: "Reliable dump-truck hauling across the GTA",
  phone: "+1 (647) 968-4422",
  email: "Sgntransport94@gmail.com",
  address: "273 Glidden Rd, Brampton, ON",
  hours: "Mon–Sat 6:00am–7:00pm",
  social: { instagram: "https://instagram.com/sgntransportinc" }
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
  { icon: <Truck className="h-6 w-6" />, title: "Dump-Truck Hauling", desc: "Hourly or per-load hauling for asphalt, aggregates, soil, and demolition spoils." },
  { icon: <Route className="h-6 w-6" />, title: "Site to Site / Disposal", desc: "Clean-fill, topsoil, and approved disposal runs, ticketed and tracked." },
  { icon: <Scale className="h-6 w-6" />, title: "Asphalt & Paving Support", desc: "Night work, mill & fill, shuttle runs with on-time staging for pavers." },
  { icon: <Wrench className="h-6 w-6" />, title: "Project Support", desc: "Subdivisions, roadworks, and municipal jobs with experienced drivers." },
];

const logos = ["Glover Rd","Kingsborough","Cambridge–Brantford","Peel Region","Halton","Durham"];

const fleet = [
  { name: "Tri-Axle Dump", spec: "Detroit/PACCAR/Cummins • Eaton", note: "Tarps • Beacon • Back-up cams" },
  { name: "Quad/Lead (on request)", spec: "Broker partners", note: "Permits arranged" },
  { name: "Live Load/Scale-ticket flow", spec: "Digital logs", note: "Ticket photo & upload" },
];

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default function Page() {

  // FIXED scroll function (NO TypeScript syntax to break Vercel)
  const handleScroll = (id) => {
    if (typeof document === "undefined") return;
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a onClick={() => handleScroll("#home")} className="flex items-center gap-3 cursor-pointer">
              <img src="/sgn-logo.jpg" alt="SGN Logo" className="h-12 w-auto rounded-md shadow-sm bg-white p-1"/>
              <div className="leading-tight">
                <div className="font-semibold">{BUSINESS.name}</div>
                <div className="text-xs text-neutral-500">Since 2004 • Brampton, ON</div>
              </div>
            </a>

            <nav className="hidden md:flex gap-6 text-sm">
              {NAV.map(n => (
                <button
                  key={n.href}
                  onClick={() => handleScroll(n.href)}
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  {n.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button onClick={() => handleScroll("#order")} className="btn btn-primary">Order Trucks</button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{BUSINESS.tagline}</h1>
              <p className="mt-4 text-neutral-600 text-lg">
                Tri-axle specialists delivering on-time loads for subdivisions, roadworks, and municipal projects across Peel, Halton, Durham, and the GTA.
              </p>

              {/* FIXED BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => handleScroll("#order")} className="btn btn-primary flex items-center">
                  Order Trucks <ChevronRight className="ml-1 h-4 w-4" />
                </button>
                <button onClick={() => handleScroll("#services")} className="btn btn-outline">
                  Our Services
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-6 text-sm text-neutral-600">
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> CVOR • WSIB • Insured</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4"/> {BUSINESS.hours}</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {BUSINESS.address}</span>
              </div>
            </FadeIn>

            {/* RIGHT SIDE HERO IMAGE box stays the same */}
          </div>
        </div>
      </section>

      {/* EVERYTHING ELSE BELOW REMAINS THE SAME */}
    </div>
  );
}
