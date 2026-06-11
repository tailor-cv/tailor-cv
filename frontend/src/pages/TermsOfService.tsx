import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container px-6 pt-32 pb-20">
        <article className="prose prose-slate dark:prose-invert mx-auto max-w-3xl">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: June 11, 2026</p>

          <p>
            These Terms of Service ("Terms") govern your access to and use of
            TailorCV (the "Service"). By using the Service, you agree to be bound
            by these Terms.
          </p>

          <h2>1. Use of the Service</h2>
          <p>
            You may use the Service only in compliance with these Terms and all
            applicable laws. You are responsible for the content you submit and
            for maintaining the confidentiality of your account.
          </p>

          <h2>2. Acceptable Use</h2>
          <p>
            You agree not to misuse the Service, including by attempting to
            disrupt it, access it without authorization, or use it for any
            unlawful or fraudulent purpose.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are
            owned by TailorCV and are protected by intellectual property laws.
            You retain ownership of the CV content you submit.
          </p>

          <h2>4. Disclaimer</h2>
          <p>
            The Service is provided "as is" without warranties of any kind. We do
            not guarantee that tailored CVs will result in employment or any
            specific outcome.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, TailorCV shall not be liable
            for any indirect, incidental, or consequential damages arising from
            your use of the Service.
          </p>

          <h2>6. Termination</h2>
          <p>
            We may suspend or terminate your access to the Service at any time,
            with or without cause or notice, including for violation of these
            Terms.
          </p>

          <h2>7. Changes to These Terms</h2>
          <p>
            We may revise these Terms from time to time. Continued use of the
            Service after changes take effect constitutes acceptance of the
            revised Terms.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:support@tailorcv.app">support@tailorcv.app</a>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
