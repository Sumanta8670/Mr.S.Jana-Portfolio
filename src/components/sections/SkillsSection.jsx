import React from "react";
import * as Icons from "lucide-react";
import { skills } from "../../data/skills.js";
import FadeIn from "../animations/FadeIn.jsx";

const SkillsSection = () => {
  // Categorize skills
  const skillCategories = {
    "Frontend Development": [
      skills.find((s) => s.name === "HTML"),
      skills.find((s) => s.name === "CSS"),
      skills.find((s) => s.name === "JavaScript"),
      skills.find((s) => s.name === "React"),
      skills.find((s) => s.name === "Redux"),
      skills.find((s) => s.name === "Tailwind CSS"),
      skills.find((s) => s.name === "Material UI"),
      skills.find((s) => s.name === "Axios"),
    ].filter(Boolean),
    "Backend Development": [
      skills.find((s) => s.name === "Java"),
      skills.find((s) => s.name === "Spring"),
      skills.find((s) => s.name === "Spring Boot"),
      skills.find((s) => s.name === "Hibernate"),
      skills.find((s) => s.name === "Flyway"),
      skills.find((s) => s.name === "PostgreSQL"),
      skills.find((s) => s.name === "MySQL"),
      skills.find((s) => s.name === "MongoDB"),
    ].filter(Boolean),
    "Microservices Architecture": [
      skills.find((s) => s.name === "Kafka"),
      skills.find((s) => s.name === "Redis"),
      skills.find((s) => s.name === "Resilence.4j"),
      skills.find((s) => s.name === "Prometheus"),
      skills.find((s) => s.name === "Grafana"),
      skills.find((s) => s.name === "Netflix Eureka"),
      skills.find((s) => s.name === "AWS ELB"),
      skills.find((s) => s.name === "Docker"),
    ].filter(Boolean),
    "Version Control": [
      skills.find((s) => s.name === "Git"),
      skills.find((s) => s.name === "GitHub"),
      skills.find((s) => s.name === "Maven"),
      skills.find((s) => s.name === "Vite"),
    ].filter(Boolean),
    "API/Application Testing": [
      skills.find((s) => s.name === "Jest"),
      skills.find((s) => s.name === "Junit"),
      skills.find((s) => s.name === "Postman"),
      skills.find((s) => s.name === "Selenium"),
    ].filter(Boolean),
    "Tech Tools": [
      skills.find((s) => s.name === "Ngrok"),
      skills.find((s) => s.name === "Clerk"),
      skills.find((s) => s.name === "Chatgpt"),
      skills.find((s) => s.name === "Claude"),
    ].filter(Boolean),
  };

  // Get Proficiency Percentage
  const getProficencyLevel = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 75,
      Intermediate: 50,
      Beginner: 25,
    };
    return levels[level] || 50;
  };

  // Get level color
  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
      Beginner: "",
    };
    return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
  };
  return (
    <section
      id="SkillsSection"
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Icons.Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">
                My Expertise
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency.
            </p>
          </div>
        </FadeIn>
        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn key={categoryIndex} delay={categoryIndex * 100}>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-1 h-8 bg-linear-ro-b from-primary/30 to-primary/10 rounded-full"></div>
                    <h3 className="text-xl font-medium text-white">
                      {category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {categorySkills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon;
                      const proficiency = getProficencyLevel(skill.level);

                      return (
                        <div key={skill.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white/5 rounded-lg">
                                <IconComponent className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {skill.name}
                                </div>
                                <div className="text-xs text-white/50">
                                  {skill.experience}
                                </div>
                              </div>
                            </div>
                            <span
                              className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}
                            >
                              {skill.level}
                            </span>
                          </div>
                          <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </FadeIn>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
