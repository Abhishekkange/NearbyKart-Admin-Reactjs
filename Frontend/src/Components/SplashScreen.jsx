import React from 'react'
import loadingAnim from './Animations/loading.json'
import Lottie from 'react-lottie';

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
    <div>
      
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

export default SplashScreen
