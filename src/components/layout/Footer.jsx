import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import React from "react";
import FadeIn from "../animations/FadeIn.jsx";
import {
  PERSONAL_INFO,
  SOCIAL_LINKS,
  NAV_LINKS,
} from "../../utils/constants.js";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ── Brand Section ── */}
          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-sm text-white/60 leading-relaxed mb-5">
                {PERSONAL_INFO.tagline}
              </p>

              {/* Contact */}
              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition"
                >
                  <Mail size={16} />
                  {PERSONAL_INFO.email}
                </a>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin size={16} />
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Navigation ── */}
          <FadeIn delay={100}>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-sm text-white/60 hover:text-primary transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* ── Social / Profiles ── */}
          <FadeIn delay={200}>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  className="flex items-center justify-between text-sm text-white/70 hover:text-primary transition"
                >
                  <span className="flex items-center gap-2">
                    <Github size={16} /> GitHub
                  </span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  className="flex items-center justify-between text-sm text-white/70 hover:text-primary transition"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin size={16} /> LinkedIn
                  </span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Bottom Bar ── */}
        <FadeIn delay={300}>
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
              reserved.
            </p>
            <p className="text-sm text-white/50">
              Built using React, Tailwind CSS, and modern web technologies.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
