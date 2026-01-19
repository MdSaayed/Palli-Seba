import { Shield, Heart, Clock, Wallet, Users, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "সরকার অনুমোদিত",
    description: "BM&DC নিবন্ধিত ও সরকার অনুমোদিত।",
  },
  {
    icon: Heart,
    title: "রোগীদের প্রতি যত্নশীল",
    description: "প্রতিটি রোগীর প্রতি আন্তরিক ও যত্নশীল সেবা।",
  },
  {
    icon: Clock,
    title: "সময়মতো সেবা",
    description: "সকাল থেকে রাত পর্যন্ত নিরবচ্ছিন্ন সেবা।",
  },
  {
    icon: Wallet,
    title: "সাশ্রয়ী মূল্য",
    description: "গ্রামীণ জনগণের সাধ্যের মধ্যে চিকিৎসা খরচ।",
  },
  {
    icon: Users,
    title: "পারিবারিক সেবা",
    description: "পুরো পরিবারের স্বাস্থ্য সেবা একই স্থানে।",
  },
  {
    icon: ThumbsUp,
    title: "অভিজ্ঞ ও প্রশিক্ষিত",
    description: "মেডিসিন, সার্জারি (মাইনর) ও শিশু রোগে প্রশিক্ষণপ্রাপ্ত।",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            কেন আমাকে বেছে নেবেন
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            আপনার বিশ্বাসের কারণ
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            রোগীদের সুস্থতাই আমার সবচেয়ে বড় পুরস্কার
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-muted rounded-xl hover:shadow-soft transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
