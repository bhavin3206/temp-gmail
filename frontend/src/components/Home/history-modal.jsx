import { useEffect, useState } from "react";
import CloseIconSVG from "@public/svg/CloseIconSVG";
import Cookies from "js-cookie";

const HistoryModal = ({ setIsHistoryOpen, setEmailData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedEmail = Cookies.set("email");

    if (savedEmail) {
      try {
        const parsedEmail = JSON.parse(savedEmail);
        setEmailData(parsedEmail);
      } catch (error) {
        console.error("Failed to parse cookie data", error);
        handleSubmit();
      }
    } else {
      handleSubmit();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchValue) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_CLIENT_URL}/email/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: searchValue }),
      });

      const data = await response.json();

      if (data.content === "No account found for the provided email.") {
        setError("No account found for the provided email.");
      } else {
        delete data.content; // Remove unwanted key from object
        setEmailData(data);
        setIsHistoryOpen(false);
        Cookies.set("email", JSON.stringify(data), { expires: 1 });
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold">History</h3>
          <button onClick={() => setIsHistoryOpen(false)} className="cursor-pointer">
            <CloseIconSVG iconWidth={20} iconHeight={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="relative flex items-stretch w-full mb-2">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search mailbox"
              className="flex-grow py-2 px-4 text-base rounded-l-xl border border-border border-r-0 outline-0"
              required
            />
            <button
              type="submit"
              className="border border-border py-2 px-5 text-base rounded-r-xl transition cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Active"}
            </button>
          </div>
          {error && <p className="text-sm text-red-600 text-center mt-1">{error}</p>}
        </form>

        <p className="text-sm">
          This page lists all the email addresses you have recently used, with each email indicating
          the time of use. You can reactivate these email addresses. These emails will be
          automatically destroyed 24 hours after you leave the website, and you cannot view them
          through history. However, you can still use fuzzy search to find previously used emails
          and activate them. We have set up flexible search methods so that you can accurately
          retrieve emails that were used a long time ago.
        </p>
      </div>
    </div>
  );
};

export default HistoryModal;
