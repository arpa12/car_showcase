"use client";
import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleScroll=()=>{

    }
  return (
    <div className="hero">
        <div>
            <h1 className="hero__title">Find, book or rent a car -- quickly and easily !</h1>
            <p className="hero__subtitle">Streamline your car rental experience with our effortless booking process.</p>
        
        <CustomButton
         title="Explore Cars"
         containerStyles="bg-primary-blue text-white w-fit rounded-full mt-5"
         handleClick={handleScroll}
        />
        </div>
        <div className="hero__image__container">
          <div className="hero__image">
            <img src="/hero.png" alt="hero"  className="object-contain" />
            </div>

            <div className="hero__image-overlay"/>
          </div>
    </div>
  )
}

export default Hero