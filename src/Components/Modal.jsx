import React, { useState, useEffect } from "react";
import { Sparkles, Send } from "lucide-react";

const Modal = ({ onclose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://formspree.io/f/mnpndqeb",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[#09090b]">

        {/* Dotted background */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "5px 5px",
          }}
        />

      </div>


      {/* ================= MODAL ================= */}

      <div
        className="
          relative
          w-full
          max-w-[660px]
          bg-[#0d0d0f]
          border
          border-white/80
          p-8
          sm:p-10
          md:p-12
          text-white
        "
      >

        {/* ================= HEADER ================= */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/80
            pb-7
            mb-8
          "
        >

          <span
            className="
              font-mono
              text-[9px]
              sm:text-[10px]
              tracking-[3px]
              uppercase
              text-white
            "
          >
            Drop a note
          </span>


          {/* CLICKABLE SPARKLE */}

          <button
            type="button"
            onClick={onclose}
            aria-label="Close modal"
            className="
              cursor-pointer
              flex
              items-center
              justify-center
              hover:scale-110
              transition-transform
              duration-300
            "
          >
            <Sparkles
              size={20}
              className="text-[#ff3b16]"
            />
          </button>

        </div>


        {/* ================= SUCCESS ================= */}

        {status === "success" ? (

          <div className="py-16 text-center">

            <div
              className="
                mx-auto
                mb-6
                w-14
                h-14
                rounded-full
                bg-[#ff3b16]
                flex
                items-center
                justify-center
              "
            >
              <Send
                size={22}
                className="text-white"
              />
            </div>


            <h3
              className="
                font-serif
                uppercase
                text-3xl
                sm:text-4xl
                mb-4
              "
            >
              Message Sent.
            </h3>


            <p className="text-gray-400 text-sm">
              Thanks for reaching out. I'll get back to you soon.
            </p>


            <button
              onClick={onclose}
              type="button"
              className="
                mt-8
                border
                border-white/60
                px-6
                py-3
                font-mono
                text-[10px]
                tracking-[2px]
                uppercase
                hover:bg-[#ff3b16]
                hover:border-[#ff3b16]
                transition-colors
              "
            >
              Close
            </button>

          </div>

        ) : (

          /* ================= FORM ================= */

          <form
            className="space-y-7"
            onSubmit={handleSubmit}
          >

            {/* ================= NAME ================= */}

            <div>

              <label
                className="
                  block
                  mb-3
                  font-mono
                  text-[9px]
                  tracking-[2px]
                  uppercase
                  text-white
                "
              >
                Your Name
              </label>


              <input
                type="text"
                name="name"
                placeholder="Tejas Srivastava"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                  w-full
                  h-[52px]
                  px-4
                  bg-transparent
                  border
                  border-white/80
                  outline-none
                  text-white
                  placeholder:text-gray-500
                  focus:border-[#ff3b16]
                  transition-colors
                  duration-300
                "
              />

            </div>


            {/* ================= EMAIL ================= */}

            <div>

              <label
                className="
                  block
                  mb-3
                  font-mono
                  text-[9px]
                  tracking-[2px]
                  uppercase
                  text-white
                "
              >
                Email
              </label>


              <input
                type="email"
                name="email"
                placeholder="tejas@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  w-full
                  h-[52px]
                  px-4
                  bg-transparent
                  border
                  border-white/80
                  outline-none
                  text-white
                  placeholder:text-gray-500
                  focus:border-[#ff3b16]
                  transition-colors
                  duration-300
                "
              />

            </div>


            {/* ================= MESSAGE ================= */}

            <div>

              <label
                className="
                  block
                  mb-3
                  font-mono
                  text-[9px]
                  tracking-[2px]
                  uppercase
                  text-white
                "
              >
                Message
              </label>


              <textarea
                name="message"
                placeholder="I have a good brief..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="
                  w-full
                  px-4
                  py-4
                  bg-transparent
                  border
                  border-white/80
                  outline-none
                  resize-none
                  text-white
                  placeholder:text-gray-500
                  focus:border-[#ff3b16]
                  transition-colors
                  duration-300
                "
              />

            </div>


            {/* ================= ERROR ================= */}

            {status === "error" && (

              <p
                className="
                  text-[#ff3b16]
                  font-mono
                  text-[10px]
                  tracking-[1px]
                  text-center
                  uppercase
                "
              >
                Something went wrong. Please try again.
              </p>

            )}


            {/* ================= SEND BUTTON ================= */}

            <button
              type="submit"
              disabled={status === "sending"}
              className="
                w-full
                h-[53px]
                bg-[#ff3b16]
                text-white
                flex
                items-center
                justify-center
                gap-3
                font-mono
                text-[10px]
                tracking-[3px]
                uppercase
                hover:bg-[#ff4d2e]
                transition-colors
                duration-300
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >

              <Send size={16} />

              {status === "sending"
                ? "Sending..."
                : "Send Message"}

            </button>

          </form>
        )}

      </div>

    </div>
  );
};

export default Modal;