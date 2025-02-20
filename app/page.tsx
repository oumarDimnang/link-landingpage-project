"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Lock,
  Activity,
  ChevronRight,
  Menu,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React, { useState, useEffect } from "react";

// Import translations directly
const translations = {
  en: {
    nav: {
      features: "Features",
      benefits: "Benefits",
      team: "Team",
      getStarted: "Contact Us",
    },
    hero: {
      title: "AI-Driven Threat Intelligence",
      description:
        "Zero-Day Prediction and Detection for proactive cybersecurity defense",
      startTrial: "Contact Us",
      learnMore: "Learn More",
    },
    features: {
      title: "Key Features",
      zeroDayPrediction: {
        title: "Zero-Day Prediction",
        description:
          "Early detection of unknown threats using machine learning and anomaly detection",
      },
      zeroTrust: {
        title: "Advanced Threat Detection",
        description:
          "Continuous monitoring and real-time threat detection for enhanced security",
      },
      realTime: {
        title: "Real-time Analytics",
        description:
          "Continuous monitoring and analysis of network behavior and potential threats",
      },
    },
    benefits: {
      title: "Benefits",
      fasterDetection: {
        title: "Faster Threat Detection",
        description:
          "Real-time analysis reduces response times and minimizes potential damage",
      },
      improvedAccuracy: {
        title: "Improved Accuracy",
        description:
          "AI-driven analysis reduces false positives and enhances precision",
      },
    },
    team: {
      title: "Our Team",
      members: {
        manaf: {
          name: "Manaf Majid",
          role: "Cybersecurity Specialist",
        },
        reem: {
          name: "Reem Yasser",
          role: "Software Engineer",
        },
        oumar: {
          name: "Oumar Dimnang",
          role: "Software Engineer",
        },
        dana: {
          name: "Dana Yasser",
          role: "Software Engineer",
        },
      },
    },
    cta: {
      title: "Ready to Secure Your Network?",
      description: "Join us and use Link for proactive cybersecurity defense",
      button: "Contact Us",
    },
  },
  ar: {
    nav: {
      features: "المميزات",
      benefits: "الفوائد",
      team: "الفريق",
      getStarted: "ابدأ الآن",
    },
    hero: {
      title: "ذكاء اصطناعي للأمن السيبراني",
      description:
        "التنبؤ بالتهديدات الصفرية وتنفيذ الثقة الصفرية للدفاع الاستباقي",
      startTrial: "ابدأ النسخة التجريبية",
      learnMore: "اعرف المزيد",
    },
    features: {
      title: "المميزات الرئيسية",
      zeroDayPrediction: {
        title: "التنبؤ بالتهديدات الصفرية",
        description:
          "الكشف المبكر عن التهديدات غير المعروفة باستخدام التعلم الآلي",
      },
      zeroTrust: {
        title: "بنية الثقة الصفرية",
        description:
          "المصادقة المستمرة والتحكم الديناميكي في الوصول لتعزيز الأمان",
      },
      realTime: {
        title: "تحليلات في الوقت الفعلي",
        description:
          "المراقبة والتحليل المستمر لسلوك الشبكة والتهديدات المحتملة",
      },
    },
    benefits: {
      title: "الفوائد",
      fasterDetection: {
        title: "كشف أسرع للتهديدات",
        description:
          "يقلل التحليل في الوقت الفعلي من أوقات الاستجابة ويقلل الضرر المحتمل",
      },
      improvedAccuracy: {
        title: "دقة محسنة",
        description:
          "يقلل التحليل المدعوم بالذكاء الاصطناعي من النتائج الإيجابية الخاطئة",
      },
    },
    team: {
      title: "فريقنا",
      members: {
        manaf: {
          name: "مناف ماجد",
          role: "مطور رئيسي",
        },
        reem: {
          name: "ريم ياسر",
          role: "محللة أمنية",
        },
        oumar: {
          name: "عمر ديمنانج",
          role: "متخصص الذكاء الاصطناعي",
        },
        dana: {
          name: "دانا ياسر",
          role: "مهندسة النظام",
        },
      },
    },
    cta: {
      title: "هل أنت مستعد لتأمين شبكتك؟",
      description:
        "انضم إلى المؤسسات حول العالم التي تستخدم Link للدفاع الأمني الاستباقي",
      button: "ابدأ الآن",
    },
  },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const t = translations[language as keyof typeof translations];

  // Persist language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <React.Fragment>
      <main
        className={`min-h-screen bg-gradient-to-br from-[#1a1333] via-[#2a1758] to-[#5a1ccc] text-white ${
          language === "ar" ? "rtl" : "ltr"
        }`}
      >
        {/* Hero Section */}
        <BackgroundBeamsWithCollision className="bg-gradient-to-br from-[#1a1333] via-[#2a1758] to-[#5a1ccc]">
          <header className="container mx-auto px-4 py-8 sm:py-16">
            <nav className="flex justify-between items-center mb-8 sm:mb-16">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                <span className="text-xl sm:text-2xl font-bold">Link</span>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Desktop Navigation */}
              <div className={`hidden md:flex gap-8`}>
                <a
                  href="#features"
                  className="hover:text-purple-400 transition-colors"
                >
                  {t.nav.features}
                </a>
                <a
                  href="#benefits"
                  className="hover:text-purple-400 transition-colors"
                >
                  {t.nav.benefits}
                </a>
                <a
                  href="#team"
                  className="hover:text-purple-400 transition-colors"
                >
                  {t.nav.team}
                </a>
              </div>

              <div className={`hidden md:flex items-center gap-3`}>
                <Button
                  variant="outline"
                  className="bg-purple-600 hover:bg-purple-700 text-white border-none"
                >
                  {t.nav.getStarted}
                </Button>

                <Button
                  variant="outline"
                  className="bg-purple-900/50 text-white border-purple-400 hover:bg-purple-900/70"
                  onClick={toggleLanguage}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {language === "en" ? "العربية" : "English"}
                </Button>
              </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden bg-purple-900/50 backdrop-blur-sm rounded-lg p-4 mb-8"
              >
                <div
                  className={`flex flex-col space-y-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  <a
                    href="#features"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {t.nav.features}
                  </a>
                  <a
                    href="#benefits"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {t.nav.benefits}
                  </a>
                  <a
                    href="#team"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {t.nav.team}
                  </a>
                  <Button
                    variant="outline"
                    className="bg-purple-600 hover:bg-purple-700 text-white border-none w-full"
                  >
                    {t.nav.getStarted}
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-purple-900/50 text-white border-purple-400 hover:bg-purple-900/70 w-full"
                    onClick={toggleLanguage}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {language === "en" ? "العربية" : "English"}
                  </Button>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center py-12 sm:py-16"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400 pt-4 pb-1">
                {t.hero.title}
              </h1>
              <p className="text-xl sm:text-2xl text-purple-200 mb-8 sm:mb-10 max-w-2xl mx-auto">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto text-lg">
                  {t.hero.startTrial}
                </Button>
                <Button
                  variant="outline"
                  className="text-black hover:text-white border-purple-400 hover:bg-purple-900/50 w-full sm:w-auto text-lg"
                >
                  {t.hero.learnMore} <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </header>
        </BackgroundBeamsWithCollision>

        {/* Features Section */}
        <section
          id="features"
          className="py-12 sm:py-20 bg-purple-900/30 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
              {t.features.title}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: (
                    <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400" />
                  ),
                  title: t.features.zeroDayPrediction.title,
                  description: t.features.zeroDayPrediction.description,
                },
                {
                  icon: (
                    <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400" />
                  ),
                  title: t.features.zeroTrust.title,
                  description: t.features.zeroTrust.description,
                },
                {
                  icon: (
                    <Activity className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400" />
                  ),
                  title: t.features.realTime.title,
                  description: t.features.realTime.description,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-purple-900/40 backdrop-blur-sm p-6 sm:p-8 rounded-lg hover:bg-purple-900/60 transition-colors"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-purple-200">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
              {t.team.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: t.team.members.manaf.name,
                  role: t.team.members.manaf.role,
                  image:
                    "https://cdn.vectorstock.com/i/1000v/22/59/silhouette-a-hacker-in-hood-with-binary-code-vector-33562259.jpg",
                },
                {
                  name: t.team.members.reem.name,
                  role: t.team.members.reem.role,
                  image:
                    "https://cdn.vectorstock.com/i/1000v/22/59/silhouette-a-hacker-in-hood-with-binary-code-vector-33562259.jpg",
                },
                {
                  name: t.team.members.oumar.name,
                  role: t.team.members.oumar.role,
                  image:
                    "https://cdn.vectorstock.com/i/1000v/22/59/silhouette-a-hacker-in-hood-with-binary-code-vector-33562259.jpg",
                },
                {
                  name: t.team.members.dana.name,
                  role: t.team.members.dana.role,
                  image:
                    "https://cdn.vectorstock.com/i/1000v/22/59/silhouette-a-hacker-in-hood-with-binary-code-vector-33562259.jpg",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-purple-900/40 backdrop-blur-sm p-6 rounded-lg text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-purple-200">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
              {t.benefits.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      {t.benefits.fasterDetection.title}
                    </h3>
                    <p className="text-sm sm:text-base text-purple-200">
                      {t.benefits.fasterDetection.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      {t.benefits.improvedAccuracy.title}
                    </h3>
                    <p className="text-sm sm:text-base text-purple-200">
                      {t.benefits.improvedAccuracy.description}
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative mt-8 md:mt-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                  alt="Security Benefits"
                  className="rounded-lg shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 bg-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">
              {t.cta.title}
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 w-full sm:w-auto"
            >
              {t.cta.button}
            </Button>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
