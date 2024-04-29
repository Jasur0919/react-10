import React, { Component } from 'react'
import './Home.css'
import Kaklic from '../../assets/kaklik-home.jpg'
import Fature1 from '../../assets/fature-1.png'
import Fature2 from '../../assets/fature-2.png'
import Fature3 from '../../assets/fature-3.png'
import About1 from '../../assets/about_woman.png'
import Yulduz1 from '../../assets/menu-yulduz-1.png'
import Yulduz2 from '../../assets/menu-yulduz-2.png'
import Yulduz3 from '../../assets/menu-yulduz-3.png'
import Yulduz4 from '../../assets/menu-yulduz-4.png'
import Yulduz5 from '../../assets/menu-yulduz-5.png'
import Yulduz6 from '../../assets/menu-yulduz-6.png'
import Plus from '../../assets/menu++++.png'
import Menu1 from '../../assets/menu-1.png'
import Menu2 from '../../assets/menu-2.png'
import Menu3 from '../../assets/menu-3.png'
import Menu4 from '../../assets/menu-4.png'
import Menu5 from '../../assets/menu-5.png'
import Menu6 from '../../assets/menu-6.png'
import Testimonial from '../../assets/testimonial.png'


let data = [
  {
    img: Fature1,
    title: "Food Delivery",
    par: "It can be a very secure path to earn good money and make you very successful creative entrepreneur."
  },
  {
    img: Fature2,
    title: "Food Delivery",
    par: "It can be a very secure path to earn good money and make you very successful creative entrepreneur."
  },
  {
    img: Fature3,
    title: "Super Taste",
    par: "It can be a very secure path to earn good money and make you very successful creative entrepreneur."
  }
]

const baza = [
  {
    img: Menu1,
    price: [" Vagie Muffen", "16$"],
    par: "There are many things are needed to start the Fast Food Business.",
    images: [Plus, Yulduz1]
  },
  {
    img: Menu2,
    price: [" Slads", "12$"],
    par: "There are many things are needed to start the Fast Food Business.",
    images: [Plus, Yulduz2]
  },
  {
    img: Menu3,
    price: [" Burger", "10$"],
    par: "There are many things are needed to start the Fast Food Business.",
    images: [Plus, Yulduz3]
  },
  {
    img: Menu4,
    price: [" Delmonico Steak dish", "14$"],
    par: "There are many things are needed to start the Fast Food Business.",
    images: [Plus, Yulduz4]
  },
  {
    img: Menu5,
    price: [" Egg Masala", "9$"],
    par: "There are many things are needed to start the Fast Food Business.",
    images: [Plus, Yulduz5]
  },
  {
    img: Menu6,
    price: [" Peach Melba dish", "15$"],
    par: "There are many things are needed to start the Fast Food Business.",
    images: [Plus, Yulduz6]
  }
]

export default class Home extends Component {
  render() {

    
    return (
      <>
        <section className="home">
          <div className="container">
            <div className="home_box">
              <div className="home_text">
                <h1>Making time a good time by making food the good food.</h1>
                <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                <div className="home_text_button">
                  <button>Order Now</button>
                  <button>Food Detailes</button>
                </div>
              </div>
              <div className="home_img">
                <img src={Kaklic} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="fature">
          <div className="container">
            <h3 className='fature_h3'>Features</h3>
            <h1>Food with a New Passion</h1>
            <div className="fature_box">

              {
                data?.map((e, index) => (
                  <div key={index} className="fature_card">
                    <img src={e.img} alt="" />
                    <h3>{e.title}</h3>
                    <p>{e.par}</p>
                 </div> 
                ))
              }
              {/* <div className="fature_card">
                <img src={Fature1} alt="" />
                <h3>Food Delivery</h3>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
              </div> */}
              {/* <div className="fature_card">
                <img src={Fature} alt="" />
                <h3>Food Delivery</h3>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
              </div>
              <div className="fature_card">
                <img src={Fature} alt="" />
                <h3>Food Delivery</h3>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
              </div> */}
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div className="about_box">
              <div className="about_img">
                <img src={About1} alt="" />
              </div>
              <div className="about_text">
                <h3>About Us</h3>
                <h2>Food Stalls with Persons but  to  Product marketing plane
                    catlogues etc to. </h2>
                  <p>There are many things are needed to start the Fast Food    Business. You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective.</p>

                  <button>Read More</button>
              </div>
            </div>
          </div>
        </section>

        <section className="menu">
          <div className="container">
            <div className="menu_par">
              <h3>MENU</h3>
              <h1>Food with a New Passion</h1>
              <p className='lll'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
            </div>
            <div className="menu_box">

              {
                baza?.map((el, ix) => (
                  <div key={ix} className="menu_card">
                  <img src={el.img} alt="" />
                 <div className="menu_card_text">
                 <span className='menu_card_span '> 
                  {
                    el?.price?.map((e, indx) => (
                      <div key={indx}> 
                      <h2>{e}</h2>
                       </div>

                    ))
                  }
                    </span>
                      <p>{el.par}</p>
                      <div className="menu_card_img">
                      {
                        el?.images?.map((ev, elx) => (
                          <div key={elx} className="menu_card_img">
                            <img src={ev} alt="" />
                            {/* <img src={Yulduz1} alt="" /> */}
                          </div>

                        ))
                      }
                       </div>
                 </div>
                </div>
                ))

              }
                
  
            </div>
          </div>
        </section>

        <section className="info">
          <div className="container">
            <div className="info_box">
              <h3 className='info_h3-1'>Testimonial</h3>
              <h1>Making Food great again and again</h1>
              <p className='inpor_par1'>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>
              <img className='info_img1' src={Testimonial} alt="" />
              <p className='info_par2'>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>
              <img className='info_img2' src={Yulduz5} alt="" />
              <h3 className='info_h3-2'>Augusta W. Reynoso</h3>
              <p className='info_par3'>UI&UX DeSIGNER</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <div className="contact_box">
              <h3>CONTACT</h3>
              <h1>Food Stalls with Persons but also specialized equipment, Skills to manage.</h1>
              <div className="contact_input">
                <input type="text" placeholder='Enter your message' />
                <button>Send</button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
