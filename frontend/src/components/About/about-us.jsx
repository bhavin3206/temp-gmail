const InfoData = [
  {
    title: "Gmail Privacy",
    description:
      "In our commitment to Gmail privacy, we ensure your emails remain yours alone; Temp Mail Hub never saved or stored any messages, upholding absolute user privacy.",
  },
  {
    title: "Our Responsibility",
    description:
      "We're dedicated to keeping your email safe and private. Every temporary Gmail we provide is designed to be secure and easy to use, ensuring your peace of mind.",
  },
  {
    title: "Why Choose Us",
    description:
      "We provide genuine Gmails for a professional touch, blending top-notch security with user-friendly design. Choose us for authentic, hassle-free email solutions that prioritize your needs.",
  },
  {
    title: "Rapid Suppor",
    description:
      "Our dedicated team is available 24/7, ready to assist with any inquiries or issues. We're here to ensure a smooth, uninterrupted service, always prioritizing your needs and satisfaction.",
  },
];

const UniqueSection = [
  {
    number: "1",
    title: "Enhanced Privacy: ",
    description:
      "With Temp Gmail, your identity and personal information remain anonymous, offering an added layer of privacy in your online interactions, essential in an era where data breaches are common.",
  },
  {
    number: "2",
    title: "Exclusive Gmail Access: ",
    description:
      "While many providers offer temporary email services, Temp Gmail specializes in offering unique access to temporary Gmail addresses, providing the reliability and familiarity of Google's service without compromising your main account.",
  },
  {
    number: "3",
    title: "Superior Security: ",
    description:
      "Our platform prioritizes your security, ensuring that every temporary email address you use is secure and protected from potential threats, keeping unwanted spam and malicious emails away from your real inbox.",
  },
  {
    number: "4",
    title: "User-Friendly Interface: ",
    description:
      "We understand the importance of simplicity. Our service is designed to be intuitive and easy to navigate, allowing you to generate and use a temporary Gmail address with just a few clicks.",
  },
  {
    number: "5",
    title: "Free and Accessible: ",
    description:
      "Temp Gmail is committed to providing a high-quality service that is accessible to everyone. Enjoy the benefits of a temporary Gmail address at no cost, perfect for quick sign-ups, testing, or any situation where your primary email should remain private.",
  },
];

export default function AboutUs() {
  return (
    <>
      <section className="relative bg-primary py-10 md:py-20">
        <div className="container">
          <div className="text-sm text-primary-foreground font-medium uppercase mb-2 tracking-wide">
            About Us
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-black relative inline-block">
            TempGmail
            <span className="block h-1 w-24 bg-primary-foreground mt-3 rounded-full"></span>
          </h2>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container">
          <div className="text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-primary-foreground">
              Welcome to Tempgmail
            </h3>

            <p>
              Where we stand out in the world of temporary email services. Many temp mail providers
              exist, but we are unique because we deliver exclusive, secure Gmail solutions with
              unmatched privacy. Our commitment is to provide you with a safe, reliable, and
              convenient way to protect your primary email from spam and maintain your privacy
              online. At TempMailHub, we're more than just a service; we're your ally in navigating
              the digital world with confidence and ease. Join us on a journey towards a cleaner,
              safer inbox.
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
