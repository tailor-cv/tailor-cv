import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="TailorCV" className="h-10 w-10" />
            <div>
              <p className="font-bold text-foreground">TailorCV</p>
              <p className="text-sm text-muted-foreground">© 2025 All rights reserved</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex gap-8 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <a href="mailto:support@tailorcv.app" className="text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
