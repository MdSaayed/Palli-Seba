import { Phone, MessageCircle, Heart, AlertTriangle } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Doctor Info */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              <a href="#home" className="flex items-center gap-2">
                <img className="max-w-[200px]" src={logo} alt="Polli Seba" />
              </a>
            </div>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed">
              বাংলাদেশ রাষ্ট্রীয় চিকিৎসা অনুষদ, ঢাকা <br />
              BM&DC Reg: ডি-২১৫০৮
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-background/70 hover:text-primary transition-colors">
                  হোম
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-primary transition-colors">
                  সেবাসমূহ
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  আমার সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#appointment" className="text-background/70 hover:text-primary transition-colors">
                  অ্যাপয়েন্টমেন্ট
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  যোগাযোগ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">যোগাযোগ</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <a
                href="tel:+8801704235088"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors justify-center sm:justify-start"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                ০১৭০৪২৩৫০৮৮
              </a>
              <a
                href="https://wa.me/8801704235088"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors justify-center sm:justify-start"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                WhatsApp
              </a>
              <a
                href="https://www.facebook.com/share/1DFVyKVzBq/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors justify-center sm:justify-start"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 sm:mt-10 p-3 sm:p-4 bg-amber-500/20 border border-amber-500/30 rounded-xl">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-amber-200 leading-relaxed text-center m-0 ">
              এই সাইট কেবল তথ্যের জন্য। জরুরি অবস্থায় নিকটস্থ হাসপাতালে যোগাযোগ করুন।
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-background/10 text-center">
          <p className="text-xs sm:text-sm text-background/60">
            © {currentYear} মোঃ মেহেদি হাসান। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
