import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  Wallet,
  Shield,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "../lib/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.longDescription,
  alternates: { canonical: "/" },
};

const features = [
  {
    icon: Truck,
    title: "Fast Local Delivery",
    body: "Groceries and daily essentials delivered to your doorstep across selected towns and villages.",
  },
  {
    icon: Wallet,
    title: "Fair, Kirana Prices",
    body: "Everyday low prices with Cash on Delivery and secure online payment options.",
  },
  {
    icon: Shield,
    title: "Quality You Can Trust",
    body: "Fresh, unspoilt items sourced from vetted local kirana partners. Damaged? We refund.",
  },
  {
    icon: Clock,
    title: "Open 7 Days",
    body: "Order Monday to Sunday, 7:00 AM to 10:00 PM IST — because groceries can't wait.",
  },
];

const steps = [
  {
    n: "01",
    title: "Browse & Add",
    body: "Pick from atta, dal, oil, snacks, personal care, home cleaning and more.",
  },
  {
    n: "02",
    title: "Confirm Address",
    body: "Enter your delivery address in Shahjahanpur district. Save it for next time.",
  },
  {
    n: "03",
    title: "Pay Your Way",
    body: "Cash on Delivery or pay online securely. Your order is placed instantly.",
  },
  {
    n: "04",
    title: "Get It Home",
    body: "Our delivery partner drops it at your door. Har zarurat, ghar tak.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_50%_at_50%_0%,#a7f3d0_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span
                data-testid="hero-badge"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Now serving Kurriya kalan
              </span>
              <h1
                data-testid="hero-title"
                className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Groceries at kirana prices,{" "}
                <span className="text-emerald-600">delivered home.</span>
              </h1>
              <p
                data-testid="hero-tagline"
                className="mt-5 text-lg text-slate-600 sm:text-xl"
              >
                {siteConfig.tagline} — {siteConfig.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  data-testid="hero-cta-primary"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/privacy"
                  data-testid="hero-cta-secondary"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  Read Privacy Policy
                </Link>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-4 sm:max-w-md sm:grid-cols-3">
                {[
                  { k: "7 AM – 10 PM", v: "Every day" },
                  { k: "COD", v: "Or pay online" },
                  { k: "24–48 hrs", v: "Support reply" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-emerald-100 bg-white/60 p-3 backdrop-blur"
                  >
                    <dt className="text-sm font-bold text-slate-900">{s.k}</dt>
                    <dd className="text-xs text-slate-600">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 rotate-6 rounded-[36px] bg-emerald-200/60" />
                <div className="absolute inset-0 -rotate-3 rounded-[36px] bg-emerald-100" />
                <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[36px] border border-emerald-200 bg-white p-8 shadow-xl">
                  <div className="flex h-40 w-40 items-center justify-center rounded-[32px] bg-[#FFD200] shadow-2xl ring-8 ring-white">
                    <Image
                      src="/kiranacartlogo.png"
                      alt="KiranaCart Logo"
                      width={110}
                      height={110}
                      priority
                      className="object-contain"
                    />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-slate-900">
                    Your daily kirana,
                  </h2>
                  <p className="text-2xl font-bold text-emerald-600">
                    at your doorstep.
                  </p>
                  <ul className="mt-6 grid w-full grid-cols-2 gap-2 text-center text-sm">
                    {["Atta", "Dal", "Oil", "Snacks", "Dairy", "Home"].map(
                      (t) => (
                        <li
                          key={t}
                          className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-2 py-2 font-medium text-emerald-800"
                        >
                          {t}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        aria-labelledby="features-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Built for Bharat&apos;s kirana shoppers
          </h2>
          <p className="mt-4 text-slate-600">
            KiranaCart is designed for real families in real neighbourhoods —
            not just metros. Simple, fair, and reliable.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              data-testid={`feature-${f.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How KiranaCart works
            </h2>
            <p className="mt-4 text-slate-600">
              From your phone to your door in four simple steps.
            </p>
          </div>
          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold tracking-widest text-emerald-600">
                  {s.n}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service area */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <MapPin className="h-3.5 w-3.5" /> Service area
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Starting in Shahjahanpur. Growing across UP.
            </h2>
            <p className="mt-4 text-slate-600">
              {siteConfig.business.serviceArea}
            </p>
            <p className="mt-3 text-slate-600">
              Not in our area yet? Tell us where you live — we&apos;re expanding
              town by town.
            </p>
            <Link
              href="/contact"
              data-testid="service-area-cta"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Request your area <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
            <div className="space-y-4 text-sm text-slate-700">
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-emerald-600" />
                {siteConfig.business.address.full}
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-emerald-600" />
                {siteConfig.business.hours}
              </p>
              <p className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-emerald-600" />
                Google Play compliant privacy &amp; refund policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-600 px-6 py-14 text-center shadow-lg sm:px-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/40 blur-3xl" />
          <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to shop your kirana list?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-emerald-50">
            Reach out on WhatsApp or call us — we&apos;ll help you place your
            first order.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${siteConfig.business.phone.replace(/\s/g, "")}`}
              data-testid="cta-call"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50"
            >
              Call {siteConfig.business.phone}
            </a>
            <Link
              href="/contact"
              data-testid="cta-contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
