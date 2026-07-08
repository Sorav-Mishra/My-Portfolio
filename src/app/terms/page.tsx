import type { Metadata } from "next";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions governing use of ${siteConfig.name} services.`,
  alternates: { canonical: "/terms" },
};

const lastUpdated = "January 8, 2026";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="border-b border-slate-200 pb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Legal
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: {lastUpdated}
        </p>
      </header>

      <div className="prose prose-slate mt-8 max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-emerald-700 prose-a:no-underline hover:prose-a:underline">
        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of
          the {siteConfig.name} website, mobile application and grocery delivery
          services (collectively, the &ldquo;Services&rdquo;) provided by{" "}
          <strong>{siteConfig.business.owner}</strong>, proprietor of{" "}
          <strong>{siteConfig.business.legalName}</strong>, a{" "}
          {siteConfig.business.type} based in {siteConfig.business.address.full}
          . By accessing or using the Services, you agree to be bound by these
          Terms.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          You must be at least 18 years old and legally competent to enter into
          a contract under the Indian Contract Act, 1872, to use the Services.
          By using the Services you confirm that the information you provide is
          true, accurate and complete.
        </p>

        <h2>2. Account &amp; security</h2>
        <ul>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activity on your account.
          </li>
          <li>
            Notify us immediately at{" "}
            <a href={`mailto:${siteConfig.business.email}`}>
              {siteConfig.business.email}
            </a>{" "}
            of any unauthorised use.
          </li>
          <li>
            We may suspend or terminate accounts that violate these Terms or
            applicable law.
          </li>
        </ul>

        <h2>3. Service area &amp; hours</h2>
        <p>
          {siteConfig.business.serviceArea} Our service hours are{" "}
          {siteConfig.business.hours}. We do our best to deliver on time but
          delivery windows are estimates and may be affected by weather, traffic
          or force majeure events.
        </p>

        <h2>4. Products, pricing &amp; availability</h2>
        <ul>
          <li>
            Product listings, images and descriptions are for illustration and
            may differ slightly from the item delivered (brand pack changes, new
            labels, etc.).
          </li>
          <li>
            Prices are inclusive of applicable taxes unless stated otherwise.
            Prices may change without notice; the price at order confirmation is
            final for that order.
          </li>
          <li>
            All products are subject to stock availability. If an item becomes
            unavailable after you place the order, we may substitute it (with
            your consent) or refund it.
          </li>
        </ul>

        <h2>5. Orders, payments &amp; invoicing</h2>
        <ul>
          <li>
            An order is confirmed only when you receive an in-app or SMS
            confirmation.
          </li>
          <li>
            We accept Cash on Delivery (COD) and online payments through trusted
            third-party gateways. We do not store card numbers, CVVs or UPI
            PINs.
          </li>
          <li>
            You are responsible for accurate delivery address and reachable
            phone number. Failed deliveries due to inaccurate details or
            unavailability may incur a re-delivery or restocking cost.
          </li>
          <li>Digital invoices are provided for every completed order.</li>
        </ul>

        <h2>6. Cancellation, returns &amp; refunds</h2>
        <p>
          Cancellations, returns and refunds are governed by our separate{" "}
          <a href="/refund">Refund &amp; Cancellation Policy</a>, which forms an
          integral part of these Terms.
        </p>

        <h2>7. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the Services for any unlawful, fraudulent or abusive purpose.
          </li>
          <li>
            Attempt to reverse-engineer, decompile, scrape, or interfere with
            the Services or their security.
          </li>
          <li>
            Impersonate any person, misuse promo codes, or place fake orders.
          </li>
          <li>
            Harass, threaten or abuse our staff, riders or partner businesses.
            Verbal or physical abuse of delivery partners may result in
            immediate account termination and legal action.
          </li>
        </ul>

        <h2>8. Intellectual property</h2>
        <p>
          All trademarks, logos, content, code and design of the Services are
          the property of {siteConfig.name} or its licensors. You may not copy,
          distribute or create derivative works without our prior written
          consent, except for personal, non-commercial use as permitted by these
          Terms.
        </p>

        <h2>9. Third-party services</h2>
        <p>
          The Services may include or link to third-party services (payment
          gateways, maps, delivery partners). We are not responsible for the
          practices of these third parties; their terms and privacy policies
          apply to your use of their services.
        </p>

        <h2>10. Disclaimer of warranties</h2>
        <p>
          The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis without warranties of any kind, express or
          implied, except as required by law. We do not warrant uninterrupted or
          error-free operation of the Services.
        </p>

        <h2>11. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {siteConfig.name} and its
          proprietor shall not be liable for any indirect, incidental, special,
          consequential or punitive damages, or any loss of profits or revenues,
          arising out of or related to your use of the Services. Our aggregate
          liability for any claim shall not exceed the total amount you paid to
          us for the order giving rise to the claim.
        </p>

        <h2>12. Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless {siteConfig.name}, its
          proprietor, employees, riders and partners from any claim, loss or
          expense (including reasonable legal fees) arising from your breach of
          these Terms or misuse of the Services.
        </p>

        <h2>13. Force majeure</h2>
        <p>
          We are not liable for delays or failure in performance caused by
          events beyond our reasonable control, including acts of God, floods,
          fire, riots, strikes, pandemics, government orders or Internet
          outages.
        </p>

        <h2>14. Modifications to the Services or Terms</h2>
        <p>
          We may modify or discontinue any part of the Services at any time. We
          may also revise these Terms; material changes will be notified in the
          app or by email. Continued use after such changes constitutes
          acceptance.
        </p>

        <h2>15. Governing law &amp; jurisdiction</h2>
        <p>
          These Terms are governed by the laws of India. Any dispute arising out
          of or in relation to these Terms or the Services shall be subject to
          the exclusive jurisdiction of the competent courts at Shahjahanpur,
          Uttar Pradesh, India, subject to any statutory consumer forum rights
          you may have.
        </p>

        <h2>16. Contact</h2>
        <p>
          For questions about these Terms, contact us at:
          <br />
          <strong>{siteConfig.business.legalName}</strong>
          <br />
          {siteConfig.business.address.full}
          <br />
          Email:{" "}
          <a href={`mailto:${siteConfig.business.email}`}>
            {siteConfig.business.email}
          </a>
          <br />
          Phone: {siteConfig.business.phone}
        </p>
      </div>
    </article>
  );
}
