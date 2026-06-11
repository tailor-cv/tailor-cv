import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "No credit card required",
  "ATS-optimized templates",
  "Instant AI optimization",
  "Professional formatting",
];

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight animate-fade-in">
            Ready to Transform Your Career?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Join thousands of professionals who've upgraded their CVs with AI
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 py-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="text-lg px-12 py-7 h-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Start Creating Your CV Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Note */}
          <p className="text-sm text-primary-foreground/70 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Free to start • Takes 5 minutes • Results guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
