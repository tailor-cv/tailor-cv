import { Brain, Target, Zap } from "lucide-react";
import featureAI from "@/assets/feature-ai.jpg";
import featureOptimize from "@/assets/feature-optimize.jpg";
import featureInstant from "@/assets/feature-instant.jpg";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced AI analyzes your experience and crafts compelling narratives that showcase your unique value to employers.",
    image: featureAI,
  },
  {
    icon: Target,
    title: "ATS-Optimized",
    description: "Beat the bots. Our AI ensures your CV passes Applicant Tracking Systems while staying human-readable and impressive.",
    image: featureOptimize,
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "From rough draft to polished professional CV in minutes. No more hours of formatting and rewriting.",
    image: featureInstant,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why TailorCV Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Cutting-edge AI technology meets professional CV writing expertise
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon/Image Container */}
              <div className="mb-6 relative">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-primary p-1">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
