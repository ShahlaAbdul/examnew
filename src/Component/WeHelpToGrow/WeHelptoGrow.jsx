import React from 'react'
import './weHelptoGrow.scss'
import HomePageHeadText from '../HomePageHeadText/HomePageHeadText'

function WeHelptoGrow() {
  return (
    <>
        <section id='we_help_to_grow'>
          <div className='center_text_container'>
          <div className="center_text">
            <p className='center_text_head'><HomePageHeadText ptext={"COMMITTED TO SUCCED"}></HomePageHeadText></p>
            <h1>We help to grow your business</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia facilis expedita us. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, ex?</p>
            <div className="button">
              <span>  OUR SERVICES</span>
            </div>
          </div>
          </div>
        </section>
    </>
  )
}

export default WeHelptoGrow