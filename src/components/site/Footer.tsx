import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "../../lib/site";
import Image from "next/image";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/refund", label: "Refund & Cancellation" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-yellow-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Company */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-[#FFD200] shadow-md">
                <Image
                  src="/kiranacart-logo.png"
                  alt="KiranaCart Logo"
                  width={40}
                  height={40}
                  priority
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-black">
                  {siteConfig.name}
                </h3>

                <p className="text-sm text-gray-500">{siteConfig.tagline}</p>
              </div>
            </div>

            <p className="mt-5 max-w-lg text-gray-600 leading-7">
              {siteConfig.longDescription}
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-[#E10600]" />
                <span>{siteConfig.business.address.full}</span>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 text-[#E10600]" />
                <span>{siteConfig.business.hours}</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-[#E10600]" />

                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="hover:text-[#E10600]"
                >
                  {siteConfig.business.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-[#E10600]" />

                <a
                  href={`tel:${siteConfig.business.phone.replace(/\s/g, "")}`}
                  className="hover:text-[#E10600]"
                >
                  {siteConfig.business.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                {column.title}
              </h4>

              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-700 transition hover:text-[#E10600]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col gap-3 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.business.legalName}. Proprietor:{" "}
            {siteConfig.business.owner}. All rights reserved.
          </p>

          <p>{siteConfig.business.type} • Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
