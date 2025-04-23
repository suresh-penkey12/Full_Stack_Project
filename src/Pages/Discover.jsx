import React from 'react'
import Navbar from '../Components/navbar'
import DiscoverSection from '../Components/Discover2'
import DiscoverGrid from '../Components/DiscoverGrid'
import IndustryTags from '../Components/industries2'
import FeaturedLists from '../Components/Featured2'
import FromFounders from '../Components/Fromfounder2'
import DropdownMenu from '../Components/dropdown'
import Footer from '../Components/Footer'

const Discover = () => {
  return (
    <>
    <Navbar></Navbar>
    <DiscoverSection></DiscoverSection>
    <DiscoverGrid></DiscoverGrid>
    <IndustryTags></IndustryTags>
    <FeaturedLists></FeaturedLists>
    <FromFounders></FromFounders>
    <DropdownMenu></DropdownMenu>
    <Footer></Footer>
    </>
  )
}

export default Discover