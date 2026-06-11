import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container px-6 pt-32 pb-20">
        <article className="prose prose-slate dark:prose-invert mx-auto max-w-3xl">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: June 11, 2026</p>

          <p>
            This Privacy Policy describes how TailorCV ("we", "us", or "our")
            collects, uses, and protects your information when you use our
            service.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as the
            content of your CV, job descriptions you submit, and account details
            like your email address. We also collect basic usage data to improve
            the service.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use your information to provide and improve the CV tailoring
            service, communicate with you, and ensure the security of our
            platform. We do not sell your personal data to third parties.
          </p>

          <h2>3. Data Storage and Security</h2>
          <p>
            We take reasonable measures to protect your information against
            unauthorized access, alteration, or destruction. Your CV content is
            processed to generate tailored results and is handled in accordance
            with this policy.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party services (such as AI processing providers) to
            deliver our features. These providers are bound by their own privacy
            and security obligations.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal data at any time by contacting us.
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new policy on this page.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:support@tailorcv.app">support@tailorcv.app</a>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
