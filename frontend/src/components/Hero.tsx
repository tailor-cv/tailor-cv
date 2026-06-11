import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Your Perfect CV,
            <span className="block bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
              Crafted by AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Transform your career story into an interview-winning CV in minutes. 
            AI-powered optimization that gets you noticed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
              <Sparkles className="w-5 h-5" />
              Generate My CV
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6 h-auto">
              See How It Works
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="pt-8 flex items-center justify-center gap-2 text-primary-foreground/70">
            <Sparkles className="w-4 h-4" />
            <p className="text-sm">Join 50,000+ professionals who landed their dream job</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
    </section>
  );
};

export default Hero;
