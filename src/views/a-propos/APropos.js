import React from 'react';
import portraitAPropos from '../../assets/photos/portrait_mer_tambour.jpg';
import natureAPropos from '../../assets/photos/foret.jpg';

import './APropos.scss';

const APropos = () => {
  return (
    <div className="a-propos">
      <div className="a-propos__container">
        {/* Bloc 1*/}
        <div className="a-propos__row a-propos__row--reverse">
          <div className="a-propos__col a-propos__col--text">
            <div className="a-propos__intro">
              <p>
                Pendant longtemps, j'ai fait ce qu'on attendait de moi.
                <br />
                Je me suis adaptée, encore et encore — à mon entourage, à mon travail, à mes douleurs aussi.
                <br />
                J'ai traversé la perte, l'épuisement, l'obscurité…
                <br />
                Jusqu'au jour où mon corps m'a dit stop.
                <br />
                Tout s'est figé : mon souffle, mon énergie, mes repères.
                <br />
                <span className="a-propos__appel">
                  C'était en réalité un appel.
                  <br />
                  Un appel à me retrouver.
                  <br />À cesser de me suradapter, pour commencer à m'écouter.
                </span>
                <br />
                Pas à pas, je suis revenue à moi.
                <br />
                À mes besoins profonds, à mon rythme, à mon corps.
                <br />
                J'ai découvert la puissance du souffle, des vibrations, des gestes conscients.
                <br />
                Et avec eux, une autre façon d'habiter ma vie.
              </p>
            </div>
          </div>
          <div className="a-propos__col a-propos__col--image">
            <img src={portraitAPropos} alt="Portrait" className="a-propos__photo" />
          </div>
        </div>

        {/* Bloc 2*/}
        <div className="a-propos__row">
          <div className="a-propos__col a-propos__col--text" style={{ marginLeft: 'auto', marginRight: 0 }}>
            <div className="a-propos__transition">
              <p>
                Aujourd'hui, j'accompagne les femmes qui, comme moi autrefois, se sentent à bout.
                <br />
                Épuisées, perdues, tiraillées entre ce qu'elles donnent et ce qu'elles sont.
                <br />
                <span className="a-propos__espace">
                  Je ne soigne pas.
                  <br />
                  Je n'apporte pas de solution toute faite.
                  <br />
                  J'ouvre un espace.
                  <br />
                  Un espace pour se déposer, relâcher, respirer à nouveau.
                </span>
                <br />
                Si tu lis ces lignes, peut-être que ton corps aussi appelle à revenir vers toi.
                <br />
                <span className="a-propos__bienvenue">
                  Bienvenue.{' '}
                  <span role="img" aria-label="lune">
                    🌙
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bloc 3*/}
        <div className="a-propos__row a-propos__row--center">
          <div className="a-propos__col a-propos__col--image-text">
            <div
              className="a-propos__image-text"
              style={{
                backgroundImage: `url(${natureAPropos})`
              }}
            >
              <div className="a-propos__nature a-propos__nature--on-image">
                <p>
                  La nature a tenu une place importante dans ma reconstruction, j'y ai passé de longues heures.
                  <br />
                  Aussi, quand cela est possible, j'aime proposer des séances à ciel ouvert, en contact direct avec les
                  éléments.
                  <br />
                  Parce que le vivant en nous se réveille souvent au contact du vivant autour de nous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default APropos;
