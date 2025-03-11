// src/components/Footer.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Logo_footer from "../assets/icon-logo/We-Independent-Logo-footer.svg";
import social_media_instagram from "../assets/icon-logo/social-media-instagram.svg";
import social_media_facebook from "../assets/icon-logo/social-media-facebook.svg";
import social_media_twitter from "../assets/icon-logo/social-media-twitter.svg";

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

// Didn't import the css file, all by tailwindcss
//import "../styles/Footer.css";

function Footer() {
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from refreshing on form submit

    const email = event.target.elements.email.value; // Access the email field
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      // Process the subscription, e.g., send the email to the server
      alert(`Subscribed with email: ${email}`);
      // Clear the input field after submission (optional)
      event.target.reset();
    }
  };

  return (
    <footer className="footer bg-[#FFEDDD] py-8">
      <div className="footer-top text-[var(--primary-color)] w-full mx-auto grid grid-cols-12 gap-8 p-10">
        <div className="footer-left col-span-5 md:col-span-3 flex flex-col items-center md:items-center">
          <div
            className="footer-base-logo mb-4 sm:mb-0 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={Logo_footer}
              alt="Website Logo"
              className="footer-logo w-[235px] h-[188px]"
            />
          </div>
          <p className="text-sm text-center">{t("footer.nonProfit")}</p>
          <nav className="social-media--list flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://www.instagram.com/weindependent_/profilecard/?igsh=MmxuYnBxajQxcmpt"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media--instagram"
            >
              <img
                src={social_media_instagram}
                alt="Instagram Logo"
                className="w-[24px]"
              />
            </a>
            <a
              href="https://www.facebook.com/share/DWbMAAar8PuvdrCE/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media--facebook"
            >
              <img
                src={social_media_facebook}
                alt="Facebook Logo"
                className="w-[24px]"
              />
            </a>
            <a
              href="https://twitter.com/WeIndependent_"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media--twitter"
            >
              <img
                src={social_media_twitter}
                alt="Twitter Logo"
                className="w-[24px]"
              />
            </a>
          </nav>
        </div>

        <div className="footer-mid col-span-4 md:col-span-6 flex flex-col items-center md:items-start">
          <div className="footer-content grid grid-cols-3 gap-8 mt-8 place-self-end">
            <div className="footer-section">
              <h4 className="font-semibold text-lg">{t("footer.resources")}</h4>
              <p>
                <a
                  onClick={() => navigate("/language-support")}
                  className="text-gray-400 hover:text-white"
                >
                  {t("footer.languageSupport")}
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/legal-consulting")}
                  className="text-gray-400 hover:text-white"
                >
                  {t("footer.legalConsulting")}
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/mental-health")}
                  className="text-gray-400 hover:text-white"
                >
                  {t("footer.mentalHealth")}
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/blogs")}
                  className="text-gray-400 hover:text-white"
                >
                  {t("footer.blogs")}
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/events")}
                  className="text-gray-400 hover:text-white"
                >
                  {t("footer.events")}
                </a>
              </p>
            </div>
            <div className="footer-section">
              <h4 className="font-semibold text-lg">{t("footer.supportUs")}</h4>
              <p>
                <a
                  onClick={() => navigate("/donate")}
                  className="text-gray-400 hover:text-white"
                >
                  {t("footer.donate")}
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/volunteer")}
                  className="text-gray-400 hover:text-white"
                >
                  {t("footer.volunteer")}
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/partnership")}
                  className="text-gray-400 hover:text-white"
                >
                  {t("footer.partnership")}
                </a>
              </p>
            </div>
            <div className="footer-section">
              <h4 className="font-semibold text-lg">{t("footer.info")}</h4>
              <p>
                <a
                  onClick={() => navigate("/about")}
                  className="text-gray-400 hover:text-white"
                >
                  {t("footer.about")}
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/contact")}
                  className="text-gray-400 hover:text-white"
                >
                  {t("footer.contact")}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-right col-span-3 md:col-span-3 flex flex-col items-center md:items-start">
          <form
            className="footer-form flex flex-col items-center md:items-start gap-2"
            onSubmit={handleSubmit}
          >
            <h4 className="font-semibold text-lg">{t("footer.community")}</h4>
            <p>{t("footer.newsletter")}</p>
            <Input
              type="email"
              placeholder="Enter your email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Please enter a valid email address"
              name="email"
              className="footer-input-email w-full px-4 py-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <Button
              type="submit"
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              {t("footer.subscribe")}
            </Button>
          </form>
        </div>
      </div>

      <div className="footer-bottom flex justify-between items-center py-4 border-t-4 border-solid border-t-[#FF421B4F] mt-8">
        <p className="text-sm">{t("footer.copyright")}</p>
        <p className="text-sm">
          {t("footer.privacyPolicy")} • {t("footer.termsOfUse")} •{" "}
          {t("footer.accessibility")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
