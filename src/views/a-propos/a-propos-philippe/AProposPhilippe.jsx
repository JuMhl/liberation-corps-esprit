import React from 'react';
import SEO from '@/components/seo/SEO.jsx';
import './AProposPhilippe.scss';

const AProposPhilippe = () => (
  <div className="a-propos-philippe">
    <SEO
      title="À propos de Philippe"
      description="Parcours, valeurs et approche de Philippe pour accompagner via phytothérapie, lithothérapie et géobiologie."
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'À propos Philippe',
        description: 'Praticien en accompagnement énergétique.'
      }}
    />
    <div className="a-propos-philippe__container">
      <span className="main-title">À Propos de Philippe</span>

      <section className="a-propos-philippe__section">
        <div className="a-propos-philippe__block">
          <p>
            Suite à un accident de la vie, j'ai développé une hypersensibilité, des ressentis, des sensations.
            <br />
            A 10 ans on a du mal à comprendre.
            <br />
            Je me suis vite senti différent et pendant des années j'ai plutôt essayé de cacher voir d'oublier ce "don".
            <br />
            Il y a peu j'ai repris conscience de tout ça, mon lien avec la nature, les objets, les personnes, mon
            ressenti et tout est revenu.
          </p>
        </div>
      </section>

      <section className="a-propos-philippe__section">
        <div className="a-propos-philippe__block">
          <p>
            J'ai donc commencé à apprendre, à lire sur les sujets qui me touchent, pour les comprendre, les adapter, les
            améliorer, en phytothérapie, lithothérapie, géobiologie, géométrie sacrée, chamanisme, l'énergie et les
            relations à l'énergie et la nature.
          </p>
        </div>
      </section>

      <section className="a-propos-philippe__section">
        <div className="a-propos-philippe__block">
          <p>
            Par souci de compréhension, j'ai étudié la PNL, les neurosciences, l'hypnose, mais aussi les sciences
            occultes et les religions.
            <br />
            <span className="a-propos-philippe__emphasis">
              Pour pouvoir aider, il faut comprendre.
              <br />
              Les liens entre toutes ces sciences sont flagrants, mais surtout on peut adapter son aide selon les cas,
              les lieux et apporter l'expertise, l'aide, l'accompagnement nécessaire.
            </span>
          </p>
        </div>
      </section>

      <section className="a-propos-philippe__section a-propos-philippe__section--closing">
        <div className="a-propos-philippe__block">
          <p>
            Ces années d'études qui continuent encore m'ont convaincu de la transmission de ces savoirs au plus grand
            nombre, ouvrir les esprits et leur permettre de ressentir comme on devrait tous ressentir.
            <br />
            Recréer ce lien à soi et aux autres, s'ouvrir au monde pour mieux l'appréhender et le comprendre.
          </p>
        </div>
      </section>
    </div>
  </div>
);

export default AProposPhilippe;
