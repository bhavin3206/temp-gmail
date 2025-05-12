import tempLogo from "@public/images/brand-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-primary text-black">
      <div className="container py-10 md:py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-5 col-span-2">
            <a href="/" className="flex items-center gap-2">
              <img src={tempLogo} className="w-full max-w-[250px]" alt="logo" />
            </a>

            <div className="space-y-4 pl-2">
              <h3 className="text-lg md:text-2xl font-bold">About Our Work</h3>

              <p className="text-sm md:text-base max-w-96">
                We began TempMailHub because we saw no one offered secure, temporary Gmails. Our
                goal was to make a user-friendly service that keeps your email safe and private. We
                wanted to provide a simple solution for everyone needing a quick, secure, and
                anonymous email option.
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

      <div className="bg-white text-center py-4 text-sm md:text-base">
        Copyright © 2024 All Rights Reserved.| Tempgmail.org | Developed By{" "}
        <a href="#" className="text-primary-foreground hover:underline">
          xyz
        </a>
      </div>
    </footer>
  );
}
