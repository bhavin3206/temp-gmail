import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import HistoryModal from "./history-modal";

import UserIconSVG from "@public/svg/UserIconSVG";
import CopyIconSVG from "@public/svg/CopyIconSVG";
import RefreshIconSVG from "@public/svg/RefreshIconSVG";
import HistoryIconSVG from "@public/svg/HistoryIconSVG";

const GetMail = ({ emailData, setEmailData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  useEffect(() => {
    const savedEmail = Cookies.get("email");

    if (savedEmail) {
      try {
        const parsedEmail = JSON.parse(savedEmail);
        setEmailData(parsedEmail);
      } catch (error) {
        console.error("Failed to parse cookie data", error);
        fetchEmail();
      }
    } else {
      fetchEmail();
    }
  }, []);

  const fetchEmail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_CLIENT_URL}/email`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setEmailData(data);

        Cookies.set("email", JSON.stringify(data), { expires: 1 });
      }
    } catch (error) {
      console.error("Fetch email failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!emailData?.email) return;

    navigator.clipboard.writeText(emailData?.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <>
      <div className="space-y-6">
        <div className="space-y-3 text-center">
          <h2 className="text-black [&>span]:text-primary-foreground text-2xl xs:text-2xl md:text-4xl font-bold">
            Get Your temp <span>G</span> <span>m</span> <span>a</span> <span>i</span> <span>l</span>
          </h2>
          <p className="text-sm md:text-base">
            While many temporary mail providers exist, we stand apart by offering exclusive, secure
            Gmail solutions with unparalleled privacy protection.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border border-border rounded-lg sm:rounded-xl flex items-center gap-2 justify-between p-2 sm:p-2.5 ring-transparent outline-0 w-fit mx-auto text-black">
            <div>
              <UserIconSVG iconWidth={28} iconHeight={28} className="size-5 sm:size-7" />
            </div>
            <div className="text-center font-medium text-sm sm:text-lg">
              {isLoading ? "Loading..." : emailData.email || "No email"}
            </div>
            <div className="relative group has-tooltip flex items-center">
              <button className="cursor-pointer" onClick={copyToClipboard}>
                <CopyIconSVG
                  iconWidth={28}
                  iconHeight={28}
                  className="hover:scale-[1.05] transition-all duration-300 size-5 sm:size-7"
                />
              </button>
              <span
                className={`absolute bg-black text-white rounded-md px-2 py-0.5 inset-y-0 left-full ml-1 ${
                  emailCopied ? "" : "hidden"
                }`}
              >
                Copied!
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-black text-base">
            <button
              className="border border-border rounded-xl flex items-center gap-2  p-2 sm:p-2.5 cursor-pointer hover:scale-[1.05] transition-all duration-300"
              onClick={fetchEmail}
            >
              <RefreshIconSVG
                iconWidth={20}
                iconHeight={20}
                className={`${isLoading ? "animate-spin" : ""}`}
              />
              Change
            </button>

            <button
              className="border border-border rounded-xl flex items-center gap-2  p-2 sm:p-2.5 cursor-pointer hover:scale-[1.05] transition-all duration-300"
              onClick={() => setIsHistoryOpen(true)}
            >
              <HistoryIconSVG iconWidth={20} iconHeight={20} />
              History
            </button>
          </div>
        </div>
      </div>
      {/* MODAL START */}
      {isHistoryOpen && (
        <HistoryModal
          setIsHistoryOpen={setIsHistoryOpen}
          setEmailData={setEmailData}
          emailData={emailData}
        />
      )}
    </>
  );
};
export default GetMail;
