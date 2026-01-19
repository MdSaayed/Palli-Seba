import { Shield, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BMDCSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-4 sm:p-6 md:p-10 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0 shadow-button">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="text-center md:text-left flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                  BM&DC Verification
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  বাংলাদেশ মেডিকেল ও ডেন্টাল কাউন্সিল থেকে আমার নিবন্ধন যাচাই করুন
                </p>

                {/* Registration Info */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-soft">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      নিবন্ধন নং: ডি-২১৫০৮
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-soft">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      ডি.এম.এফ
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://verify.bmdc.org.bd/matsdata/88lc0RrzkJi6153bAfipuqlR7mSKtEAe7SuLEh8S12xBWLq~j7UANvfivj0bebE1F1emMG09w000vOfiRljung--"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="shadow-button text-sm sm:text-base">
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    BM&DC সার্টিফিকেট যাচাই করুন
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMDCSection;
