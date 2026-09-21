import {
  Github,
  Linkedin,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative  border-t border-white/10 mt-30 px-6 sm:px-10 lg:px-[8%] pt-20 pb-8 overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "5px 5px",
          }}
        />
      </div>

      <div className="relative max-w-[1500px] mx-auto">

        {/* ================= MAIN CONTACT AREA ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pb-24">

          {/* ================= LEFT ================= */}

          <div className="flex flex-col justify-start">

            

              

              <span className="text-[#ff3b16] font-mono text-xs tracking-[3px] mb-2 uppercase">
                Say Hello
              </span>

            


            {/* Main heading */}

            <h2 className="font-serif font-normal uppercase leading-[0.82] tracking-[-5px] text-[clamp(4rem,8vw,8.5rem)]">

              <span className="block">
                LET'S MAKE
              </span>

              <span className="block text-[#ff3b16]">
                A MARK.
              </span>

            </h2>


            {/* Description */}

            <p className="mt-12 max-w-[520px] text-gray-400 text-base sm:text-lg leading-relaxed">
              Have a project, a question, or just want to say hello?
              I'd love to hear from you. Let's build something meaningful
              together.
            </p>


            {/* Email */}

            <a
              href="mailto:tejas.srivastava@example.com"
              className="group flex items-center gap-3 mt-10 w-fit text-[#ff3b16] font-mono text-xs sm:text-sm tracking-[2px] uppercase"
            >

              <Mail
                size={20}
                strokeWidth={1.5}
                className="group-hover:scale-110 transition-transform"
              />

              <span className="border-b border-[#ff3b16]/40 pb-1 group-hover:border-[#ff3b16] transition-colors">
                tejassrivast@gmail.com
              </span>

            </a>

          </div>


          {/* ================= RIGHT — CONTACT FORM ================= */}

          <div className="border p-8 sm:p-10 lg:p-12">

            {/* Form heading */}

            <div className="flex items-center justify-between border-b pb-6 mb-8">

              <span className="font-mono text-xs tracking-[3px] uppercase ">
                Drop a note
              </span>

              <Sparkles
                size={20}
                className="text-[#ff3b16]"
              />

            </div>


            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-7"
            >

              {/* Name */}

              <div>

                <label className="block mb-3 font-mono text-[10px] tracking-[2px] uppercase ">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Tejas Srivastava"
                  className="w-full h-14 px-4 bg-transparent border  outline-none  focus:border-[#ff3b16] transition-colors"
                />

              </div>


              {/* Email */}

              <div>

                <label className="block mb-3 font-mono text-[10px] tracking-[2px] uppercase ">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="tejas@example.com"
                  className="w-full h-14 px-4 bg-transparent border  outline-none  focus:border-[#ff3b16] transition-colors"
                />

              </div>


              {/* Message */}

              <div>

                <label className="block mb-3 font-mono text-[10px] tracking-[2px] uppercase ">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="I have a good brief..."
                  className="w-full px-4 py-4 bg-transparent border  outline-none resize-none  focus:border-[#ff3b16] transition-colors"
                />

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="w-full h-14 bg-[#ff3b16]  flex items-center justify-center gap-3 font-mono text-xs tracking-[2px] uppercase hover:bg-[#ff4d2e] transition-colors"
              >

                <Send size={17} />

                Send Message

              </button>

            </form>

          </div>

        </div>


        {/* ================= BOTTOM FOOTER ================= */}

        <div className="border-t  pt-7">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Copyright */}

            <p className="font-mono text-[10px] tracking-[2px] uppercase ">
              © 2026 Tejas Srivastava
            </p>


            {/* Center */}

            <p className="font-mono text-[10px] tracking-[2px] uppercase ">
               Built with Care - Yo
            </p>


            {/* Social + initials */}

            <div className="flex items-center gap-5">

              <a
                href="https://github.com/Tejas24003"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className=" hover:text-[#ff3b16] transition-colors"
              >
                <Github size={17} strokeWidth={1.5} />
              </a>


              <a
                href="https://www.linkedin.com/in/tejas-srivastava-761a15215/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className=" hover:text-[#ff3b16] transition-colors"
              >
                <Linkedin size={17} strokeWidth={1.5} />
              </a>


             

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;