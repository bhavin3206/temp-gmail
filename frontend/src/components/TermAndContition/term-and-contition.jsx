import SectionBottomSVG from "@public/svg/SectionBottomSVG";

export default function TermAndContition() {
  return (
    <>
      <section className="relative bg-primary py-10 md:py-20">
        <div className="container text-center">
          <div className="text-sm text-primary-foreground font-medium uppercase mb-2 tracking-wide">
            Term and Contition For
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
          <div className="w-full bg-white/95 rounded-2xl shadow-xl p-6 sm:p-10 space-y-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-primary-foreground">
              Term and Contition For TempGmail
            </h3>

            <div className="space-y-4">
              <p className="leading-relaxed text-base sm:text-lg">
                Welcome to TempGmail! These terms and conditions outline the rules and regulations
                for the use of TempGmail's website and services, located at TempGmail.com. By
                accessing this website and using our services, we assume you accept these terms and
                conditions. Do not continue to use TemTempGmailpMailHub if you do not agree to all
                of the terms and conditions stated on this page.
              </p>

              <p className="leading-relaxed text-base sm:text-lg">
                <b>
                  The following terminology applies to these Terms and Conditions, Privacy
                  Statement, and Disclaimer Notice and all agreements: "Client," "You," and "Your"
                  refer to you, the person logging into this website and compliant to the Company's
                  terms and conditions. "The Company," "Ourselves," "We," "Our," and "Us," refer to
                  our Company. "Party," "Parties," or "Us," refers to both the Client and ourselves.
                </b>
              </p>

              <p className="leading-relaxed text-base sm:text-lg">
                Please be also aware that when you leave our website, other sites may have different
                privacy policies and terms which are beyond our control. Please be sure to check the
                Privacy Policies of these sites as well as their "Terms of Service" before engaging
                in any business or uploading any information.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-2xl sm:text-3xl font-bold text-primary-foreground">Services</h5>
              <p className="leading-relaxed text-base sm:text-lg">
                By using our website, you hereby TempGmail provides a disposable Gmail service that
                enables users to create temporary and anonymous email addresses. These temporary
                email addresses, typically ranging from a few minutes to a few hours, can be used
                for various purposes, including signing up for websites, services, or newsletters.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                User Data and Privacy
              </h5>
              <p className="leading-relaxed text-base sm:text-lg">
                At TempGmail, we prioritize user privacy and data protection. We do not save, store,
                or share any user data or email information provided through our service. We operate
                on a strict policy of anonymity and do not track or monitor user activities.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                Usage Restrictions
              </h5>

              <ul className="list-disc pl-5">
                <li>
                  Users are prohibited from using TempGmail for any illegal or unauthorized purpose.
                </li>
                <li>
                  Users must not attempt to access accounts or services using temporary email
                  addresses without proper authorization.
                </li>
                <li>
                  Users are responsible for the content and activities associated with the temporary
                  email addresses generated through TempGmail.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-2xl sm:text-3xl font-bold text-primary-foreground">Disclaimer</h5>
              <p className="leading-relaxed text-base sm:text-lg">
                By using our website, you hereby TempGmail is provided on an "as is" and "as
                available" basis without any representations or warranties, express or implied. We
                do not guarantee the accuracy, reliability, or availability of our service. While we
                strive to ensure the accuracy of the information provided through TempGmail, we
                cannot guarantee that all data and content will be error-free or up-to-date. Users
                should independently verify any information obtained through our service before
                relying on it.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                Limitation of Liability
              </h5>
              <p className="leading-relaxed text-base sm:text-lg">
                In no event shall TempGmail, nor its directors, employees, partners, agents,
                suppliers, or affiliates, be liable for any indirect, incidental, special,
                consequential, or punitive damages, including without limitation, loss of profits,
                data, use, goodwill, or other intangible losses resulting from:
              </p>

              <ul className="list-disc pl-5">
                <li>The use or inability to use TempGmail.</li>
                <li>Unauthorized access to or alteration of your transmissions or data.</li>
                <li>Any other matter relating to TempGmail.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                Changes to Terms and Conditions
              </h5>
              <p className="leading-relaxed text-base sm:text-lg">
                In no event shall TempGmail, TempGmail reserves the right to modify or replace these
                terms and conditions at any time. It is your responsibility to review this page
                periodically for changes. Your continued use of TempGmail after any modifications
                indicate your acceptance of those changes.
              </p>

              <p>
                In no event shall TempGmail, By using TempGmail, you acknowledge that you have read,
                understood, and agree to be bound by these terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
