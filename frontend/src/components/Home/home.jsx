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
            <h4 className="text-black text-2xl xs:text-3xl md:text-4xl font-bold text-center">
              WHAT IS TEMPMAILHUB?
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* card 1 */}
            <div className="bg-[#38AFE6] rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2.5 p-6 border-t-4 border-indigo-600 space-y-5">
              <img src="/images/mail.svg" className="mx-auto size-20" alt="mail-info-icon" />
              <p className="text-white">
                We began TempMailHub because we saw no one offered secure, temporary Gmails. Our
                goal was to make a user-friendly service that keeps your email safe and private. We
                wanted to provide a simple solution for everyone needing a quick, secure, and
                anonymous email option.
              </p>
            </div>

            {/* card 2 */}
            <div className="bg-[#F13834] rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2.5 p-6 border-t-4 border-purple-600 space-y-5">
              <img src="/images/open-mail.svg" className="mx-auto size-20" alt="mail-icon" />
              <p className="text-white">
                We began TempMailHub because we saw no one offered secure, temporary Gmails. Our
                goal was to make a user-friendly service that keeps your email safe and private. We
                wanted to provide a simple solution for everyone needing a quick, secure, and
                anonymous email option.
              </p>
            </div>

            {/* card 3 */}
            <div className="bg-[#F8B43C] rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2.5 p-6 border-t-4 border-pink-600 space-y-5">
              <img src="/images/browser.svg" className="mx-auto size-20" alt="browser-icon" />
              <p className="text-white">
                We began TempMailHub because we saw no one offered secure, temporary Gmails. Our
                goal was to make a user-friendly service that keeps your email safe and private. We
                wanted to provide a simple solution for everyone needing a quick, secure, and
                anonymous email option.
              </p>
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
                <h4 className="text-black text-2xl xs:text-3xl md:text-4xl font-bold text-center">
                  WHY USE TEMPMAILHUB?
                </h4>
              </div>

              <ul className="space-y-4 list-disc">
                <li>
                  <strong>Enhanced Privacy:</strong> Anonymity ensured, protecting your identity and
                  personal details online.
                </li>
                <li>
                  <strong>Exclusive Gmail Access:</strong> Unique temporary Gmail addresses,
                  offering Google's reliability and familiarity.
                </li>
                <li>
                  <strong>Superior Security:</strong> Prioritizing your safety with robust
                  protection from threats and spam.
                </li>
                <li>
                  <strong>User-Friendly Interface:</strong> Easy, intuitive navigation for quick,
                  hassle-free temporary email creation.
                </li>
                <li>
                  <strong>Free and Accessible:</strong> High-quality, cost-free service, perfect for
                  secure, temporary email needs.
                </li>
                <li>
                  <strong>Instant Delivery & Deletion:</strong> Immediate access to emails and swift
                  disposal for utmost convenience.
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
