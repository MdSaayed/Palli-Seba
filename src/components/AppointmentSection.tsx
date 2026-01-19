import { useState } from "react";
import { Calendar, User, Phone, FileText, Send, CheckCircle, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// তোমার আসল Google Apps Script Web App URL (এটি সঠিকটা রাখো)
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzC3HHntn7khVL2gKE6vSg5ZCjOyaJZtWLtV0j11A3CiqHhjmWrMk__PLVMI5V7ELW3GQ/exec";

const AppointmentSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    date: "",
    service: "",
    treatmentModes: "",
    message: "",
  });

  const services = [
    "সাধারণ রোগের প্রাথমিক চিকিৎসা",
    "মেডিসিন সেবা",
    "শিশু রোগ সেবা",
    "মাইনর সার্জারি ও প্রাথমিক চিকিৎসা",
    "স্বাস্থ্য পরামর্শ",
    "পরিবারভিত্তিক স্বাস্থ্যসেবা",
    "মাতৃসেবা",
    "পরিবার পরিকল্পনা",
    "অন্যান্য",
  ];

  const ageOptions = [
    "0-1 বছর",
    "1-5 বছর",
    "6-12 বছর",
    "13-18 বছর",
    "19-35 বছর",
    "36-50 বছর",
    "51+ বছর",
  ];

  const treatmentModes = [
    "চেম্বার ভিজিট",
    "নিজ বাসায় ভিজিট",
    "অনলাইন (ভিডিও কল/ফোন কল)",
  ];

  const EMAILJS_SERVICE_ID = "service_ga0l5q7";
  const EMAILJS_TEMPLATE_ID = "template_o1dvsx9";
  const EMAILJS_USER_ID = "UUNIcNzSSVb67BTli";


  // Input ও Textarea এর জন্য হ্যান্ডলার
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Select ফিল্ডগুলোর জন্য হ্যান্ডলার
  const handleSelectChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1️⃣ Google Sheet এ পাঠানো
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData),
      });

      // Spreadsheet POST ধরে নিয়েছি সফল
      setIsSubmitted(true);

      // 2️⃣ EmailJS এ পাঠানো
      const templateParams = {
        ...formData,
        timestamp: new Date().toLocaleString("bn-BD"),
      };

      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_USER_ID,
          template_params: templateParams,
        }),
      });

      toast({
        title: "অ্যাপয়েন্টমেন্ট সফল হয়েছে!",
        description: "আপনার তথ্য গুগল শিটে সেভ হয়েছে এবং আমরা শীঘ্রই ইমেইল পাঠিয়েছি।",
      });

      // ফর্ম রিসেট
      setFormData({
        name: "",
        age: "",
        phone: "",
        date: "",
        service: "",
        treatmentModes: "",
        message: "",
      });

    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "ত্রুটি হয়েছে!",
        description: "অ্যাপয়েন্টমেন্ট পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="appointment" className="section-padding gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Info Side */}
          <div>
            <span className="inline-block px-3 sm:px-4 py-1.5 bg-secondary text-primary rounded-full text-xs sm:text-sm font-medium mb-4">
              অ্যাপয়েন্টমেন্ট
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              আজই অ্যাপয়েন্টমেন্ট <br />
              <span className="text-gradient">নিন</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              ফর্মটি পূরণ করুন এবং আমরা আপনার সাথে যোগাযোগ করে অ্যাপয়েন্টমেন্ট নিশ্চিত করব।
              অথবা সরাসরি কল করুন।
            </p>

            <div className="space-y-3 sm:space-y-4">
              <a
                href="tel:+8801704235088"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">সরাসরি কল করুন</p>
                  <p className="text-primary text-sm sm:text-base">০১৭০৪২৩৫০৮৮</p>
                </div>
              </a>

              <a
                href="https://wa.me/8801704235088"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">WhatsApp এ মেসেজ করুন</p>
                  <p className="text-green-600 text-sm sm:text-base">সরাসরি চ্যাট করুন</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card rounded-2xl shadow-card p-4 sm:p-6 md:p-8">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                অ্যাপয়েন্টমেন্ট ফর্ম
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                নিচের তথ্যগুলো পূরণ করুন
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8 sm:py-12 animate-fade-in">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  ধন্যবাদ!
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  আপনার অ্যাপয়েন্টমেন্ট অনুরোধ সফলভাবে জমা হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    রোগীর নাম
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="আপনার নাম লিখুন"
                    required
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    বয়স
                  </label>
                  <Select
                    onValueChange={(value) => handleSelectChange("age", value)}
                    required
                  >
                    <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base">
                      <SelectValue placeholder="বয়স নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      {ageOptions.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    মোবাইল নাম্বার
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="০১XXXXXXXXX"
                    required
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    পছন্দের তারিখ
                  </label>
                  <Input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    সেবার ধরন
                  </label>
                  <Select
                    onValueChange={(value) => handleSelectChange("service", value)}
                    required
                  >
                    <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base">
                      <SelectValue placeholder="সেবা নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Treatment Mode */}
                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    আপনি কিভাবে চিকিৎসা নিতে চান?
                  </label>
                  <Select
                    onValueChange={(value) => handleSelectChange("treatmentModes", value)}
                    required
                  >
                    <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base">
                      <SelectValue placeholder="নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      {treatmentModes.map((mode) => (
                        <SelectItem key={mode} value={mode}>
                          {mode}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    সমস্যার বিবরণ
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="আপনার সমস্যা সংক্ষেপে লিখুন..."
                    rows={3}
                    className="text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-button text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      পাঠানো হচ্ছে...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      অ্যাপয়েন্টমেন্ট পাঠান
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;