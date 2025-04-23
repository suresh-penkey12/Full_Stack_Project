import React from 'react'
import Navbar from '../Components/navbar'
import HeroSection from '../Components/hero'
import ConnectSection from '../Components/connection'
import StatsSection from '../Components/stat'
import JobRecruiterLoveSection from '../Components/job'
import WellfoundAIUI from '../Components/Airecruter'
import TestimonialSection from '../Components/testemonial'
import FeatureCards from '../Components/cards'
import TopPicks2025Tailwind from '../Components/Toppick'
import BlogSectionExpanded from '../Components/Blog'
import DropdownMenu from '../Components/dropdown'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <ConnectSection></ConnectSection>
        <StatsSection></StatsSection>
        <JobRecruiterLoveSection></JobRecruiterLoveSection>
        <WellfoundAIUI></WellfoundAIUI>
        <TestimonialSection></TestimonialSection>
        <FeatureCards></FeatureCards>
        <TopPicks2025Tailwind></TopPicks2025Tailwind>
        <BlogSectionExpanded></BlogSectionExpanded>
        <DropdownMenu></DropdownMenu>
        <Footer></Footer>
    </div>
  )
}

export default Home