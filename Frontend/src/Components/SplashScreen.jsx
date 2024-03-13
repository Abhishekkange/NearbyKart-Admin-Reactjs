import React from 'react'
import loadingAnim from './Animations/loadingbar.json'
import Lottie from 'react-lottie';
import './Bulk Add Section/HomePage.css'

function SplashScreen() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnim, // Pass the imported JSON data
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


  return (
    <div className="">
      <div style={{marginLeft:'550px',marginTop:'200px'}} className="flex">
        <h1 className="text-2xl nearbykart-txt text-blue-500">Nearby</h1>
        <h1 className="text-2xl nearbykart-txt2 text-blue-500">Kart</h1>


        </div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

export default SplashScreen