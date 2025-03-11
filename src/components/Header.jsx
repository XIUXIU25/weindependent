
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"; 
import "../styles/Header.css"

// import ProfileIcon from "../assets/icon-logo/profile-icon.svg"
import Logo_header from "../assets/icon-logo/We-Independent-Logo-header.svg"
import DropdownIcon from "../assets/icon-logo/dropdown-icon.svg"


import AuthModal from "./AuthModal"
import LanguageBtn from "./languageBtn";

function Header ({ profile }) {
  const navigate = useNavigate()
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(null)
  const { t, i18n } = useTranslation("common"); // ✅ Load translations



  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
    setProfileDropdownOpen(false)
  }

  // const toggleProfileDropdown = () => {
  //   setProfileDropdownOpen(!isProfileDropdownOpen)
  //   setDropdownOpen(false)
  // }

  const toggleSubmenu = (itemName) => {
    setOpenSubMenu(openSubMenu === itemName ? null : itemName)
  }





  // ---------------- Auth Modal State Management ----------------
  const [modalVisible, setModalVisible] = useState(false)
  const [modalType, setModalType] = useState("Login")
  const onOpenAuthModal = (modalType) => {
    // set modal type
    console.log(modalType)
    setModalType(modalType)
    // toggle modal visibility
    setModalVisible(!modalVisible)
  }
      // --------------- Function: Close Auth Modal ---------------
  const onCloseAuthModal = () => {
    setModalVisible(false)
  }
  // --------------- End Auth Modal State Management ---------------
  const menuItems = [
    {
      name: t("nav.support.buttonText"), // 🔴 CHANGE HERE
      path: "/support",
      subMenu: [
        { name: t("nav.support.dropdown1"), path: "/support/english-support" },
        { name: t("nav.support.dropdown2"), path: "/support/career-compass" },
        { name: t("nav.support.dropdown3"), path: "/support/legal-consulting" },
        { name: t("nav.support.dropdown4"), path: "/support/mental-health" },
      ],
    },
    { name: t("nav.blogs"), path: "/blogs" }, // 🔴 CHANGE HERE
    { name: t("nav.events"), path: "/events" }, // 🔴 CHANGE HERE
    // { name: "Add Your Events", path: "/add-events" },
    { name: t("nav.about"), path: "/about" }, // 🔴 CHANGE HERE
    { name: t("nav.donate"), path: "/donate" }, // 🔴 CHANGE HERE
  ]


    

  return (
    <header className="header">

      <a href="#main-content" className="skiplink">
        Skip to Main Content
      </a>


      <div className="logo" onClick={() => navigate("/")}>
        <img src={Logo_header} alt="Website Logo" className="logo-img" />
      </div>

      <nav className="nav">
      <ul className="full-nav">
  {menuItems.map((item, index) => (
    <li key={index} className="nav-item">  {/* ✅ Use index or item.path */}
      {item.subMenu ? (
        <>
          <button className="menu-item" onClick={() => toggleSubmenu(item.name)}>
            <span className="menu-text">{item.name}</span>
            <img
              src={DropdownIcon}
              alt="Expand submenu"
              className={`dropdown-icon transition-transform duration-300 ease-in-out ${
                openSubMenu === item.name ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openSubMenu === item.name && (
            <ul className="submenu">
              {item.subMenu.map((subItem, subIndex) => (  // ✅ Now subItem exists
                <li key={subIndex}>  {/* ✅ Use subIndex as key */}
                  <button className="submenu-item" onClick={() => navigate(subItem.path)}>
                    {subItem.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <button className="menu-item" onClick={() => navigate(item.path)}>
          {item.name}
        </button>
      )}
    </li>
  ))}
</ul>


        {/* Mobile Menu (Hamburger) */}
        <button
          className="hamburger bg-color-primary"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <button
              className="nav-close-button"
              onClick={() => {
                setDropdownOpen(false)
              }}
            >
              ✕
            </button>
            {menuItems.map((item) => (
              <li key={item.path}>
                <button
                  // href={`#${item.page}`}
                  className="menu-item"
                  onClick={() => {
                    navigate(item.path)
                    setDropdownOpen(false)
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <LanguageBtn/>


      <button
        className="loginButton"
        onClick={() => { onOpenAuthModal("Login") }}
        >
        {t("nav.login")}
      </button>

      <button
        className="signUpButton bg-[var(--primary-color)]"
        onClick={() => { onOpenAuthModal("Sign Up") }}
        >{t("nav.signUp")}
      </button>

      <AuthModal
        visible={modalVisible}
        onClose={onCloseAuthModal}
        setModalType={setModalType}
        type={modalType}
      />

      {/* <section className="profile">
        <img
          src={ProfileIcon}
          alt="Profile Icon"
          className="profile-icon"
          onClick={toggleProfileDropdown}
          aria-expanded={isProfileDropdownOpen}
        />
        {isProfileDropdownOpen && (
          <div className="profile-dropdown-menu">
            <img
            src={profile.profilePic}
            alt="Profile"
            className="header-profile-pic" />
            <div className="username">{profile.username}</div>
            <button
              className="profile-settings"
              onClick={() => {
                navigate("/profile");
                setProfileDropdownOpen(false);
              }}
            >
              Profile Settings
            </button>
          </div>
        )}
      </section> */}
    </header>
  )
}

export default Header
