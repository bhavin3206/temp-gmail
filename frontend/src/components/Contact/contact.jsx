import UserIconSVG from "@public/svg/UserIconSVG";
import EmailIconSVG from "@public/svg/EmailIconSVG";
import PluseRoundIconSVG from "@public/svg/PluseRoundIconSVG";

export default function Contact() {
  return (
    <>
      <section className="relative bg-primary py-10 md:py-20">
        <div className="container">
          <div className="text-sm text-primary-foreground font-medium uppercase mb-2 tracking-wide">
            Contact Us
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-black relative inline-block">
            TempGmail
            <span className="block h-1 w-24 bg-primary-foreground mt-3 rounded-full"></span>
          </h2>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto w-full bg-white rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-12">
            {/* Left Side: Contact Info */}
            <div className="space-y-6">
              <h3 className="text-4xl font-extrabold text-black">Let's Connect</h3>

              <p className="text-sm md:text-base xl:text-lg leading-relaxed">
                We're excited to hear from you! Share your thoughts or just say hi.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-black">Address</h4>
                  <p>198 West 21th Street, Suite 721, Sri Lanka</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-black">Email</h4>
                  <a href="mailto:nihapmrm@gmail.com">nihapmrm@gmail.com</a>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-black">Website</h4>
                  <a href="/">tempgmail.com</a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="space-y-6" data-aos="fade-left">
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium text-black">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-all"
                      placeholder="John Doe"
                    />

                    <UserIconSVG
                      iconWidth={20}
                      iconHeight={20}
                      className={`absolute left-3 top-3.5`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-all"
                      placeholder="you@example.com"
                    />

                    <EmailIconSVG
                      iconWidth={20}
                      iconHeight={20}
                      className={`absolute left-3 top-3.5`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-all"
                      placeholder="What's on your mind?"
                    />

                    <PluseRoundIconSVG
                      iconWidth={20}
                      iconHeight={20}
                      className={`absolute left-3 top-3.5`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Message</label>
                  <textarea
                    rows="4"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-all"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>
                <div>
                  <button className="w-full bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-transform transform hover:-translate-y-1 duration-300 cursor-pointer">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
