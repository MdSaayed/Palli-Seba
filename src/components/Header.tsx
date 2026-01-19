import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "হোম" },
    { href: "#services", label: "সেবাসমূহ" },
    { href: "#about", label: "আমার সম্পর্কে" },
    { href: "#appointment", label: "অ্যাপয়েন্টমেন্ট" },
    { href: "#contact", label: "যোগাযোগ" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-card/70 backdrop-blur-xl shadow-lg border-b border-border/50" 
        : "bg-card/95 backdrop-blur-md shadow-soft"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
             <img className="max-w-[200px]" src={logo} alt="Polli Seba" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+8801704235088">
              <Button variant="default" size="sm" className="shadow-button">
                <Phone className="w-4 h-4 mr-2" />
                কল করুন
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 px-4">
              <a href="tel:+8801704235088" className="block">
                <Button variant="default" className="w-full shadow-button">
                  <Phone className="w-4 h-4 mr-2" />
                  কল করুন
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
