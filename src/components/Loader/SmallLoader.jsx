import React from 'react'
import Lottie from 'react-lottie'
import defaultLoader from './defaultLoader.json'

const SmallLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: defaultLoader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div className='w-5 h-5 pr-1 inline-block'>
      <Lottie options={defaultOptions} />
    </div>
  )
}

export default SmallLoader
