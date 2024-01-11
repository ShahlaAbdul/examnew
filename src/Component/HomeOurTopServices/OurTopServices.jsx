import React, { useContext } from 'react'
import './ourTopServices.scss'
import HomePageHeadText from '../HomePageHeadText/HomePageHeadText'
import OurTopServicesCards from '../OurTopServicesCards/OurTopServicesCards'
import { SearchContext } from '../../UseContext/SearchContext';

function OurTopServices() {
   const {  searchbyFilter } = useContext(SearchContext);
  return (
    <section id="our_top_services_container">
      <div className="our_top_services_context">
        <p className="center_text_head">
          <HomePageHeadText ptext={"OUR TOPSERVICES"}></HomePageHeadText>
        </p>
        <h1>Our Best Services</h1>
        <div>
          <input type="text" placeholder='search' onChange={(e) => searchbyFilter(e)} />
        </div>
      </div>

      <div className="our_top_services_cards">
        <OurTopServicesCards />
      </div>
    </section>
  );
}

export default OurTopServices