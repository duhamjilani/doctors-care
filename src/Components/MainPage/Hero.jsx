import React from 'react'
import './Hero.css'
import pic from '../../Pictures/Hero.jpg'
import './WhyUs'
import './Apply'
import WhyUs from './WhyUs'
import Apply from './Apply'
import Reviews from './Reviews'
import WriteFeedback from './WriteFeedback'
const Hero = () => {
  return (
    <div>
     <div
        className="hero "
        style={{
          backgroundImage: `url(${pic})`,
          minHeight: "80vh",
          backgroundSize: "cover",
        }}
      >
<div className='layer'>
  <h1> About us</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam mollitia 
    est quisquam quam ullam suscipit sapiente accusantium quasi praesentium!
     Rem mollitia quod aliquid ducimus ut, magni laudantium numquam modi? Lorem ipsum dolor 
     sit amet consectetur adipisicing elit. Iusto, voluptatibus. Debitis cumque, veniam, repudiandae tempore
      reprehenderit iusto animi consectetur voluptas molestias quam accusamus placeat
      amet nisi ex rerum veritatis. Asperiores.</p>
</div>
      </div>
        <WhyUs/>
<Apply/>   
<Reviews/>   
<WriteFeedback/>
    </div>
  )
}

export default Hero
