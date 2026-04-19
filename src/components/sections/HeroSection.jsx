import React from "react";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground.jsx";
import FadeIn from "../animations/FadeIn.jsx";
import { ChevronDown, Star } from "lucide-react";
import { PERSONAL_INFO, STATS } from "../../utils/constants.js";
import { scrollToSection } from "../../hooks/useScrollSpy.js";
import {
  SiApachekafka,
  SiApachemaven,
  SiAwselasticloadbalancing,
  SiAxios,
  SiClerk,
  SiDocker,
  SiFlyway,
  SiGit,
  SiGithub,
  SiHibernate,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiJunit5,
  SiMaterialdesign,
  SiMocha,
  SiMongodb,
  SiMysql,
  SiNetflix,
  SiNgrok,
  SiPostgresql,
  SiPrometheus,
  SiReact,
  SiRedis,
  SiRedux,
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground variant="HeroSection" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2.75 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full ">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight ">
                Java Full Stack Developer
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-137.5 mb-8 ">
                Building efficient and scalable web applications with Java,
                Spring Boot, React, and more. Explore my projects and experience
                in full stack development.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-6.5 py-3.25 text-base font-medium border border-white ">
                  Get in Touch
                </div>
              </button>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left border-r border-white/50 pr-10 last:border-r-0"
                  >
                    <div className="text-2xl font-normal text-primary mb-2 font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white leading-snug ">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          {/* Right Column - Developer Image */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-125 ml-auto group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>

                {/* Placeholder for Developer Image */}
                <div className="relative rounded-2xl overflow-hidden m-px h-[calc(100%-2px)]">
                  <img
                    src="/Developer-Portrait.png"
                    alt="Powered by faith, driven by code."
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Technology Logos */}
                <div className="absolute bottom-6 left-3.5 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <FaJava className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiSpring className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiSpringboot className="w-full h-full text-primary" />
                      </div>
                      {/* <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiHibernate className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiFlyway className="w-full h-full text-primary" />
                      </div> */}
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiJavascript className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiReact className="w-full h-full text-primary" />
                      </div>
                      {/* <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiRedux className="w-full h-full text-primary" />
                      </div> */}
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiTailwindcss className="w-full h-full text-primary" />
                      </div>
                      {/* <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiMaterialdesign className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiAxios className="w-full h-full text-primary" />
                      </div> */}
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiPostgresql className="w-full h-full text-primary" />
                      </div>
                      {/* <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiMysql className="w-full h-full text-primary" />
                      </div> */}
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiMongodb className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiApachekafka className="w-full h-full text-primary" />
                      </div>
                      {/* <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiRedis className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiPrometheus className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiNetflix className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiAwselasticloadbalancing className="w-full h-full text-primary" />
                      </div> */}
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiGit className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiGithub className="w-full h-full text-primary" />
                      </div>
                      {/* <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiApachemaven className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiJest className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiJunit5 className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiJsonwebtokens className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiMocha className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiNgrok className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiClerk className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiDocker className="w-full h-full text-primary" />
                      </div> */}
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("AboutSection")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;
