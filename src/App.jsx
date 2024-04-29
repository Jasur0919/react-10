import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './companent/home/Home'
import Food from './assets/food-header.png'
import AnimatedCursor from "react-animated-cursor"   

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
            <a href="home">Home</a>
            <a href="aboutUs">About Us</a>
            <a href="menu">Menu</a>
            <a href="features">Features</a>
            <a href="contactUs">Contact Us</a>
          </div>
          <button>Booking Now</button>
        </div>
      </div>
    </section>
     <Home/>
     
    </>
  )
}

export default App
