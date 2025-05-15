import UniHexagonSVG from "@public/svg/UniHexagonSVG";
import SectionTopSVG from "@public/svg/SectionTopSVG";
import SectionBottomSVG from "@public/svg/SectionBottomSVG";

const infoSections = [
  {
    title: "Gmail Privacy",
    content:
      "At TempGmail, we are dedicated to protecting your Gmail privacy. Your emails remain completely private—TempGmail never saves or stores any of your messages, ensuring total user confidentiality.",
    reverse: false,
    borderColor: "border-[#F8AD62] after:border-[#F8AD62]",
  },
  {
    title: "Our Commitment",
    content:
      "We are committed to safeguarding your email privacy. Each temporary Gmail we offer is built with security and simplicity in mind, ensuring you can use it with complete peace of mind.",
    reverse: true,
    borderColor: "border-[#46D38F] after:border-[#46D38F]",
  },
  {
    title: "Why Choose Us",
    content:
      "We offer authentic Gmail addresses with a professional edge, combining robust security and an easy-to-use design. Choose us for reliable, hassle-free email solutions that put your needs first.",
    reverse: false,
    borderColor: "border-[#67C8FF] after:border-[#67C8FF]",
  },
  {
    title: "Rapid Support",
    content:
      "Our dedicated team is available around the clock to assist with any questions or concerns. We're committed to providing seamless service, always prioritizing your needs and ensuring your satisfaction.",
    reverse: true,
    borderColor: "border-[#F2736E] after:border-[#F2736E]",
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
      "Temp Gmail offers free, disposable Gmail addresses—ideal for sign-ups, testing, or protecting your real inbox from spam and unwanted messages.",
    // description:
    //   "Temp Gmail is dedicated to offering a top-tier service that's available to all. Get the advantages of a temporary Gmail address at no cost—ideal for quick sign-ups, testing, or any situation where you want to keep your primary email private.",
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

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 hidden md:block">
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

      <section className="py-10 md:py-20 bg-primary relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180 hidden lg:block">
          <SectionTopSVG className="relative block w-[calc(100%+1.3px)] h-20" />
        </div>

        <div className="container space-y-8">
          <div className="max-w-5xl mx-auto space-y-5">
            {infoSections.map((section, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-stretch gap-x-6 md:gap-20">
                <div
                  className={`bg-white w-full md:w-fit text-black pb-0 md:pb-6 p-6 md:p-8 text-lg md:text-xl font-semibold relative flex items-center shrink-0 md:after:content md:after:absolute md:after:w-1/4 md:after:-top-[2px] md:after:-skew-x-[16deg] md:after:bg-white md:after:h-[calc(100%+3.5px)] ${
                    section.reverse
                      ? "md:after:-left-6 md:order-2 md:border-2 md:border-l-0 md:after:border-2 md:after:border-r-0"
                      : "md:after:-right-6 md:border-2 md:border-r-0 md:after:border-2 md:after:border-l-0"
                  } ${section.borderColor}`}
                >
                  {section.title}
                </div>

                <div
                  className={`bg-white p-6 md:p-8 relative w-full md:after:content md:after:absolute md:after:w-1/4 md:after:h-full md:after:top-0 md:after:-skew-x-[16deg] md:after:bg-white ${
                    section.reverse ? "md:after:-right-6" : "md:after:-left-6"
                  }`}
                >
                  <p className="relative z-10 text-base">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 hidden lg:block">
          <SectionBottomSVG className="relative block w-[calc(100%+1.3px)] h-20" />
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-primary-foreground">
              Why We Are Unique
            </h3>
          </div>

          <div className="space-y-10">
            {UniqueSection.map((item) => (
              <div
                key={item.number}
                className={`flex flex-col md:flex-row md:items-center transition-all duration-300 hover:scale-[1.02] ${
                  item.number === "2"
                    ? "lg:ml-[calc(6vw_+_1rem)]"
                    : item.number === "3"
                    ? "lg:ml-[calc(12vw_+_2rem)]"
                    : item.number === "4"
                    ? "lg:ml-[calc(18vw_+_3rem)]"
                    : item.number === "5"
                    ? "lg:ml-[calc(24vw_+_4rem)]"
                    : ""
                }`}
              >
                <div className="relative">
                  <UniHexagonSVG className={"hidden md:block"} />
                  <div className="bg-primary left-[19px] top-[19px] absolute w-[121px] h-[104px] flex items-center justify-center text-4xl font-semibold [clip-path:polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)]">
                    {item.number}
                  </div>
                </div>

                <div
                  className={`bg-primary max-w-xl px-16 py-6 space-y-2 -translate-x-3 [clip-path:polygon(5%_0%,_95%_0%,_100%_50%,_95%_100%,_5%_100%,_0%_50%)]`}
                >
                  <h5 className="text-lg lg:text-xl font-semibold text-black">{item.title}</h5>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
