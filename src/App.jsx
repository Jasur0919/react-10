import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './companent/home/Home'
import Food from './assets/food-header.png'
import AnimatedCursor from "react-animated-cursor" 
import Instagram from './assets/instagram.png'
import Facebook from './assets/facebook.png'
import Twitter from './assets/twitter.png'
import Youtbe from './assets/youtbe.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<AnimatedCursor innerStyle={{display: "none"}}/>


    <section className="navber">
      <div className="container">
        <div className="navbar_box">
          <div className="navbar_links">
            <img src={Food} alt="" />
            <a href="/home.jsx/#home">Home</a>
            <a href="/home.jsx/#about">About Us</a>
            <a href="/home.jsx/#menu">Menu</a>
            <a href="/home.jsx/#features">Features</a>
            <a href="/home.jsx/#contact">Contact Us</a>
          </div>
          <button>Booking Now</button>
        </div>
      </div>
    </section>
     <Home/>

     <section className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="footer_text">
            <img className='Footer_img1' src={Food} alt="" />
            <p>www.company name.com</p>
            <p>companyname@gmail.com</p>
            <p>Phone: +7 485-118-03-25</p>
          </div>
          <div className="footer_text">
            <h3>Home</h3>
            <p>Landingpage</p>
            <p>Documentation</p>
            <p>Referral Program</p>
            <p>UI & UX Design</p>
            <p>Web Desigin</p>
          </div>
          <div className="footer_text">
            <h3>Menu</h3>
            <p>Landingpage</p>
            <p>Documentation</p>
            <p>Referral Program</p>
            <p>UI & UX Design</p>
            <p>Web Desigin</p>
          </div>
          <div className="footer_text">
            <h3>Company</h3>
            <p>Landingpage</p>
            <p>Documentation</p>
            <p>Referral Program</p>
            <div className="footer_text_img">
              <img src={Instagram} alt="" />
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={Youtbe} alt="" />
            </div>
          </div>
        </div>
      </div>
     </section>
     
    </>
  )
}

export default App
