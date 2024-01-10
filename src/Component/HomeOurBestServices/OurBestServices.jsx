import React from 'react'
import './ourBestServices.scss'
import HomePageHeadText from '../HomePageHeadText/HomePageHeadText'

function OurBestServices() {
  return (
    <section id='our_best_services_container'>
        <div className="our_best_services_container">
            <div className="best_services_image">
                <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png" alt="" />
            </div>
            <div className="our_top_services">
               <p className='head_text'> <HomePageHeadText ptext={"OUR TOP SERVICES"}></HomePageHeadText></p>
                <h1 className='h1text'>OUR BEST SERVICES</h1>
                <p>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>

            <p className='ptext2'>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</p>

            <p className='button'>MORE ABOUT US</p>
            </div>
            
        </div>
    </section>
  )
}

export default OurBestServices