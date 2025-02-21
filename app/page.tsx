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
  Brain,
  Timer,
  ShieldCheck,
  Eye,
  ThumbsUp,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React, { useState, useEffect } from "react";
import oumar from "../assets/teampictures/oumarDimnang.png";
import reem from "../assets/teampictures/reemYasser.jpg";
import dana from "../assets/teampictures/danaYasser.jpg";
import manaf from "../assets/teampictures/manafMajid.jpeg";
import { IconBrandGithub } from "@tabler/icons-react";

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
      improvedAccuracy: {
        title: "Enhanced Precision with AI-Driven Analysis",
        description:
          "AI-driven analysis reduces false positives and boosts detection accuracy, ensuring reliable and actionable security alerts for a more efficient and effective defense.",
      },
      realTimeAnalysis: {
        title: "Seamless API Integration for Real-Time Analysis",
        description:
          "Our solution effortlessly integrates with existing systems via APIs, enabling real-time threat detection and response without disrupting your workflow.",
      },
      sansSIRF: {
        title: "Intelligent Incident Response Aligned with SANS SIRF",
        description:
          "We automate incident response using the SANS Incident Response Framework (SIRF), ensuring swift, strategic, and effective mitigation of security threats.",
      },
      mitreAttack: {
        title: "Advanced Threat Detection with MITRE ATT&CK",
        description:
          "Leveraging MITRE ATT&CK, our system identifies and analyzes historical attack patterns and TTPs (Tactics, Techniques, and Procedures) to proactively defend against emerging threats.",
      },
    },
    team: {
      title: "Our Team",
      members: {
        manaf: {
          name: "Manaf Majid",
          role: "Cybersecurity Specialist",
          linkedin: "https://www.linkedin.com/in/manaf-majid-722352272/",

          email: "manafmajid992@gmail.com",
        },
        reem: {
          name: "Reem Yasser",
          role: "Software Engineer",
          linkedin: "https://www.linkedin.com/in/reem-al-abbar-064965334/",
          email: "reem.alabbar22@gmail.com",
        },
        oumar: {
          name: "Oumar Dimnang",
          role: "Software Engineer",
          linkedin: "https://www.linkedin.com/in/oumar-dimnang-05243325b/",
          github: "https://github.com/oumarDimnang",
          email: "oumar.dimnang@gmail.com",
        },
        dana: {
          name: "Dana Yasser",
          role: "Software Engineer",
          linkedin: "https://www.linkedin.com/in/dana-alabbar-695178339/",
          email: "danaalabbar911@gmail.com",
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
      improvedAccuracy: {
        title: "دقة محسنة",
        description:
          "يقلل التحليل المدعوم بالذكاء الاصطناعي من النتائج الإيجابية الخاطئة",
      },
      realTimeAnalysis: {
        title: "تكامل سلس لواجهة برمجة التطبيقات للتحليل في الوقت الفعلي",
        description:
          "يتيح حلّنا التكامل السهل مع الأنظمة الحالية عبر واجهات برمجة التطبيقات، مما يمكّن من اكتشاف التهديدات والاستجابة لها في الوقت الفعلي دون تعطيل سير العمل.",
      },
      sansSIRF: {
        title: "استجابة ذكية للحوادث متوافقة مع إطار SANS SIRF",
        description:
          "نقوم بأتمتة استجابة الحوادث باستخدام إطار عمل الاستجابة للحوادث SANS SIRF، مما يضمن تخفيف التهديدات الأمنية بسرعة وفعالية وبطريقة استراتيجية.",
      },
      mitreAttack: {
        title: "اكتشاف متقدم للتهديدات باستخدام MITRE ATT&CK",
        description:
          "باستخدام MITRE ATT&CK، يحدد نظامنا أنماط الهجمات السابقة ويحلل التكتيكات والتقنيات والإجراءات (TTPs) للدفاع الاستباقي ضد التهديدات الناشئة.",
      },
    },
    team: {
      title: "فريقنا",
      members: {
        manaf: {
          name: "مناف ماجد",
          role: "أخصائي أمن سيبراني",
          linkedin: "https://www.linkedin.com/in/manaf-majid-722352272/",

          email: "manafmajid992@gmail.com",
        },
        reem: {
          name: "ريم ياسر",
          role: "مهندسة برمجيات",
          linkedin: "https://www.linkedin.com/in/reem-al-abbar-064965334/",
          email: "reem.alabbar22@gmail.com",
        },
        oumar: {
          name: "عمر دمنانج",
          role: "مهندس برمجيات",
          linkedin: "https://www.linkedin.com/in/oumar-dimnang-05243325b/",
          github: "https://github.com/oumarDimnang",
          email: "oumar.dimnang@gmail.com",
        },
        dana: {
          name: "دانا ياسر",
          role: "مهندسة برمجيات",
          linkedin: "https://www.linkedin.com/in/dana-alabbar-695178339/",
          email: "danaalabbar911@gmail.com",
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
        <BackgroundBeamsWithCollision className="bg-gradient-to-br from-[#1a1333] via-[#2a1758] to-[#5a1ccc] min-h-screen flex flex-col">
          {/* Navbar */}
          <header className="container mx-auto px-4 pt-8">
            <nav className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                <span className="text-xl sm:text-2xl font-bold">LINK</span>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-8">
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

              <div className="hidden md:flex items-center gap-3">
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="bg-purple-600 hover:bg-purple-700 text-white border-none"
                  >
                    {t.nav.getStarted}
                  </Button>
                </a>

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
                className="md:hidden bg-purple-900/50 backdrop-blur-sm rounded-lg p-4 mt-4"
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
                  <a href="#contact">
                    <Button
                      variant="outline"
                      className="bg-purple-600 hover:bg-purple-700 text-white border-none w-full"
                    >
                      {t.nav.getStarted}
                    </Button>
                  </a>

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
          </header>

          {/* Hero Section */}
          <div className="flex-1 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center px-4"
            >
              <TextGenerateEffect
                words={t.hero.title}
                duration={1}
                className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 pt-4 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400"
              />
              <p className="text-xl sm:text-2xl text-purple-200 mb-8 sm:mb-10 max-w-2xl mx-auto">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <a href="#contact">
                  <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto text-lg">
                    {t.hero.startTrial}
                  </Button>
                </a>

                <a href="#features">
                  <Button
                    variant="outline"
                    className="text-black hover:text-white border-purple-400 hover:bg-purple-900/50 w-full sm:w-auto text-lg"
                  >
                    {t.hero.learnMore} <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
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

        {/* Benefits Section */}
        <section id="benefits" className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16">
              {t.benefits.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {/* Card 1: Improved Accuracy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-purple-900/20 p-6 rounded-lg shadow-lg"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg w-fit">
                  <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2">
                  {t.benefits.improvedAccuracy.title}
                </h3>
                <p className="text-sm sm:text-base text-purple-200">
                  {t.benefits.improvedAccuracy.description}
                </p>
              </motion.div>

              {/* Card 2: Real-Time Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-purple-900/20 p-6 rounded-lg shadow-lg"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg w-fit">
                  <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2">
                  {t.benefits.realTimeAnalysis.title}
                </h3>
                <p className="text-sm sm:text-base text-purple-200">
                  {t.benefits.realTimeAnalysis.description}
                </p>
              </motion.div>

              {/* Card 3: SANS SIRF */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-purple-900/20 p-6 rounded-lg shadow-lg"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg w-fit">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2">
                  {t.benefits.sansSIRF.title}
                </h3>
                <p className="text-sm sm:text-base text-purple-200">
                  {t.benefits.sansSIRF.description}
                </p>
              </motion.div>

              {/* Card 4: MITRE ATT&CK */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-purple-900/20 p-6 rounded-lg shadow-lg"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg w-fit">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2">
                  {t.benefits.mitreAttack.title}
                </h3>
                <p className="text-sm sm:text-base text-purple-200">
                  {t.benefits.mitreAttack.description}
                </p>
              </motion.div>
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
                  image: `${manaf.src}`,
                  linkedin: t.team.members.manaf.linkedin,
                  email: t.team.members.manaf.email,
                },
                {
                  name: t.team.members.reem.name,
                  role: t.team.members.reem.role,
                  image: `${reem.src}`,
                  linkedin: t.team.members.reem.linkedin,
                  email: t.team.members.reem.email,
                },
                {
                  name: t.team.members.oumar.name,
                  role: t.team.members.oumar.role,
                  image: `${oumar.src}`,
                  linkedin: t.team.members.oumar.linkedin,
                  github: t.team.members.oumar.github,
                  email: t.team.members.oumar.email,
                },
                {
                  name: t.team.members.dana.name,
                  role: t.team.members.dana.role,
                  image: `${dana.src}`,
                  linkedin: t.team.members.dana.linkedin,

                  email: t.team.members.dana.email,
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
                  {/* Social Media Icons */}
                  <div className="flex justify-center gap-4 pt-4">
                    <a href={member.github} target="_blank">
                      <button className="p-2 hover:bg-purple-800 rounded-full transition-colors">
                        <IconBrandGithub className="w-5 h-5" />
                      </button>
                    </a>
                    <a href={member.linkedin} target="_blank">
                      <button className="p-2 hover:bg-purple-800 rounded-full transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </button>
                    </a>
                    <a href={`mailto:${member.email}`} target="_blank">
                      <button className="p-2 hover:bg-purple-800 rounded-full transition-colors">
                        <Mail className="w-5 h-5" />
                      </button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-12 sm:py-20 bg-purple-600">
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

        {/* Footer Section */}
        <footer className="py-10 px-10">
          <div>
            <h1 className="sm:text-lg text-sm">
              © 2025 Link. All rights reserved.
            </h1>
          </div>
        </footer>
      </main>
    </React.Fragment>
  );
}
