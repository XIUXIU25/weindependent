import { useEffect, useState } from "react";
import LanguageIcon from "../assets/icon-logo/language-icon.svg";
import { useTranslation } from "react-i18next";
import DropdownIcon from "../assets/icon-logo/dropdown-icon.svg";
import { TranslationTypes } from "../types/translationTypes";

const LanguageBtn = () => {
  const [isDropdownclicked, setIsDropdownclicked] = useState(false);
  const { i18n } = useTranslation(); 


  const changeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
    console.log("Language changed to:", i18n.language);
    setIsDropdownclicked(false); 
  };

  const dropDownMenu = () => {
    return (
      <ul className="submenu absolute">
        {Object.entries(TranslationTypes).map(([lang, language]) => (
          <li key={lang}>
            <button
              className="submenu-item"
              onClick={() => changeLanguage(lang)}
            >
              {language}
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
          <span className="language-text">{TranslationTypes[i18n.language]}</span>
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
