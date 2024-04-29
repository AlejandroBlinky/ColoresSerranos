import React from 'react'
import instlogo from '../app/img/instagram.png'
import whatsapplogo from '../app/img/whatsapp.png'
import facebooklogo from '../app/img/facebook.png'
import mailgif from '../app/img/mailgif.gif'

const SocialMedia = () => {
  return (
    <div className='SocialMediaContainer' style={{backgroundColor:'rgba(255,255,255,0.0001)'}}>
        

            <div className='socialmediadiv'><a href='https://api.whatsapp.com/send/?phone=543541661399&text=Hola%21+Quisiera+obtener+informaci%C3%B3n+de+las+caba%C3%B1as&type=phone_number&app_absent=0'><img className='socialmedialogos' src={whatsapplogo.src} alt='whats'></img></a>
             

             <div className='socialmediadiv'><a  href='https://www.instagram.com/coloreserranos'><img className='socialmedialogos   ' src={instlogo.src} alt='insta'></img></a>
             </div>

             <div className='socialmediadiv'><a href='https://www.facebook.com/coloreserranos'><img className='socialmedialogos  ' src={facebooklogo.src} alt='facebook'></img></a>
            </div>

            <div className='socialmediadiv'><a href='mailto:coloreserranos@gmail.com'><img className='socialmedialogos  ' src={mailgif.src} alt='email'></img></a>
           </div>
           
        </div>
    </div>
  )
}

export default SocialMedia