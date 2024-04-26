import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/components/Header';
import ImgCarousel from '@/components/Carousel';
import Colors from '@/components/Colors';
import Footer from '@/components/Footer';
import OpenLayersMap from '@/components/Map';
import FacebookPagePlugin from '@/components/FacebookPagePlugin';
import Script from 'next/script';
import ShowLocationButton from '@/components/LocationButton';
import backgroundImage from './img/backgroundImage.jpg'

export default function Home() {
  const nonce = Math.random().toString(36).substring(7);

 

  return (
    
    <div className="" style={{backgroundImage: `url(${backgroundImage.src})`,backgroundSize:'cover',backgroundPosition: 'center',minHeight: '100vh',position: 'relative'}}>
      <Script
        strategy="lazyOnload"
        src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v12.0"
        nonce= {nonce}
      />
      
      <Header />
      <main >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='mt-4 border border-1 border-dark shadow'><ImgCarousel /></div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
            <div className="col mb-4">
              <div className="card shadow" style={{ backgroundColor: Colors.color7,color:'white'}}>
                <h1 className="card-title text-center cardTitleStyle ">Colores Serranos</h1>
                <p className="card-content p-2 text-center cardpstyle">Colores Serranos es el lugar de descanso y recreación ideal para quienes deciden hacer un paréntesis en su vida cotidiana. Los invita a disfrutar de sus cabañas de estilo minimalistas diseñadas como suites para 2 personas -adultas- y construidas con total independencia una de la otra en 2 hectáreas de parque.</p>
              </div>
            </div>
            <div className="col mb-4 ">
              <div className="card shadow" style={{backgroundColor: Colors.color7, color:'white'}}>
                <h1 className="card-title text-center cardTitleStyle ">Ubicación</h1>
                <p className="card-content p-2 text-center cardpstyle">Ubicado a solo 7 Km de La Falda y a 75 km de Córdoba capital, con vista panorámica a las Sierras Chicas, cerca del río San Francisco, Colores Serranos nace para ofrecerles una cálida estadía en las sierras cordobesas.</p>
              </div>
            </div>
            <div className="col mb-4 ">
              <div className="card shadow" style={{ backgroundColor: Colors.color7, color:'white' }}>
                <h1 className="card-title text-center cardTitleStyle ">El complejo cuenta con:</h1>
                <ul className="list-unstyled cardpstyle text-center ">
                  <li>Piscina con solarium</li>
                  <li>Quincho con asadores</li>
                  <li>Casa de Té</li>
                  <li>Wi-Fi</li>
                </ul>
              </div>
            </div>
            <div className="col mb-4 ">
              <div className="card" style={{ backgroundColor: Colors.color7, color:'white'}}>
                <h1 className="card-title text-center cardTitleStyle">Mapa</h1>
                <div className="card bg-secondary text-white shadow"><OpenLayersMap></OpenLayersMap></div>
                <ShowLocationButton></ShowLocationButton>
              </div>
             
            </div>
            <div className="col mb-4 d-flex align-content-center justify-content-center">
              
                <FacebookPagePlugin></FacebookPagePlugin>
               
              
             </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
