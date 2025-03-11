import "./i18n"; // Import i18n config
import { useTranslation } from "react-i18next"; // Import translation hook

import React, { useState ,useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AuthModal from "./components/AuthModal"

import HomePage from "./pages/Homepage"
import Events from "./pages/Events"
import AddEvents from "./pages/AddEvents"
import Blogs from "./pages/Blogs"
import About from "./pages/About"
import ProfilePage from "./pages/ProfilePage"
import DonatePage from "./pages/DonatePage"
// import AuthModal from "./components/AuthModal"
// import FormComponent from "./components/FormComponent"



function App () {
  // const [currentPage, setCurrentPage] = useState("home");
  const { t, i18n } = useTranslation(); // Load translation function


  if (!i18n.isInitialized) {
    return <div>Loading...</div>; // Prevents translation issues during initialization
  }


  const [events, setEvents] = useState([
    { id: 1, name: "Tesla Model S", type: "electric", price: "79,990", image: "/img/models.jpg" },
    { id: 2, name: "Ford Mustang", type: "petrol", price: "55,300", image: "/img/mustang.jpg" },
    { id: 3, name: "Toyota Prius", type: "hybrid", price: "28,000", image: "/img/prius.jpg" },
    { id: 4, name: "Tesla Model 3", type: "electric", price: "42,490", image: "/img/tesla.jpg" },
    { id: 5, name: "Toyota Supra", type: "petrol", price: "45,540", image: "/img/supra.jpg" },
    { id: 6, name: "BMW M4", type: "petrol", price: "79,100", image: "/img/bmw.jpg" },
  ])

  const addEvents = (newEvents) => {
    setEvents([...events, { ...newEvents, id: events.length + 1 }])
  }


  const [blogs, setBlogs] = useState([
    { id: 1, name: "blog1", type: "type1", price: "1", image: "/img/models.jpg" },
    { id: 2, name: "blog2", type: "type2", price: "2", image: "/img/mustang.jpg" },
  ])

  const addBlogs = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, ID: blogs.length + 1 }])
  }

  const [profile, setProfile] = useState({
    profilePic: './img/pic1.jpg',
    username: 'default',
    actualName: 'default',
    isCarFree: false,
  })
  const [modalVisible, setModalVisible] = useState(false)


  return (
    <Router>
      
      <div className="app">
        <Header profile={profile} />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage title={t("nav.home")}/>} />
            <Route path="/events" element={<Events title={t("nav.events")} events={events} />} />
            <Route path="/add-events" element={<AddEvents title={t("nav.addEvents")} addEvents={addEvents} />} />
            <Route path="/blogs" element={<Blogs title={t("nav.blogs")} blogs={blogs} />} />
            <Route path="/about" element={<About title={t("nav.about")} />} />
            <Route path="/profile" element={<ProfilePage title={t("nav.profile")} profile={profile} setProfile={setProfile} />} />
            <Route path="/donate" element={<DonatePage title={t("nav.donate")} />} />
            {/* As login/register modal is component not SPA, we prefer not include them in router list */}
            {/* <Route path="/login" element={<AuthModal />} /> */}
            {/* <Route path="/register" element={<AuthModal />} /> */}
          </Routes>
          

        </main>

        <Footer />
        {/*  */}

      </div>
      
    </Router>
    

    // <div className="app">
    //   <Header navigateTo={setCurrentPage} currentPage={currentPage} profile={profile} />

    //   <main id="main-content">
    //     {renderPageContent()}
    //   </main>

    //   <Footer />
    // </div>
  )
}

export default App
