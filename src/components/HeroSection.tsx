import { Phone, MessageCircle, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorImage from "@/assets/mehedi-image.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-fit flex items-center gradient-soft py-20 mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-medical-teal-light rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-medical-blue-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card px-3 sm:px-4 py-2 rounded-full shadow-soft mb-4 sm:mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-foreground">নিবন্ধিত চিকিৎসা সহকারী (D.M.F)</span>
            </div>

            {/* Name */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-foreground mb-3 sm:mb-4">
              মোঃ মেহেদি হাসান
            </h1>

            {/* Qualification */}
            <p className="text-base sm:text-lg md:text-xl text-primary font-semibold mb-1 sm:mb-2 inline-block">
              ডি.এম.এফ
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              বাংলাদেশ রাষ্ট্রীয় চিকিৎসা অনুষদ, ঢাকা
            </p>

            {/* Specializations - Updated text */}
            <div className="bg-secondary/50 max-w-fit rounded-xl p-3 sm:p-4 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base md:text-lg text-foreground font-medium">
                মেডিসিন, সার্জারি (মাইনর) ও শিশু রোগে প্রশিক্ষণপ্রাপ্ত।
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#appointment" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto shadow-button text-sm sm:text-base px-6 sm:px-8">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  অ্যাপয়েন্টমেন্ট নিন
                </Button>
              </a>
              <a
                href="https://wa.me/8801704235088"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  WhatsApp এ যোগাযোগ
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-trust-gold" />
                <span className="text-xs sm:text-sm text-muted-foreground">প্রাথমিক স্বাস্থ্যসেবা প্রদানকারী</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm text-muted-foreground">সরকার অনুমোদিত</span>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="relative flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-full h-full rounded-full border-4 border-primary/20" />
              <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-full h-full rounded-full border-4 border-accent/20" />
              
              {/* Main Image Container */}
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full gradient-hero flex items-center justify-center shadow-card overflow-hidden p-1 sm:p-2">
                <div className="w-full h-full rounded-full bg-card overflow-hidden">
                  <img 
                    src={doctorImage} 
                    alt="মোঃ মেহেদি হাসান" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Strip */}
        <div className="mt-8 sm:mt-12 lg:mt-16 bg-destructive/10 border border-destructive/20 rounded-xl p-3 sm:p-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-destructive/20 flex items-center justify-center animate-pulse-soft">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-semibold text-foreground text-sm sm:text-base">জরুরি যোগাযোগ</p>
                <p className="text-xs sm:text-sm text-muted-foreground">যেকোনো সময় কল করুন</p>
              </div>
            </div>
            <a href="tel:+8801704235088">
              <Button variant="destructive" size="lg" className="shadow-lg text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                ০১৭০৪২৩৫০৮৮
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
