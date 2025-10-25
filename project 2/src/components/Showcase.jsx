import React from 'react'

const Showcase = () => {
  return (
    <section id ="showcase">
      <div>
        <video src="/videos/game.mp4" loop muted autoPlay playsInline/>
        <div className='mask'> 
            <img src="project 2/public/mask-logo.svg"  />
        </div>
      </div>
    </section>
  )
}

export default Showcase