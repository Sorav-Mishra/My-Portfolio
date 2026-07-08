import type { Metadata } from "next";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} — how we collect, use and protect your data.`,
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "January 8, 2026";

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="border-b border-slate-200 pb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Legal
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: {lastUpdated}
        </p>
      </header>

      <div className="prose prose-slate mt-8 max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-emerald-700 prose-a:no-underline hover:prose-a:underline">
        <p>
          This Privacy Policy explains how <strong>{siteConfig.name}</strong>{" "}
          (&ldquo;{siteConfig.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;,
          or &ldquo;us&rdquo;), a sole proprietorship operated by{" "}
          <strong>{siteConfig.business.owner}</strong> based in{" "}
          {siteConfig.business.address.full}, collects, uses, discloses and
          protects your information when you use our website, mobile application
          and grocery delivery services (collectively, the
          &ldquo;Services&rdquo;).
        </p>
        <p>
          By using the Services you agree to this Policy. This Policy is
          designed to comply with the Google Play Developer Program Policies,
          Google Play&apos;s User Data policy, India&apos;s Digital Personal
          Data Protection Act, 2023 (DPDP Act) and the Information Technology
          (Reasonable Security Practices and Procedures and Sensitive Personal
          Data or Information) Rules, 2011.
        </p>

        <h2>1. Information we collect</h2>
        <p>
          We only collect data that is necessary to provide, secure and improve
          the Services. The categories are:
        </p>
        <ul>
          <li>
            <strong>Account information</strong>: name, phone number, email
            address, delivery address, and (optionally) date of birth. Provided
            by you at signup or checkout.
          </li>
          <li>
            <strong>Order &amp; transaction data</strong>: items ordered,
            invoice amounts, payment method (Cash on Delivery / online), payment
            status, refund status. Payments are processed by third-party payment
            gateways; we do not store your full card number, CVV or UPI PIN.
          </li>
          <li>
            <strong>Location data</strong>: precise or approximate device
            location, only when you grant permission, used solely to confirm
            serviceable area, calculate delivery ETA, and route your order. You
            can revoke this at any time in your device settings.
          </li>
          <li>
            <strong>Device &amp; usage data</strong>: device model, OS version,
            app version, unique device identifiers, IP address, crash logs, and
            interaction events (screens viewed, buttons tapped). Used for
            security, fraud prevention and improving the app.
          </li>
          <li>
            <strong>Communications</strong>: messages, calls or emails you send
            to our support team, and delivery-partner interactions related to
            your order.
          </li>
          <li>
            <strong>Cookies &amp; similar technologies</strong> on the website,
            to keep you signed in and remember preferences.
          </li>
        </ul>
        <p>
          <strong>
            We do not knowingly collect data from children under 18.
          </strong>{" "}
          If you believe a minor has provided us data, contact us and we will
          delete it.
        </p>

        <h2>2. How we use your information</h2>
        <ul>
          <li>To create and manage your account.</li>
          <li>
            To fulfil, deliver, invoice and provide support for your orders.
          </li>
          <li>To process payments and refunds through payment partners.</li>
          <li>
            To send transactional messages (order confirmation, dispatch,
            delivery, refund) via SMS, WhatsApp, email or push notifications.
          </li>
          <li>
            To send optional promotional messages, only if you opt in. You can
            opt out anytime.
          </li>
          <li>
            To detect, prevent and investigate fraud, abuse, and violations of
            our Terms.
          </li>
          <li>
            To comply with applicable laws, tax rules and lawful requests from
            authorities.
          </li>
          <li>
            To analyse aggregated, non-identifying usage patterns to improve our
            Services.
          </li>
        </ul>

        <h2>3. Legal bases for processing</h2>
        <p>
          We process your personal data under one or more of these legal bases:
          (a) your consent; (b) performance of a contract with you (fulfilling
          your order); (c) compliance with a legal obligation; (d) our
          legitimate interests in operating a safe, reliable service.
        </p>

        <h2>4. Sharing of information</h2>
        <p>
          We <strong>never sell</strong> your personal data. We share only with:
        </p>
        <ul>
          <li>
            <strong>Delivery partners</strong> — your name, phone number and
            delivery address, strictly to hand over your order.
          </li>
          <li>
            <strong>Payment gateways</strong> — order amount and identifiers to
            process online payments and refunds.
          </li>
          <li>
            <strong>Service providers</strong> — hosting, SMS/email/push,
            analytics and crash-reporting vendors bound by confidentiality
            obligations.
          </li>
          <li>
            <strong>Government / law enforcement</strong> — when required by
            valid legal process, or to protect the rights, property or safety of{" "}
            {siteConfig.name}, our users or the public.
          </li>
          <li>
            <strong>Business transfers</strong> — if the business is merged,
            acquired or reorganised, your data may transfer to the successor
            entity subject to this Policy.
          </li>
        </ul>

        <h2>5. Permissions we request (mobile app)</h2>
        <ul>
          <li>
            <strong>Location</strong> — to detect serviceability and route
            orders. Optional.
          </li>
          <li>
            <strong>Notifications</strong> — to send order updates. Optional.
          </li>
          <li>
            <strong>Phone / SMS auto-read</strong> — only where technically
            required for OTP-based sign-in. We never read personal messages.
          </li>
          <li>
            <strong>Camera / Photos</strong> — only if you choose to upload a
            profile picture or a photo related to a support complaint.
          </li>
        </ul>
        <p>
          Every permission is used only for the purpose stated above and can be
          revoked in device settings without disabling core functionality that
          does not require it.
        </p>

        <h2>6. Data retention</h2>
        <p>
          We retain personal data only for as long as needed to fulfil the
          purposes above or as required by law (e.g., tax invoices are kept for
          statutory periods). When no longer needed, data is deleted or
          anonymised.
        </p>

        <h2>7. Data security</h2>
        <p>
          We use industry-standard safeguards including HTTPS/TLS in transit,
          access controls, and least-privilege administration. No system is 100%
          secure; if we discover a personal data breach that is likely to result
          in significant harm, we will notify affected users and the appropriate
          authorities as required by law.
        </p>

        <h2>8. Your rights</h2>
        <p>Subject to applicable law, you have the right to:</p>
        <ul>
          <li>Access a copy of the personal data we hold about you.</li>
          <li>
            Correct inaccurate or incomplete data (from the app profile or by
            contacting us).
          </li>
          <li>
            Delete your account and associated data. We may retain limited
            transactional records where required by law.
          </li>
          <li>Withdraw consent for marketing at any time.</li>
          <li>
            Grievance redressal &mdash; contact our Grievance Officer below.
          </li>
        </ul>
        <p>
          To exercise these rights, email us at{" "}
          <a href={`mailto:${siteConfig.business.email}`}>
            {siteConfig.business.email}
          </a>{" "}
          from your registered email or phone. We will respond within{" "}
          {siteConfig.business.supportResponseTime}.
        </p>

        <h2>9. Third-party links &amp; services</h2>
        <p>
          Our Services may link to third-party sites (e.g., payment gateways).
          Their privacy practices are governed by their own policies, which we
          encourage you to review.
        </p>

        <h2>10. International transfers</h2>
        <p>
          Your data is primarily processed in India. Some vendors (e.g.,
          analytics or crash-reporting) may store data outside India under
          contractual safeguards.
        </p>

        <h2>11. Changes to this Policy</h2>
        <p>
          We may update this Policy from time to time. Material changes will be
          notified in-app or by email. The &ldquo;Last updated&rdquo; date above
          always reflects the current version.
        </p>

        <h2>12. Grievance Officer &amp; contact</h2>
        <p>
          In accordance with the Information Technology Act, 2000 and rules made
          thereunder, the name and contact details of the Grievance Officer are:
        </p>
        <ul>
          <li>
            <strong>Name:</strong> {siteConfig.business.owner} (Proprietor)
          </li>
          <li>
            <strong>Business:</strong> {siteConfig.business.legalName} (
            {siteConfig.business.type})
          </li>
          <li>
            <strong>Address:</strong> {siteConfig.business.address.full}
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${siteConfig.business.email}`}>
              {siteConfig.business.email}
            </a>{" "}
            (future: {siteConfig.business.futureEmail})
          </li>
          <li>
            <strong>Phone:</strong> {siteConfig.business.phone}
          </li>
          <li>
            <strong>Hours:</strong> {siteConfig.business.hours}
          </li>
        </ul>
      </div>
    </article>
  );
}
