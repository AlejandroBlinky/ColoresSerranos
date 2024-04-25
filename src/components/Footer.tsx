import React from 'react'
import Colors from './Colors'
import instlogo from '../app/img/instagram.png'
import whatsapplogo from '../app/img/whatsapp.png'
import facebooklogo from '../app/img/facebook.png'
import mailgif from '../app/img/mailgif.gif'

const Footer = () => {
  return (
    <div className='footerStyle shadow' style={{backgroundColor:Colors.color6}}>
        <div className='container-fluid'>

            <div className='footercontainerstyle'>
             |<div className='footerdivs'><a><img className='footerlogos shadow ' src={whatsapplogo.src} alt='whats'></img></a>
             <p className='text-white fs-4 '>Chateá con nosotros.</p></div>

             |<div className='footerdivs'><a><img className='footerlogos shadow  ' src={instlogo.src} alt='insta'></img></a>
             <p className='text-white fs-4 '>Instagram</p></div>

             <div className='footerdivs'><a><img className='footerlogos shadow ' src={facebooklogo.src} alt='facebook'></img></a>
             <p className='text-white fs-4 '>Facebook</p></div>

            <div className='footerdivs'><a><img className='footerlogos shadow ' src={mailgif.src} alt='email'></img></a>
            <p className='text-white  fs-4'>coloreserranos@gmail.com</p></div>
            </div>
        </div>
    </div>
  )
}

export default Footer
