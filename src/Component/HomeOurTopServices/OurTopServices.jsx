import React from 'react'
import './ourTopServices.scss'
import HomePageHeadText from '../HomePageHeadText/HomePageHeadText'
import OurTopServicesCards from '../OurTopServicesCards/OurTopServicesCards'

function OurTopServices() {
  return (
    <section id='our_top_services_container'>
        <div className="our_top_services_context">
            <p className='center_text_head'><HomePageHeadText ptext={"OUR TOPSERVICES"}></HomePageHeadText></p>
            <h1>Our Best Services</h1>
        </div>
        <div className="our_top_services_cards">
           <OurTopServicesCards></OurTopServicesCards>
        </div>

    </section>
  )
}

export default OurTopServices