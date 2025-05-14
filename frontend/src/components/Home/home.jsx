import { useState } from "react";

import GetMail from "./get-mail";
import RefreshMail from "./refresh-mail";

const Home = () => {
  const [emailData, setEmailData] = useState({ email: "" });

  return (
    <section className="index__content space-y-5">
      <div className="temp-mail-generator js-email-block py-10 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 grid-rows-1 xl:grid-cols-3 gap-8">
            <div className="order-2 xl:order-1 xl:col-span-2">
              <RefreshMail emailData={emailData} setEmailData={setEmailData} />
            </div>

            <div className="order-1 xl:order-2 xl:col-span-1">
              <GetMail emailData={emailData} setEmailData={setEmailData} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary py-10 md:py-20" id="whatistempmail">
        <div className="container">
          <div className="section-title mb-20">
            <h4 className="text-black text-2xl xsm:text-3xl md:text-4xl font-bold text-center">
              WHAT IS TEMPGMAIL?
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-24 sm:gap-y-32 sm:gap-x-10 md:gap-x-0 sm:py-5 md:py-[75px]">
            <div className="flex items-center justify-center p-4">
              <div className="relative transform rotate-45 border-4 border-[#38AFE6] rounded-4xl shrink-0 min-w-[235px] min-h-[235px] lg:min-w-72 lg:min-h-72 2xl:min-w-80 2xl:min-h-80">
                <div className="absolute top-0 left-0 -translate-5 2xl:-translate-7 rotate-90 z-10">
                  <div className="relative bg-[#2eb6f5] shadow-md flex items-center justify-center rounded-lg lg:rounded-xl 2xl:rounded-3xl size-16 lg:size-20 2xl:size-28">
                    <img
                      src="/images/mail.svg"
                      alt="mail-icon"
                      className="-rotate-[126deg] size-10 lg:size-12 2xl:size-16"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 -translate-2 flex items-center justify-center bg-white p-4 text-center text-gray-600 rounded-4xl shadow-md">
                  <p className="text-[10px] lg:text-xs 2xl:text-[13px] leading-relaxed break-words transform -rotate-45">
                    We started TempGmail after realizing there were no secure options for temporary
                    Gmail addresses. Our mission was to create an easy-to-use service that
                    prioritizes email security and privacy. We set out to offer a straightforward
                    solution for anyone in need of a fast, secure, and anonymous email alternative.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center p-4">
              <div className="relative transform rotate-45 border-4 border-[#F13834] rounded-4xl shrink-0 min-w-[235px] min-h-[235px] lg:min-w-72 lg:min-h-72 2xl:min-w-80 2xl:min-h-80">
                <div className="absolute top-0 left-0 -translate-5 2xl:-translate-7 rotate-90 z-10">
                  <div className="relative bg-[#F13834] shadow-md flex items-center justify-center rounded-lg lg:rounded-xl 2xl:rounded-3xl size-16 lg:size-20 2xl:size-28">
                    <img
                      src="/images/open-mail.svg"
                      className="rotate-[222deg] size-10 lg:size-12 2xl:size-16"
                      alt="gmail-icon"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 -translate-2 flex items-center justify-center bg-white p-4 text-center text-gray-600 rounded-4xl shadow-md">
                  <p className="text-[10px] lg:text-xs 2xl:text-[13px] leading-relaxed break-words transform -rotate-45">
                    Get a free primary Gmail inbox with enhanced spam protection and complete
                    anonymity. Our temporary Gmail addresses are instantly generated, easy to use,
                    and ideal for one-time signups or any situation where a disposable email is
                    needed. Keep your personal information private and your main inbox clean.
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2 xl:col-span-1 flex items-center justify-center p-4">
              <div className="relative transform rotate-45 border-4 border-[#F8B43C] rounded-4xl shrink-0 min-w-[235px] min-h-[235px] lg:min-w-72 lg:min-h-72 2xl:min-w-80 2xl:min-h-80">
                <div className="absolute top-0 left-0 -translate-5 2xl:-translate-7 rotate-90 z-10">
                  <div className="relative bg-[#F8B43C] shadow-md flex items-center justify-center rounded-lg lg:rounded-xl 2xl:rounded-3xl size-16 lg:size-20 2xl:size-28">
                    <img
                      src="/images/browser.svg"
                      className="rotate-[225deg] size-10 lg:size-12 2xl:size-16"
                      alt="browser-icon"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 -translate-2 flex items-center justify-center bg-white p-4 text-center text-gray-600 rounded-4xl shadow-md">
                  <p className="text-[10px] lg:text-xs 2xl:text-[13px] leading-relaxed break-words transform -rotate-45">
                    We temporarily hold your emails for just 15 minutes and never store your
                    personal information. Your privacy and security are our top priorities. Keep
                    your primary inbox clutter-free and enjoy worry-free online activity. Count on
                    us for temporary Gmail solutions designed with your privacy in mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-use-temp-mail py-10 md:py-20" id="whyusetempmail">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            <div className="col">
              <img src="/images/mail-hub.png" className="mx-auto" alt="mail-hub-responsive" />
            </div>

            <div className="col">
              <div className="section-title mb-10">
                <h4 className="text-black text-2xl xsm:text-3xl md:text-4xl font-bold text-center">
                  WHY USE TEMPGMAIL?
                </h4>
              </div>

              <ul className="space-y-4 list-disc">
                <li>
                  <strong>Stronger Privacy:</strong> Your identity and personal information stay
                  protected, ensuring complete online anonymity.
                </li>
                <li>
                  <strong>Exclusive Gmail Access:</strong> Get unique, temporary Gmail addresses
                  backed by Google's trusted reliability and familiar interface.
                </li>
                <li>
                  <strong>Advanced Security:</strong> Your safety comes first with strong defenses
                  against spam, phishing, and other online threats.
                </li>
                <li>
                  <strong>Intuitive Interface:</strong> Enjoy a clean, easy-to-use platform that
                  makes generating temporary emails quick and effortless.
                </li>
                <li>
                  <strong>Free & Convenient:</strong> Access premium features at no cost—perfect for
                  secure, short-term email use.
                </li>
                <li>
                  <strong>Instant Email Handling:</strong> Receive emails immediately and have them
                  auto-deleted for maximum convenience and privacy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
