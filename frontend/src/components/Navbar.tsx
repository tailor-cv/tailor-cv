import logoIcon from "@/assets/logo-icon.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="TailorCV" className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">TailorCV</span>
          </div>

          {/* CTA Button */}
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
