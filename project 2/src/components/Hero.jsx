import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1;
  }, []);


  return (
    <section id="hero">
      <div>
        <h1>
            MacBook Pro
        </h1>
        <img src="/title.png" alt="MacBook Pro title" />
      </div> 

  <video ref={videoRef} src="/videos/hero.mp4" autoPlay loop muted playsInline />

      <button>Buy </button>

  <p>From $1599 or $123 for 12 months</p>

    </section>
  )
}

export default Hero
