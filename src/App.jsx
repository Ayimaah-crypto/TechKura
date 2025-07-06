import Navbar from "./components/Navbar"
import Works from "./components/Works"
import Goals from "./components/Goals"
import Form from "./components/Form"
import { useState, useEffect } from "react"
import Caroussel from "./components/Caroussel"
import vid from "./assets/vid1.mp4"
import img3 from "./assets/images/web3.jpg"
import img11 from "./assets/images/web2.jpg"
import img1 from "./assets/images/electronic1.jpg"
import img2 from "./assets/images/electronic 2.jpg"
import img4 from "./assets/images/tronics4.jpg"
import img5 from "./assets/images/popular-2.jpg"
import img6 from "./assets/images/popular-3.jpg"
import img7 from "./assets/images/live-2.jpg"
import img8 from "./assets/images/asset 1.png"
import img9 from "./assets/images/asset 0.png"
import img0 from "./assets/images/live-4.jpg"
import Footer from "./components/Footer"
import Scale from "./components/Scale"
export default function App() {
     

  return (
    <>
    <Navbar/>
      <div className="bg-[#F6F6F6]">
        <div>
          <Caroussel/>
        </div>
         <div className="bg-[#F6F6F6] px-4 py-10" id="aboutUs">
 <h1 className="text-4xl font-bold text-center mb-9">ABOUT US</h1>

<div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 gap-10">
  {/* Video Section */}
  <video
    src={vid}
    loop
    autoPlay
    muted
    className="w-full md:w-1/2 h-auto object-cover rounded-2xl"
  />

  {/* Text and Images Section */}
  <div className="w-full md:w-1/2 flex flex-col gap-6">
    <p className="text-lg md:text-xl text-gray-700">
      Teckura is dedicated to making tech work seamlessly for everyone. Whether it’s repairing electronic devices, connecting users with skilled electricians, or offering smart electronics solutions, we bring quality and reliability to your doorstep. Trust us to keep your digital and electrical world running smoothly.
    </p>

    {/* Images Section */}
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <img src={img8} alt="Service 1" className="w-32 sm:w-40 rounded-xl shadow-md" />
      <img src={img9} alt="Service 2" className="w-32 sm:w-40 rounded-xl shadow-md" />
    </div>
  </div>
</div>


  {/* Services Section */}
  <div className="mt-20 max-w-7xl mx-auto" id="services">
    <h1 className="text-4xl text-center font-bold mb-4">OUR SERVICES</h1>
    <p className="text-center text-gray-600 font-medium text-wrap mb-10">
      Transforming ideas into reality: Expert solutions in Website Development, Mobile app creations,
      <br />
      AI-infused electronics and immersive game design. Let’s bring your vision to life!
    </p>

    {/* Web Development */}
    <div className="mb-12">
      <h2 className="text-xl font-medium mb-6">WEB DEVELOPMENT</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#EEEDF3] p-4 rounded-lg shadow">
          <img
            src={img3}
            alt="Web Dev"
            className="w-full h-60 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <p className="text-center font-bold mt-2">Website Development</p>
        </div>
        <div className="bg-[#EEEDF3] p-4 rounded-lg shadow">
          <img
            src={img11}
            alt="Mobile Apps"
            className="w-full h-60 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <p className="text-center font-bold mt-2">Mobile Apps</p>
        </div>
      </div>
    </div>

    {/* TECHTRONICS Section */}
    <div className="mb-12">
      <h2 className="text-xl font-medium mb-6">TECHTRONICS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[img1, img2, img4, ].map((img, idx) => (
          <div key={idx} className="bg-[#EEEDF3] p-4 rounded-lg shadow">
            <img
              src={img}
              alt="Techtronics"
              className="w-full h-60 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <p className="text-center font-bold mt-2">AI-infused Electronics</p>
          </div>
        ))}
      </div>
    </div>

    {/* Games Section */}
    <div>
      <h2 className="text-xl font-medium text-center mb-6">GAMES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {[img5, img6, img7, img0].map((img, idx) => (
          <div key={idx} className="bg-[#EEEDF3] p-4 rounded-lg shadow">
            <img
              src={img}
              alt="Game"
              className="w-full h-60 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <p className="text-center font-bold mt-2">Game Experience</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

         <div>
          <div>
             <Works/>
          </div>
           <div>
            <Goals/>
           </div>
           <div>
             <Scale/>
           </div>
           <div>
            <Form/>
           </div>
           <div>
            <Footer/>
           </div>
          
         </div>
      </div>
      
    </>
  )
}


