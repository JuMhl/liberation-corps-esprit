import React from 'react';
import SEO from '@/components/seo/SEO.jsx';
import logo from '@/assets/logos/logo_nu_fond_transparent.png';
import portraitAcceuil from '@/assets/photos/portrait-zen-esterel.jpg';
import aquarelle from '@/assets/photos/aquarelle.jpg';
import StageBanner from '@/components/home/stage-banner/StageBanner.jsx';
import CardsAccompaniement from '@/components/home/cards-accompaniement/CardsAccompaniement.jsx';
import NatureSession from '@/components/home/nature-session/NatureSession.jsx';
import Caroussel from '@/components/caroussel/Caroussel.jsx';
import Button from '@/components/button/Button.jsx';
import './Home.scss';
import img1 from '@/assets/temoignages/witness1.jpg';
import img2 from '@/assets/temoignages/witness2.jpg';
import img3 from '@/assets/temoignages/witness3.jpg';
import img4 from '@/assets/temoignages/witness4.jpg';
import img5 from '@/assets/temoignages/witness5.jpg';
import img6 from '@/assets/temoignages/witness6.jpg';
const imagesCarousel = [img1, img2, img3, img4, img5, img6];
const Home = () => (
  <div className="home">
    <SEO
      title="Accueil"
      description="Sonothérapie, relaxation et accompagnements bien-être à Fréjus / Saint-Raphaël pour réduire le stress, apaiser le mental et retrouver l'harmonie corps-esprit."
      image="/logo-2025.png"
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: "Libération du Corps et de l'Esprit",
          url: 'https://liberationducorpsetdelesprit.fr',
          image: 'https://liberationducorpsetdelesprit.fr/logo-2025.png',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Fréjus',
            postalCode: '83600',
            addressCountry: 'FR'
          },
          areaServed: ['Fréjus', 'Saint-Raphaël', 'Var'],
          description: 'Sonothérapie, relaxation, voyage sonore et massage bol tibétain à Fréjus / Saint-Raphaël.',
          serviceOffered: [
            { '@type': 'Service', name: 'Relaxation bio-dynamique' },
            { '@type': 'Service', name: 'Voyage sonore méditatif' },
            { '@type': 'Service', name: 'Massage au bol tibétain' },
            { '@type': 'Service', name: 'Accompagnement gestion du stress' }
          ]
        }
      ]}
    />
    <div className="home-header">
      <div className="home-header-logo-title-text">
        <div className="home-header-logo-title">
          <img src={logo} className="home-logo" alt="logo" />
          <span className="home-title">Libération du corps et de l'esprit</span>
        </div>
        <div className="home-header-text">
          <p>
            Spécialisée dans la gestion du <strong>stress</strong> et l'accompagnement des personnes en quête
            d'apaisement, j'accueille celles qui traversent une période de <strong>mal-être</strong>, de{' '}
            <strong>fatigue émotionnelle</strong> ou de <strong>perte de sens</strong>, et je les guide avec douceur{' '}
            <strong>vers un mieux-être global</strong>.
          </p>
          <p>
            Chaque rendez-vous est une bulle de présence,{' '}
            <strong>une pause bienveillante pour revenir à soi, relâcher les tensions</strong> et laisser émerger ce
            qui a besoin d'être entendu, accueilli et transformé.
          </p>
        </div>
      </div>
      <div className="home-header-photo-wrapper">
        <img src={portraitAcceuil} className="home-photo" alt="Catherine Charleux au bord de la mer" />
      </div>
    </div>
    <div className="home-header-contact-btn">
      <Button to="/contact" variant="primary">Contactez-moi</Button>
    </div>
    <div
      className="home-aquarelle-bg-section"
      style={{
        backgroundImage: `url(${aquarelle})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="home-aquarelle-bg-text">
        <p>
          Il arrive un moment où l'on ne sait plus très bien où l'on va.
          <br />
          Où l'on porte trop, où l'on respire à moitié.
          <br />
          Dans ces instants-là, je tends la main.
        </p>
        <p>
          <strong>Mon rôle :</strong> ouvrir un passage doux entre le tumulte et la paix.
          <br />
          Un espace où l'on peut, enfin, se retrouver.
        </p>
        <p>Je guide les femmes en période de fatigue, de transition ou de trop-plein, vers un mieux-être global.</p>
        <p>
          Mon accompagnement les aide à relâcher les tensions du corps, à apaiser le mental, et à se reconnecter à qui
          elles sont profondément.
        </p>
        <p>
          Parce que j'ai moi-même traversé l'épuisement et le désalignement, j'ai à cœur de créer un espace doux, où
          l'on peut enfin respirer, déposer, et revenir à soi.
        </p>
        <p className="signature">Catherine Charleux</p>
      </div>
    </div>
    <CardsAccompaniement />
    <NatureSession />
    <StageBanner />
    <Caroussel images={imagesCarousel} title="Témoignages" />{' '}
  </div>
);
export default Home;
