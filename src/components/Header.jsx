/*
 * Author: Xingxing Xiao
 * Created: Tue Feb 20 2025
 * Updated: Tue Mar 3 2025
 */

// src/components/Header.jsx
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"; 
import "../styles/Header.css"

// import ProfileIcon from "../assets/icon-logo/profile-icon.svg"
import Logo_header from "../assets/icon-logo/We-Independent-Logo-header.svg"
import DropdownIcon from "../assets/icon-logo/dropdown-icon.svg"
import LanguageIcon from "../assets/icon-logo/language-icon.svg"

import AuthModal from "./AuthModal"

function Header ({ profile }) {
  const navigate = useNavigate()
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(null)
  const [openLanguageSubMenu, setOpenLanguageSubMenu] = useState(null)

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

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  const toggleLanguageSubmenu = (itemName) => {
    setOpenLanguageSubMenu(openLanguageSubMenu === itemName ? null : itemName)
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
      name: "Support Programs",
      path: "/support",
      subMenu: [
        { name: "Language Support", path: "/support/english-support" },
        { name: "Career Compass", path: "/support/career-compass" },
        { name: "Legal Consulting", path: "/support/legal-consulting" },
        { name: "Mental Health Conseling", path: "/support/mental-health" },
      ],
    },
    { name: "Blogs", path: "/blogs" },
    { name: "Events", path: "/events" },
    // { name: "Add Your Events", path: "/add-events" },
    { name: "About", path: "/about" },
    { name: "Donate", path: "/donate" },
  ]

  const languageItems = [
    {
      name: "English", 
      path: "/translate",
      subLanguage: [
        { name: "English", path: "/translate" },
        { name: "简体中文", path: "/translate/chinese" },
        { name: "Español", path: "/translate/spanish" },
      ],
    },
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
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
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
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.path}>
                          <button
                            className="submenu-item"
                            onClick={() => navigate(subItem.path)}
                          >
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <button
                  className="menu-item"
                  onClick={() => navigate(item.path)}
                >
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

      <ul className="language-nav border-1 border-[#D9D9D9] rounded-[40px]">
          {languageItems.map((item) => (
            <li key={item.path} className="language-item">
              {item.subLanguage ? (
                <>
                  <button className="language-item flex items-center" onClick={() => toggleLanguageSubmenu(item.name)}>
                    <img
                        src={LanguageIcon}
                        alt="Expand language submenu"
                        className="dropdown-icon"
                      />
                    <span className="language-text">{item.name}</span>
                    <img
                      src={DropdownIcon}
                      alt="Expand language Submenu"
                      className={`dropdown-icon transition-transform duration-300 ease-in-out ${
                        openLanguageSubMenu === item.name ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openLanguageSubMenu === item.name && (
                    <ul className="submenu">
                      {item.subLanguage.map((subItem) => (
                        <li key={subItem.path}>
                          <button
                            className="submenu-item"
                            onClick={() => navigate(subItem.path)}
                          >
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <button
                  className="menu-item"
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>


      <button
        className="loginButton"
        onClick={() => { onOpenAuthModal("Login") }}
        >Login
      </button>

      <button
        className="signUpButton bg-[var(--primary-color)]"
        onClick={() => { onOpenAuthModal("Sign Up") }}
        >Sign up
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
