import React from 'react'
import './App.css'
import { TopNav, SidebarNavigation, Recommended, NewAndUpcoming, PopularShows, AnimatedAdventures } from './componentExports/exports'
import { Carousel } from 'react-responsive-carousel'
import first from './assets/first.jpg'
import sec from './assets/sec.jpg'
import third from './assets/third.jpg'

const App = () => {
  return (
    <div className=' h-auto w-full bg-neutral-950 font-poppins'>
      <TopNav />
      <div className='flex '>
        <SidebarNavigation />
        <div className='flex flex-col mt-14'>
          <Carousel infiniteLoop dynamicHeight autoPlay={true} interval={2000}>
            <img src={first} alt="" className=' h-2/3' />
            <img src={sec} alt="" className=' h-2/3' />
            <img src={third} alt="" className=' h-2/3' />
          </ Carousel>
          <Recommended />
          <AnimatedAdventures />
          <PopularShows />
          <NewAndUpcoming />
        </div>
      </div>
    </div>
  )
}

export default App
