/*
 * Author: Xingxing Xiao
 * Created: Tue Feb 20 2025
 * Updated: Tue Mar 8 2025
 */

// src/pages/Homepage.jsx
import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
// import '../styles/Homepage.css'
import AuthModal from "../components/AuthModal"

import { Card, CardContent } from "../components/ui/Card"
import BlogCard from "../components/ui/BlogCard"
import EventCard from '../components/ui/EventCard'

import SupportCard from "../components/ui/supportCard"
import SupportProgramCard from "../components/ui/SupportProgramCard"
import Member from "../assets/icon-logo/member.svg"

import HomepageHeroImage from "../assets/img/hero-image.jpg"
import HomepageAboutImage from "../assets/img/homepage-about-1.jpg"
import HomepageSupportHeroImage from "../assets/img/homepage-support-hero-image.png"
import ArticleImage from "../assets/img/article-image.png"
import SupportHeroImage from "../assets/img/support-hero-image.png"
import HomepageVisaLinkImage from "../assets/icon-logo/button-arrow.svg"

import EventImage1 from "../assets/icon-logo/event-image-1.svg"
import EventImage2 from "../assets/icon-logo/event-image-2.svg"
import EventImage3 from "../assets/icon-logo/event-image-3.svg"

import HomepageCardBackgroundImage1 from "../assets/icon-logo/homepage-card-backgroud-image1.svg"
import HomepageCardBackgroundImage2 from "../assets/icon-logo/homepage-card-backgroud-image2.svg"
import HomepageSupportButtonImage from "../assets/icon-logo/homepage-support-button.svg"

import ArticleMarkIcon from "../assets/icon-logo/ArticleMarkIcon.svg"

function HomePage() {
  const navigate = useNavigate(); //React Router navigate function


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

  return (
    <div className="homepage grid grid-cols-12 gap-4">

      {/* Hero Section */}
      <section className="hero col-span-12 bg-[url('../assets/icon-logo/logo-background-watermark.svg')] bg-cover px-6 py-12">
        <div className="hero-content max-w-7xl mx-auto grid grid-cols-12 gap-12 ">

          {/* left Content */}
          <div className="col-span-6 md:col-span-6 flex flex-col justify-center">
            <h1 className="text-[46px] text-[#FF5634]">Building Bridges for</h1>
            <h1 className="text-[46px] text-[#FF5634]">Dependent Visa Holders</h1>
            <p className="mt-4">
              <a className="text-[#FF5634]">We Independent </a>
              help them build community, gain access to critical resources, and overcome social isolation.
              Through this supportive environment, we empower them to regain their independence,
              integrate into U.S. society.
            </p>

            {/* Buttons Section */}
            <div className="hero-buttons">
              <button className="signUpButton bg-[#FFEDDD] text-[#FF5634] hover:bg-[#F8F8F8]" onClick={() => { onOpenAuthModal("Sign Up") }}>Get Started</button>
              <button className="donateButton bg-[#FF5634] text-[#FFFFFF] hover:text-[#000000] " onClick={() => navigate("/donate")}>Donate</button>
            </div>


            {/* Visa Info */}
            <p className="text-black">Get to know more details about dependent visa holders</p>
            <p className="text-[#FF5634] flex items-center gap-10">
              J2 Visa  |  H4 Visa  |  O3 Visa  |  F2 Visa  |  ...
              <Link to="/visa-detail" className="text-[#FF5634]">
                <img src={HomepageVisaLinkImage} alt="arrow" className="w-5 h-5" />
              </Link>
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="col-span-6 md:col-span-6 flex justify-center md:justify-end">
            <img src={HomepageHeroImage} alt="Support Hero Image" className="w-32 h-32 rounded-lg" />
          </div>
        </div>
        {/* Authentication Modal */}
        <AuthModal
          visible={modalVisible}
          onClose={onCloseAuthModal}
          setModalType={setModalType}
          type={modalType}
        />
      </section>

      {/* About Section */}
      <section id="about" className="col-span-12 grid grid-cols-subgrid gap-4">
        <h3 className="col-span-12 text-2xl font-semibold text-left mb-6 text-[#FF5634]">About</h3>
        <div className="col-span-12 grid grid-cols-12 gap-4">
          <div className="col-span-6 items-center md:items-start gap-8 py-8">
            <img src={HomepageAboutImage} alt="About" className="rounded-lg w-full" />
          </div>
          <div className="col-span-6 text-left flex flex-col justify-between">
            <div>
              <p className="mt-4 text-[var(--primary-color)]">
                <a className="text-semibold">We Independent </a>
                is a 501c3 nonprofit organization
                dedicated to embracing and supporting dependent visa holders, especially women,
                by helping them build connections, access essential resources,
                and feel valued in their new communities.
              </p>
              <p className="mt-4 text-gray-600">Together, we create a bridge
                towards independence and belonging.
              </p>
            </div>

            <div className="mb-auto flex justify-end">
              <button className="mb-auto bg-[#FF5634] text-[#FFFFFF] px-4 py-2 rounded-lg hover:bg-[#FFEDDD] hover:text-[#FF5634]"
                onClick={() => navigate("/about")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>        
      </section>

      <section className="homepage-cards col-span-12">
        <div className="col-span-12 grid grid-cols-subgrid items-center">
          <h2 className="col-span-12 text-5xl font-semibold mb-6 text-center text-[#FF5634]">We are here to support, uplift, and guide</h2>
          <p className="col-span-8 col-end-11 mt-4">At We Independent, we are committed to empowering dependent visa holders
            by providing support across 4 key areas to help them thrive in their new environment
          </p>
        </div>

        <div>
          <div className="grid grid-cols-12 gap-4 ">
            <Card className="col-span-3 p-6 shadow-lg bg-cover h-full flex" >
              <CardContent className="flex flex-col justify-between  h-full w-full">
                <img src={HomepageCardBackgroundImage1} alt="Logo" className="w-16 h-16 mb-4" />

                <h2 className="text-2xl font-semibold  text-center pd-4 ">Adapting to</h2>
                <h2 className="text-2xl font-semibold  text-center pd-4 ">Life in the U.S.</h2>
              </CardContent>
            </Card>
            <Card className="col-span-3 p-6 shadow-lg bg-[#FFEDDD]">
              <CardContent className="flex flex-col items-center">
                <img src={HomepageCardBackgroundImage2} alt="Logo" className="w-16 h-16 mb-4" />
                <h2 className="text-2xl font-semibold mb-6 text-center">Visa & Policy</h2>
                <h2 className="text-2xl font-semibold mb-6 text-center">Guidance</h2>
              </CardContent>
            </Card>
            <Card className="col-span-3 p-6 shadow-lg bg-white">
              <CardContent className="flex flex-col items-center">
                <img src={HomepageCardBackgroundImage1} alt="Logo" className="w-16 h-16 mb-4" />
                <h2 className="text-2xl font-semibold mb-6 text-center"> Overcoming</h2>
                <h2 className="text-2xl font-semibold mb-6 text-center"> Language Barriers</h2>
              </CardContent>
            </Card>
            <Card className="col-span-3 p-6 shadow-lg bg-[#FFEDDD]">
              <CardContent className="flex flex-col items-center">
                <img src={HomepageCardBackgroundImage2} alt="Logo" className="w-16 h-16 mb-4" />
                <h2 className="text-2xl font-semibold mb-6 text-center"> Well-Being & </h2>
                <h2 className="text-2xl font-semibold mb-6 text-center"> Self-Development</h2>
              </CardContent>
            </Card>

            <Card className="col-span-12 p-6 shadow-lg bg-[#FFEDDD]">
              <CardContent className="flex flex-col">
                <h2 className="text-2xl font-semibold mb-6 text-center">"  In WE INDEPENDENT</h2>
                <h2 className="text-2xl font-semibold mb-6 text-center"> I find my community and value here  "</h2>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Program Section */}
      <section id="support-program" className="col-span-12 grid grid-cols-12 gap-8 py-16 px-6 bg-white">
        {/* Title - Support Program Text */}
        <div className="col-span-12">
          <h3 className="text-[#FF5634] text-lg font-semibold mb-2">Support program</h3>
          <h1 className="text-4xl font-semibold text-left mb-6 leading-tight">
            Your Journey Starts Here: <br />
            Find <span className="text-[#FF5634]">1- on-1 Free</span> Support You Need
          </h1>
        </div>

        <div className="col-span-12 grid grid-cols-subgrid gap-4">
          <div className="col-span-6 flex flex-col gap-12">
            {/* Support Cards */}
            <SupportProgramCard
              title="English Support"
              description="Your Gateway to English Success. Find nearby ESL classes, access valuable learning resources, and connect with our community of English learners."
              imageUrl={HomepageSupportButtonImage}
              altText="Go"
              link="/support-program/english-support"
            />
            <SupportProgramCard
              title="Career Compass"
              description="Your Gateway to English Success. Find nearby ESL classes, access valuable learning resources, and connect with our community of English learners."
              imageUrl={HomepageSupportButtonImage}
              altText="Go"
              link="/support-program/career-compass"
            />
            <SupportProgramCard
              title="Legal Consulting"
              description="Navigating the complexities of U.S. 
              law? Our expert team provides clear and concise legal 
              and policy guidance to help you make informed decisions."
              imageUrl={HomepageSupportButtonImage}
              altText="Go"
              link="/support-program/legal-consulting"
            />
            <SupportProgramCard
              title="Mental Wellbeing Counseling"
              description="Free Mental Wellbeing Counseling. 
              Our experienced therapists help you navigate life in the US, 
              address emotional challenges, and build resilience."
              imageUrl={HomepageSupportButtonImage}
              altText="Go"
              link="/support-program/mental-health-counseling"
            />
          </div>

          {/* Right Column - Image */}
          <div className="col-start-8 col-end-12 flex justify-end">
            <img src={HomepageSupportHeroImage} alt="Support Hero" className="w-full max-w-sm h-auto rounded-lg shadow-lg" />
          </div>
        </div>

      </section>

      {/* Events Section */}
      <section id="events" className="col-span-12 max-w-7xl mx-auto py-16 px-4 ">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#FF5634] text-lg font-semibold mb-2 text-center">Events</h3>
          <h1 className="text-4xl font-semibold text-center leading-tight">
            Together, we are creating a bridge to <br />
            <span className="text-[#FF5634]">independence and belonging</span>
          </h1>

          <a href="/events" className="inline-flex items-center text-gray-800 hover:text-[#FF5634]">
            View all events <span className="ml-2">→</span>
          </a>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-12 gap-12 px-4">
          {/* Event Card 1 */}
          <EventCard
            imageUrl={EventImage1}
            date="02/13/2025"
            day="Monday"
            time="5:30-6:00 PM"
            title="Ladies Who Lead Luncheon"
            description="Celebrate, empower, and inspire each other to take charge and make a difference!"
            link="/events"
          />
          <EventCard
            imageUrl={EventImage2}
            date="02/13/2025"
            day="Monday"
            time="5:30-6:00 PM"
            title="Ladies Who Lead Luncheon"
            description="Celebrate, empower, and inspire each other to take charge and make a difference!"
            link="/events/ladies-who-lead"
          />
          <EventCard
            imageUrl={EventImage3}
            date="02/13/2025"
            day="Monday"
            time="5:30-6:00 PM"
            title="Ladies Who Lead Luncheon"
            description="Celebrate, empower, and inspire each other to take charge and make a difference!"
            link="/events/ladies-who-lead"
            status="Past"
          />
        </div>
      </section>

      {/* Blog Section */}
      <section id="Blog" className="col-span-12 grid grid-cols-subgrid gap-4">
        <div className="col-span-7 text-left">
          <h3 className="text-[#FF5634] text-lg font-semibold mb-2 text-left">Blog</h3>
          <h1 className="text-4xl font-semibold text-left leading-tight">
            Explore
            <span className="text-[#FF5634]">
              timely articles and essential <br />
              resources
            </span>
            to navigate new  <br />
            environment with confidence and ease
          </h1>
          <a href="/blogs" className="hover:text-[#FF5634]">
            View all blogs <span className="ml-2">→</span>
          </a>
        </div>

        <div className="col-span-5 text-right m-4">
          <div>
            <Link
              href="/blogs/visa-policy"
              className="px-4 py-2 rounded-full bg-[#FFEDDD] border border-none hover:text-[#FF5634] transition-colors"
            >
              Visa & Policy
            </Link>
            <Link
              href="/blogs/us-living-guide"
              className="px-4 py-2 rounded-full bg-[#FFEDDD] border border-none hover:text-[#FF5634] transition-colors"
            >
              US Living Guide
            </Link>
            <Link
              href="/blogs/career-compass"
              className="px-4 py-2 rounded-full bg-[#FFEDDD] border border-none hover:text-[#FF5634] transition-colors"
            >
              Career compass
            </Link>
          </div>
          <div>
            <Link
              href="/blogs/health-wellness"
              className="px-4 py-2 rounded-full bg-[#FFEDDD] border border-none hover:text-[#FF5634] transition-colors"
            >
              Health & Wellness
            </Link>
            <Link
              href="/blogs/community-story"
              className="px-4 py-2 rounded-full bg-[#FFEDDD] border border-none hover:text-[#FF5634] transition-colors"
            >
              Community story
            </Link>
          </div>
        </div>
        {/* Blog Cards */}
        <div className="col-span-12 grid grid-cols-subgrid gap-4">
          <p className="col-span-12">Must-Read Articles</p>
          <div className="col-span-4">
            <BlogCard
              title="US Living Guide"
              description="A Simple Guide to U.S. Visas: What You Need to Know"
              eventTime="Jan 20 2025"
              author="We Independent"
              readingTime="5 min"
              image={ArticleImage}
              icon={ArticleMarkIcon} // Floating Icon on Image
              href={"/blogs/us-living-guide"}
            />
          </div>
          <div className="col-span-4">
            <BlogCard
              title="US Living Guide"
              description="A Simple Guide to U.S. Visas: What You Need to Know"
              eventTime="Jan 20 2025"
              author="We Independent"
              readingTime="5 min"
              image={ArticleImage}
              icon={ArticleMarkIcon} // Floating Icon on Image
              href={"/blogs/us-living-guide"}
            />
          </div>
          <div className="col-span-4">
            <BlogCard
              title="US Living Guide"
              description="A Simple Guide to U.S. Visas: What You Need to Know"
              eventTime="Jan 20 2025"
              author="We Independent"
              readingTime="5 min"
              image={ArticleImage}
              icon={ArticleMarkIcon} // Floating Icon on Image
              href={"/blogs/us-living-guide"}
            />
          </div>
        </div>
      </section>

      {/* Support Us Section */}
      <section id="Support us" className="col-span-12 grid grid-cols-12 gap-4 py-16 px-6 bg-gray-100 mb-12">
        <div className="col-span-6 items-center md:items-start gap-8 py-8">
          <img src={SupportHeroImage} alt="support-hero-image" className="rounded-lg w-full" />
        </div>
        <div className="col-span-6 grid grid-cols-subgrid gap-4 text-left">
          <div className="col-span-3 text-left">
            <SupportCard
              title="Become a member"
              description="Celebrate, empower, and inspire each other to take charge and make a difference."
              icon={Member}
              link="/membership"
            />
          </div>
          <div className="col-span-3 text-left">
            <SupportCard
              title="Become a member"
              description="Celebrate, empower, and inspire each other to take charge and make a difference."
              icon={Member}
              link="/membership"
            />
          </div>
          <div className="col-span-3 text-left">
            <SupportCard
              title="Become a member"
              description="Celebrate, empower, and inspire each other to take charge and make a difference."
              icon={Member}
              link="/membership"
            />
          </div>
          <div className="col-span-3 text-left">
            <SupportCard
              title="Become a member"
              description="Celebrate, empower, and inspire each other to take charge and make a difference."
              icon={Member}
              link="/membership"
            />
          </div>
        </div>
      </section>


      {/* <section className="featured-events">
        <h2>Featured Events</h2>
        <div className="event-list">
          {featuredEvents.map((event) => (
            <div className="event-card" key={event.id}>
              <img src={event.image} alt={event.name} />
              <h4>{event.name}</h4>
              <p>${event.price}</p>
            </div>
          ))}
        </div>
        <button className="view-all-button" onClick={() => navigate("/Events")}>
          View All Events
        </button>
      </section>

      
      <section className="cta">
        <h2>Ready to Find Your Dream Events?</h2>
        <button onClick={() => navigate("/profile")}>Sign Up NOW!</button>
      </section> */}
    </div>
  );
}

export default HomePage;