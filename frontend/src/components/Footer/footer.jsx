import tempLogo from "@public/images/brand-logo.svg";
import FooterTopShapSVG from "@public/svg/FooterTopShapSVG";
import FooterBottomShapSVG from "@public/svg/FooterBottomShapSVG";

export default function Footer() {
  return (
    <footer className="text-black">
      <div className="bg-primary relative py-[100px]">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
          <FooterTopShapSVG className="relative block w-[calc(300%+1.3px)] h-[100px] fill-white" />
        </div>

        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo & Tagline */}
            <div className="space-y-5 col-span-2">
              <a href="/" className="flex items-center gap-2">
                <img src={tempLogo} className="w-full max-w-[250px]" alt="logo" />
              </a>

              <div className="space-y-4 pl-2">
                <h3 className="text-lg md:text-2xl font-bold">About Our Work</h3>

                <p className="text-sm md:text-base max-w-96">
                  TempGmail was created to fill a gap—no one offered truly secure, temporary Gmail
                  addresses. Our mission is to deliver a simple, user-friendly service that protects
                  your privacy and keeps your email safe. We set out to provide an easy, reliable
                  solution for anyone in need of a quick, secure, and anonymous email option.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h3 className="text-lg md:text-2xl font-bold">Quick Links</h3>

              <ul className="space-y-2 font-normal list-disc pl-5">
                <li className="transition-transform duration-300 hover:-translate-y-0.5">
                  <a href="/">Home</a>
                </li>

                <li className="transition-transform duration-300 hover:-translate-y-0.5">
                  <a href="about-us">About Us</a>
                </li>

                <li className="transition-transform duration-300 hover:-translate-y-0.5">
                  <a href="contact">Contact</a>
                </li>

                <li className="transition-transform duration-300 hover:-translate-y-0.5">
                  <a href="disclaimer">Disclaimer</a>
                </li>

                <li className="transition-transform duration-300 hover:-translate-y-0.5">
                  <a href="privacy-policy">Privacy Policy</a>
                </li>

                <li className="transition-transform duration-300 hover:-translate-y-0.5">
                  <a href="term-and-contition">Term and contition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
          <FooterBottomShapSVG className="relative block w-[calc(300%+1.3px)] h-[100px] fill-white" />
        </div>
      </div>

      <div className="bg-white -translate-y-6">
        <div className="container">
          <div className="text-center text-sm md:text-base ">
            Copyright © 2025 All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
