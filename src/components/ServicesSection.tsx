import { Stethoscope, Pill, Baby, Scissors, HeartPulse, Users ,Heart } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "সাধারণ রোগের প্রাথমিক চিকিৎসা",
    description: "জ্বর, সর্দি, কাশি, পেটের সমস্যা সহ সাধারণ ও প্রচলিত রোগের প্রাথমিক চিকিৎসা ও পরামর্শ প্রদান করা হয়।",
  },
  {
    icon: Pill,
    title: "মেডিসিন সেবা",
    description: "ডায়াবেটিস ও উচ্চ রক্তচাপ সংক্রান্ত সমস্যার প্রাথমিক চিকিৎসা ও নিয়মিত ফলো-আপ প্রদান করা হয়।",
  },
  {
    icon: Baby,
    title: "শিশু রোগ সেবা",
    description: "নবজাতক থেকে শুরু করে সকল বয়সের শিশুদের সাধারণ রোগের প্রাথমিক চিকিৎসা ও যত্ন প্রদান করা হয়।",
  },
  {
    icon: Scissors,
    title: "মাইনর সার্জারি ও প্রাথমিক চিকিৎসা",
    description: "ক্ষত পরিষ্কার, ড্রেসিং, সেলাই ও ফোঁড়া চিকিৎসাসহ মাইনর সার্জারি সংক্রান্ত প্রাথমিক সেবা প্রদান করা হয়।",
  },
  {
    icon: HeartPulse,
    title: "স্বাস্থ্য পরামর্শ",
    description: "সুস্থ জীবনযাপনের জন্য প্রয়োজনীয় স্বাস্থ্য পরামর্শ ও রোগ প্রতিরোধমূলক গাইডলাইন প্রদান করা হয়।",
  },
  {
    icon: Users,
    title: "পরিবারভিত্তিক স্বাস্থ্যসেবা",
    description: "পরিবারের সকল সদস্যের জন্য নিরাপদ ও নির্ভরযোগ্য প্রাথমিক স্বাস্থ্যসেবা প্রদান করা হয়।",
  },
  {
    icon: Heart ,
    title: "মাতৃসেবা",
    description: "স্বাভাবিক গর্ভাবস্থা চিহ্নিতকরণ, নিয়মিত ফলো-আপ, স্বাভাবিক প্রসব এবং মা ও নবজাতকের প্রাথমিক যত্ন প্রদান করা হয়।",
  },
  {
    icon: Heart ,
    title: "পরিবার পরিকল্পনা",
    description: "পরিবার পরিকল্পনা সংক্রান্ত পরামর্শ এবং নিরাপদ পদ্ধতি নির্বাচন, ব্যবহার ও স্বাস্থ্য রক্ষার প্রাথমিক সহায়তা প্রদান করা হয়।",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
           সেবা
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            আমাদের সেবাসমূহ
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            গ্রামীণ জনগণের জন্য সহজলভ্য, মানসম্মত ও নিরাপদ প্রাথমিক স্বাস্থ্যসেবা প্রদানই আমার প্রধান লক্ষ্য।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="medical-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-hero flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
