import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import LoadingSVG from "@public/svg/LoadingSVG";
import UserIconSVG from "@public/svg/UserIconSVG";
import EmailIconSVG from "@public/svg/EmailIconSVG";
import SectionBottomSVG from "@public/svg/SectionBottomSVG";
import PluseRoundIconSVG from "@public/svg/PluseRoundIconSVG";

import { contactFormValidation } from "@/_schema/validation";

export default function Contact() {
  const [isLoading, setIsLoading] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_CLIENT_URL}/contact_email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("result", result);

      if (result.message === "Message sent successfully") {
        reset();
        toast.success(result.message);
      } else {
        toast.error(result.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error(result.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="relative bg-primary py-10 md:py-20">
        <div className="container text-center">
          <div className="text-sm text-primary-foreground font-medium uppercase mb-2 tracking-wide">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black relative inline-block">
            TempGmail
            {/* <span className="block h-1 w-24 bg-primary-foreground mt-3 rounded-full"></span> */}
          </h2>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 hidden md:block">
          <SectionBottomSVG className="relative block w-[calc(100%+1.3px)] h-14" />
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto w-full bg-white rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-4xl font-extrabold text-black">Let's Connect</h3>
              <p className="text-sm md:text-base xl:text-lg leading-relaxed">
                We're excited to hear from you! Share your thoughts or just say hi.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-black">Email</h4>
                  <a href="mailto:contact@tempgmail.net">contact@tempgmail.net</a>
                </div>

                <div>
                  <img src="/images/contact-us.png" alt="contact-us" />
                </div>
              </div>
            </div>

            <div className="space-y-6" data-aos="fade-left">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-1">
                  <label className="block font-medium text-black">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      {...register("name", contactFormValidation.name)}
                      className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-all"
                      placeholder="Name"
                    />
                    <UserIconSVG
                      iconWidth={20}
                      iconHeight={20}
                      className="absolute left-3 top-3.5"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="block font-medium text-gray-700">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      {...register("email", contactFormValidation.email)}
                      className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-all"
                      placeholder="Email"
                    />
                    <EmailIconSVG
                      iconWidth={20}
                      iconHeight={20}
                      className="absolute left-3 top-3.5"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="block font-medium text-gray-700">Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      {...register("subject", contactFormValidation.subject)}
                      className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-all"
                      placeholder="What's on your mind?"
                    />
                    <PluseRoundIconSVG
                      iconWidth={20}
                      iconHeight={20}
                      className="absolute left-3 top-3.5"
                    />
                  </div>
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block font-medium text-gray-700">Message</label>
                  <textarea
                    rows="4"
                    {...register("message", contactFormValidation.message)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-all"
                    placeholder="Tell us more..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-transform transform hover:-translate-y-1 duration-300 cursor-pointer"
                >
                  {isLoading ? (
                    <LoadingSVG message="Sending Message..." />
                  ) : (
                    <span className="text-base font-semibold">Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
