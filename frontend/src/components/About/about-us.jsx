import SectionBottomSVG from "@public/svg/SectionBottomSVG";

const InfoData = [
  {
    title: "Gmail Privacy",
    description:
      "At TempGmail, we are dedicated to protecting your Gmail privacy. Your emails remain completely private—TempGmail never saves or stores any of your messages, ensuring total user confidentiality.",
  },
  {
    title: "Our Commitment",
    description:
      "We are committed to safeguarding your email privacy. Each temporary Gmail we offer is built with security and simplicity in mind, ensuring you can use it with complete peace of mind.",
  },
  {
    title: "Why Choose Us",
    description:
      "We offer authentic Gmail addresses with a professional edge, combining robust security and an easy-to-use design. Choose us for reliable, hassle-free email solutions that put your needs first.",
  },
  {
    title: "Rapid Support",
    description:
      "Our dedicated team is available around the clock to assist with any questions or concerns. We’re committed to providing seamless service, always prioritizing your needs and ensuring your satisfaction.",
  },
];

const UniqueSection = [
  {
    number: "1",
    title: "Increased Privacy",
    description:
      "Temp Gmail ensures your identity and personal details stay anonymous, providing an extra layer of privacy for your online activities—especially important in an age where data breaches are all too common.",
  },
  {
    number: "2",
    title: "Exclusive Gmail Access",
    description:
      "Unlike other providers, Temp Gmail specializes in offering temporary Gmail addresses, giving you the reliability and familiarity of Google's service while keeping your primary account secure and separate.",
  },
  {
    number: "3",
    title: "Top-Notch Security",
    description:
      "We prioritize your security, ensuring that each temporary email address is fully protected against potential threats, keeping spam and malicious emails away from your primary inbox.",
  },
  {
    number: "4",
    title: "Easy-to-Use Interface",
    description:
      "We value simplicity. Our service is designed for ease of use, making it effortless to create and manage a temporary Gmail address with just a few clicks.",
  },
  {
    number: "5",
    title: "Free and Accessible",
    description:
      "Temp Gmail is dedicated to offering a top-tier service that's available to all. Get the advantages of a temporary Gmail address at no cost—ideal for quick sign-ups, testing, or any situation where you want to keep your primary email private.",
  },
];

export default function AboutUs() {
  return (
    <>
      <section className="relative bg-primary py-10 md:py-20">
        <div className="container text-center">
          <div className="text-sm text-primary-foreground font-medium uppercase mb-2 tracking-wide">
            About Us
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-black relative inline-block">
            TempGmail
            {/* <span className="block h-1 w-24 bg-primary-foreground mt-3 rounded-full"></span> */}
          </h2>
        </div>

        <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-0 hidden md:block">
          <SectionBottomSVG className="relative block w-[calc(100%+1.3px)] h-14" />
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container">
          <div className="text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-primary-foreground">
              Welcome to TempGmail
            </h3>

            <p>
              While many temporary email providers exist, we stand out by offering exclusive, secure
              Gmail solutions with unparalleled privacy. Our goal is to offer a safe, reliable, and
              easy way to protect your primary email from spam and ensure your online privacy. At
              TempGmail, we're not just a service—we're your trusted partner, helping you navigate
              the digital world with confidence and peace of mind. Join us in creating a cleaner,
              more secure inbox.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-primary">
        <div className="container">
          <div className="space-y-4">
            {InfoData.map((info, index) => (
              <div
                key={index}
                className="bg-white max-w-4xl px-10 py-5 space-y-2 mx-auto clip-hexagon"
              >
                <h5 className="text-lg lg:text-xl font-semibold text-black ">{info.title}</h5>
                <p>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-primary-foreground">
              Why We Are Unique
            </h3>
          </div>

          <div className="space-y-2">
            {UniqueSection.map((key, index) => (
              <article
                key={index}
                className={`flex flex-col md:items-center gap-6 mx-auto max-w-5xl ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } p-6 rounded-lg transition-all duration-300 hover:shadow-lg`}
              >
                <div className="shrink-0">
                  <div
                    className="bg-[#38AFE6] p-4 text-black font-semibold text-xl flex justify-center items-center size-20"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  >
                    {key.number}
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-lg lg:text-xl font-semibold text-black ">{key.title}</h5>

                  <p>{key.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
