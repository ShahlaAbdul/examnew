import React from 'react';
import  './homePage.scss';
import WeHelptoGrow from '../../Component/WeHelpToGrow/WeHelptoGrow';
import OurTopServices from '../../Component/HomeOurTopServices/OurTopServices';
import OurBestServices from '../../Component/HomeOurBestServices/OurBestServices';

function HomePage() {
  return (
    <div>
        <WeHelptoGrow></WeHelptoGrow>
        <OurTopServices></OurTopServices>
        <OurBestServices></OurBestServices>
    </div>
  )
}

export default HomePage