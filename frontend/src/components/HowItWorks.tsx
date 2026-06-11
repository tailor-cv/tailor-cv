import { Upload, Wand2, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Info",
    description: "Share your work history, skills, and achievements. Copy-paste or upload your old CV.",
  },
  {
    icon: Wand2,
    number: "02",
    title: "AI Works Its Magic",
    description: "Our advanced AI analyzes, optimizes, and transforms your content into compelling professional copy.",
  },
  {
    icon: Download,
    number: "03",
    title: "Download & Apply",
    description: "Get your polished, ATS-optimized CV instantly. Ready to land interviews within minutes.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple as 1-2-3
          </h2>
          <p className="text-xl text-muted-foreground">
            From raw experience to interview-ready CV in three easy steps
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-primary opacity-20" style={{ width: "calc(100% - 12rem)", margin: "0 6rem" }} />

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground text-2xl font-bold mb-6 shadow-glow">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-card rounded-xl border border-border shadow-lg">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
