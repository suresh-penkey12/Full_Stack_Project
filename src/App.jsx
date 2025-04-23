import React from 'react'
import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Home from './Pages/Home'
import Discover from './Pages/Discover'
import Jobs from './Pages/Jobs'
import Recuiting from './Pages/Recuiting'
// import Recruit_Post from './Pages/Recruit_Post'
// import Sidebar from './Components/profile/sidebar'
// import Home from './Components/profile/home'
// import Profile from './Components/profile/profile'
// import Applied from './Components/profile/Applied'
// import Jobs from './Components/profile/Jobs'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/discover' element={<Discover></Discover>}></Route>
      <Route path='/jobs' element={<Jobs></Jobs>}></Route>
      <Route path='/recruiting' element={<Recuiting></Recuiting>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <Recruit_Post></Recruit_Post>  */}
    {/* <Sidebar></Sidebar>
      <div className="ml-20 md:ml-24 p-6 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs></Jobs>}></Route>
          <Route path="/applied" element={<Applied />} />
        </Routes>
      </div> */}
    </>
  )
}

export default App
