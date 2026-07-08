import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — email, phone, address and support hours.`,
  alternates: { canonical: "/contact" },
};

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.business.email,
    href: `mailto:${siteConfig.business.email}`,
    testid: "contact-email",
    hint: `Future: ${siteConfig.business.futureEmail}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.business.phone,
    href: `tel:${siteConfig.business.phone.replace(/\s/g, "")}`,
    testid: "contact-phone",
    hint: "Call or WhatsApp — we prefer WhatsApp for order queries",
  },
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.business.address.full,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      siteConfig.business.address.full,
    )}`,
    testid: "contact-address",
    hint: `${siteConfig.business.type} · ${siteConfig.business.legalName}`,
  },
  {
    icon: Clock,
    label: "Support hours",
    value: siteConfig.business.hours,
    href: null,
    testid: "contact-hours",
    hint: `Response within ${siteConfig.business.supportResponseTime}`,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Contact
        </p>
        <h1
          data-testid="contact-title"
          className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          We&apos;d love to hear from you
        </h1>
        <p className="mt-4 text-slate-600">
          Whether you need help with an order, want to request delivery in your
          area, or have a partnership idea — reach out. We reply within{" "}
          {siteConfig.business.supportResponseTime.toLowerCase()}.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {cards.map((c) => {
          const content = (
            <>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {c.label}
                </p>
                <p className="mt-1 break-words text-lg font-semibold text-slate-900">
                  {c.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{c.hint}</p>
              </div>
            </>
          );
          return c.href ? (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              data-testid={c.testid}
              className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
            >
              {content}
            </a>
          ) : (
            <div
              key={c.label}
              data-testid={c.testid}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {content}
            </div>
          );
        })}
      </div>

      <section className="mt-12 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <MessageCircle className="h-6 w-6 text-emerald-600" />
              Fastest way: WhatsApp us
            </h2>
            <p className="mt-2 max-w-xl text-slate-600">
              For order placement, delivery status or refund queries, message us
              on WhatsApp at {siteConfig.business.phone}. We&apos;re on seven
              days a week between {siteConfig.business.hours}.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.business.phone.replace(/[^\d]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-cta"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 sm:self-auto"
          >
            Open WhatsApp
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">Business details</h2>
        <dl className="mt-4 grid grid-cols-1 gap-y-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-slate-500">Legal name</dt>
            <dd className="font-medium text-slate-900">
              {siteConfig.business.legalName}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Business type</dt>
            <dd className="font-medium text-slate-900">
              {siteConfig.business.type}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Proprietor</dt>
            <dd className="font-medium text-slate-900">
              {siteConfig.business.owner}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Country</dt>
            <dd className="font-medium text-slate-900">
              {siteConfig.business.address.country}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-slate-500">Service area</dt>
            <dd className="font-medium text-slate-900">
              {siteConfig.business.serviceArea}
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
