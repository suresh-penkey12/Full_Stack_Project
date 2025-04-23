import React from 'react'
import Navbar from '../Components/navbar'
import JobBoardSection from '../Components/Jobposting/hero'
import CompaniesSection from '../Components/Jobposting/comanies'
import GetPostingSection from '../Components/Jobposting/Getposting'
import InboundTalentSection from '../Components/Jobposting/inboundtalent'
import Footer from '../Components/Footer'

const Recruit_Post = () => {
  return (
    <div>
        <Navbar></Navbar>
        <JobBoardSection></JobBoardSection>
        <CompaniesSection></CompaniesSection>
        <GetPostingSection></GetPostingSection>
        <InboundTalentSection></InboundTalentSection>
        <Footer></Footer>
    </div>
  )
}

export default Recruit_Post