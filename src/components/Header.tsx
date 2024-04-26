import 'bootstrap/dist/css/bootstrap.css';
import Colors from './Colors';
import Link from 'next/link';
import logo from '../app/img/logo.png';



const Header = () => {
  return (
    <header className='navbarStyle shadow bg-color' >
      <Link className='p-0 text-decoration-none titlelogostyle d-flex align-items-center' style={{color:Colors.color3}} href='/'><img className='imglogostyle' src={logo.src} alt='Logo'></img>Colores Serranos</Link>
      <ul className='navbarContainerStyle'>
        <li className='listItems'><Link className='navbarListItems' style={{color:Colors.color3}} href='/complejo'>Complejo</Link></li>
        <li className='listItems'><Link className='navbarListItems' style={{color:Colors.color3}} href='/cabañas'>Las Cabañas</Link></li>
        <li className='listItems'><Link className='navbarListItems' style={{color:Colors.color3}} href='/tarifas'>Tarifas y Condiciones</Link></li>
        <li className='listItems'><Link className='navbarListItems' style={{color:Colors.color3}} href='/about'>Contacto</Link></li>
       
      </ul>
    </header>
  )
}

export default Header
