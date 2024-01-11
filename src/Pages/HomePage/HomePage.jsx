import React from 'react';
import  './homePage.scss';
import WeHelptoGrow from '../../Component/WeHelpToGrow/WeHelptoGrow';
import OurTopServices from '../../Component/HomeOurTopServices/OurTopServices';
import OurBestServices from '../../Component/HomeOurBestServices/OurBestServices';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function HomePage() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
      </HelmetProvider>
      <WeHelptoGrow></WeHelptoGrow>
      <OurTopServices></OurTopServices>
      <OurBestServices></OurBestServices>
    </div>
  );
}

export default HomePage