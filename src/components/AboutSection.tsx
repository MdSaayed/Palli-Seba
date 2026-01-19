import { GraduationCap, Award, Clock, MapPin, CheckCircle } from "lucide-react";
import doctorImage from "@/assets/mehedi-image-1.png";


const AboutSection = () => {
  const qualifications = [
    "ডি.এম.এফ (বাংলাদেশ রাষ্ট্রীয় চিকিৎসা অনুষদ, ঢাকা)",
    "মেডিসিন, সার্জারি (মাইনর) ও শিশু রোগে প্রশিক্ষণপ্রাপ্ত।",
    "প্রাথমিক মাতৃ ও শিশু স্বাস্থ্য প্রশিক্ষণ (Basic MCH Training)",
  ];

  const features = [
    { icon: Clock, text: "সকাল ৯টা - রাত ৯টা সেবা প্রদান" },
    { icon: MapPin, text: "গ্রামীণ জনগণের কাছে সহজলভ্য" },
    { icon: Award, text: "BM&DC নিবন্ধিত চিকিৎসক" },
  ];

  return (
    <section id="about" className="section-padding gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-card rounded-2xl shadow-card p-5 sm:p-8 md:p-10">
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-full h-2 gradient-hero rounded-t-2xl" />

              {/* Profile Info */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full gradient-hero flex items-center justify-center mb-3 sm:mb-4">
                  <img src={doctorImage} alt="মোঃ মেহেদি হাসান" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                  মোঃ মেহেদি হাসান
                </h3>
                <p className="text-primary font-semibold text-sm sm:text-base">ডি.এম.এফ</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  BM&DC Reg: ডি-২১৫০৮ 
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-center p-2 sm:p-3 bg-secondary rounded-lg">
                  <p className="text-xl sm:text-2xl font-bold text-primary">৩+</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">প্রশিক্ষণ</p>
                </div>
                <div className="text-center p-2 sm:p-3 bg-secondary rounded-lg">
                  <p className="text-xl sm:text-2xl font-bold text-primary">১২+</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">ঘন্টা সেবা</p>
                </div>
                <div className="text-center p-2 sm:p-3 bg-secondary rounded-lg">
                  <p className="text-xl sm:text-2xl font-bold text-primary">৭</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">দিন খোলা</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3">
                {features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-muted rounded-lg"
                  >
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              আমার সম্পর্কে
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              বিশ্বস্ত চিকিৎসা সেবা, <br />
              <span className="text-gradient">আপনার পাশে সবসময়</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              আমি মো: মেহেদি হাসান, নিবন্ধিত চিকিৎসা সহকারী (D.M.F) বাংলাদেশ রাষ্ট্রীয়
              চিকিৎসা অনুষদ, ঢাকা থেকে ডি.এম.এফ ডিগ্রি অর্জন করে গ্রামীণ জনগণের সেবায় নিয়োজিত আছি।
            </p>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              মেডিসিন, মাইনর সার্জারি এবং শিশু রোগে প্রশিক্ষণপ্রাপ্ত। এই ক্ষেত্রে বিশেষ দক্ষতার সঙ্গে আমি সকল বয়সের রোগীদের মানসম্পন্ন চিকিৎসা সেবা প্রদান করি।
            </p>

            {/* Qualifications */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-semibold text-foreground flex items-center gap-2 text-sm sm:text-base">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                যোগ্যতা ও প্রশিক্ষণ
              </h4>
              <ul className="space-y-2">
                {qualifications.map((qual) => (
                  <li key={qual} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
