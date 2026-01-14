import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer border-t border-footer-border sm:mt-30 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          {/* Left section - Name and title */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-wide text-footer-foreground mb-2">
              TEJAS SRIVASTAVA
            </h2>
            <p className="text-footer-muted font-medium">
              MERN Stack Developer & UI/UX Enthusiast
            </p>
          </div>

          {/* Right section - Social links */}
          <div className="flex items-center justify-center  md:justify-end gap-4">
            <a
              href="https://github.com/Tejas24003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-footer-border hover:text-[#945DD6] group"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-footer-muted group-hover:text-footer-icon-hover transition-colors duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/tejas-srivastava-761a15215/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-footer-border hover:text-[#0A66C2] group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-footer-muted group-hover:text-footer-icon-hover transition-colors duration-200" />
            </a>
           
          </div>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;