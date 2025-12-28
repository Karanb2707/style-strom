import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const socialLinks = [
  { href: "mailto:youremail@example.com", icon: Mail, label: "Email" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-gray-300">
      {/* Decorative top border with animated gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 animate-pulse"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Brand Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-3">
              StyleStrom
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed tracking-wider mt-4">
              “Transforming ideas into high-impact software with clarity,
              passion, and expertise.”
            </p>
          </div>

          {/* Social Links with enhanced styling */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                <link.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Decorative Divider */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
            <p className="text-gray-400 flex items-center gap-2">
              © {new Date().getFullYear()} StyleStrom - Karan Bolake — All
              rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-gray-500 hover:text-blue-400 transition-colors duration-300 hover:underline underline-offset-4"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-500 hover:text-blue-400 transition-colors duration-300 hover:underline underline-offset-4"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
