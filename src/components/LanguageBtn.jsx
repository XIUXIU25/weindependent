import { useEffect, useState } from "react";
import LanguageIcon from "../assets/icon-logo/language-icon.svg";
import { useTranslation } from "react-i18next";
import DropdownIcon from "../assets/icon-logo/dropdown-icon.svg";
import { TranslationTypes } from "../types/translationTypes";

const LanguageBtn = () => {
  const [isDropdownclicked, setIsDropdownclicked] = useState(false);
  const { t, i18n } = useTranslation("common"); // ✅ Load translations
  const [lang, setLang] = useState(TranslationTypes.ENGLISH);

  const changeLanguage = async (language) => {
    setLang(language);
    console.log("Changing language to:", language);
    await i18n.changeLanguage(language.abbreviation);
    console.log("Language changed successfully to:", i18n.language);
    setIsDropdownclicked(false); // Close dropdown after selection
  };

  const dropDownMenu = () => {
    return (
      <ul className="submenu absolute">
        {Object.values(TranslationTypes).map((language) => (
          <li key={language.abbreviation}>
            <button
              className="submenu-item"
              onClick={() => changeLanguage(language)}
            >
              {language.fullName}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className=" relative">
      <button
        className="language-nav border-1 border-[#D9D9D9] rounded-[40px] relative"
        onClick={() => setIsDropdownclicked(true)}
      >
        <div className="language-item flex items-center">
          <img
            src={LanguageIcon}
            alt="Language Icon"
            className="dropdown-icon"
          />
          <span className="language-text">{lang.fullName}</span>
          <img
            src={DropdownIcon}
            alt="Expand language submenu"
            className="dropdown-icon"
          />
        </div>
        </button>
      {isDropdownclicked ? dropDownMenu() : null}
    </div>
  );
};

export default LanguageBtn;
