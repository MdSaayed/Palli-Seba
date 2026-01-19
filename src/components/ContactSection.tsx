import { Phone, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            যোগাযোগ
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            আমার সাথে যোগাযোগ করুন
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            যেকোনো স্বাস্থ্য সমস্যায় নির্দ্বিধায় যোগাযোগ করুন
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Phone */}
          <a
            href="tel:+8801704235088"
            className="medical-card text-center group"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full gradient-hero flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">ফোন করুন</h3>
            <p className="text-primary text-base sm:text-lg font-bold">০১৭০৪২৩৫০৮৮</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
              ক্লিক করে সরাসরি কল করুন
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801704235088"
            target="_blank"
            rel="noopener noreferrer"
            className="medical-card text-center group"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-green-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">WhatsApp</h3>
            <p className="text-green-600 text-base sm:text-lg font-bold">মেসেজ পাঠান</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
              সরাসরি চ্যাট করুন
            </p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1DFVyKVzBq/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="medical-card text-center group sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-blue-600 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Facebook</h3>
            <p className="text-blue-600 text-base sm:text-lg font-bold">ফলো করুন</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
              আপডেট পেতে সংযুক্ত থাকুন
            </p>
          </a>
        </div>

        {/* Availability Info */}
        <div className="mt-8 sm:mt-12 max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                  চেম্বার সময়সূচী
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">
                  সপ্তাহের ৭ দিন সেবা প্রদান করা হয়
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm font-medium">
                    সকাল ৯:০০টা - দুপুর ১:০০টা পর্যন্ত।
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm font-medium">
                    বিকাল ৪:০০টা - রাত ৮:০০টা পর্যন্ত।
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
