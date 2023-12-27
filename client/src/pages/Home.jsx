import React from 'react'
import homeBackground from './../assets/images/home-background.jpg';
import homeBackground2 from './../assets/images/home-background2.jpg';
import homeBackground3 from './../assets/images/home-background3.jpg';
import homeBackground4 from './../assets/images/home-background4.jpg';
import homeBackground5 from './../assets/images/home-background5.jpg';
import homeBackground6 from './../assets/images/home-background6.jpg';
import Header from '../components/Header';


export default function Home() {
  return (
    <div className='h-screen relative flex flex-col items-center ' style={{
      backgroundImage: `url(${homeBackground5})`,
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className='relative w-full '>
        <Header />
      </div>
      
    </div>

    
  )
}
