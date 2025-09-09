import React, { useMemo } from 'react';
import SEO from '@/components/seo/SEO.jsx';
import './KateriCreations.scss';
import Caroussel from '@/components/caroussel/Caroussel.jsx';

const creations = [
  'Attrapes-rêves tissés avec intention, pour protéger le sommeil et filtrer les énergies.',
  'Sacs médecine contenant des éléments symboliques : pierres, plantes, messages intuitifs.',
  'Pierres peintes à la main, à poser chez soi ou à emporter avec soi.',
  'Créations sur mesure, à la demande, selon ton énergie du moment ou une intention particulière.'
];
const humanize = (fileName) => {
  const base = fileName
    .replace(/^[^/\\]*[/\\]/, '')
    .replace(/\.[a-zA-Z0-9]+$/, '')
    .replace(/[._-]+/g, ' ')
    .trim();
  return base.charAt(0).toUpperCase() + base.slice(1);
};

const KateriCreations = () => {
  // Charge toutes les images du dossier et répartit par catégories
  const categories = useMemo(() => {
    const all = import.meta.glob('@/assets/katericreations/*.{png,jpg,jpeg,svg}', { eager: true });
    const byCat = {
      attrapes: [],
      sacs: [],
      pierres: []
    };
    Object.entries(all).forEach(([path, mod]) => {
      const src = mod?.default || mod; // vite expose l'URL via default
      const name = path.split('/').pop() || '';
      const lower = name.toLowerCase();
      const alt = humanize(name);
      const item = { src, alt };
      if (lower.includes('attrape') || lower.includes('dream')) byCat.attrapes.push(item);
      else if (lower.includes('sac') || lower.includes('medecine') || lower.includes('médecine')) byCat.sacs.push(item);
      else if (lower.includes('pierre') || lower.includes('peinte')) byCat.pierres.push(item);
      else byCat.attrapes.push(item); // fallback
    });
    // Ordonne par nom pour une présentation stable
    const sortFn = (a, b) => a.alt.localeCompare(b.alt, 'fr');
    byCat.attrapes.sort(sortFn);
    byCat.sacs.sort(sortFn);
    byCat.pierres.sort(sortFn);
    return [
      {
        key: 'attrapes',
        title: 'Attrapes-rêves',
        description:
          "Tissés avec intention, ornés de plumes et matières naturelles, pour veiller sur le sommeil et la clarté de l'esprit.",
        images: byCat.attrapes
      },
      {
        key: 'sacs',
        title: 'Sacs médecine',
        description: 'Petits sacs pouvant contenir pierres, plantes et messages intuitifs pour soutenir une intention.',
        images: byCat.sacs
      },
      {
        key: 'pierres',
        title: 'Pierres peintes',
        description: 'Symboles peints à la main pour ancrer une énergie et embellir un espace de vie.',
        images: byCat.pierres
      }
    ];
  }, []);

  return (
    <div className="kateri-creations">
      <SEO
        title="Kateri Creations"
        description="Créations vibratoires artisanales : attrapes-rêves, sacs médecine, pierres peintes – prolongement énergétique des accompagnements bien-être."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWorkSeries',
          name: 'Kateri Creations',
          description: 'Objets vibratoires artisanaux.'
        }}
      />
      <div className="kateri-creations-container">
        <span className="main-title">Kateri Creations</span>
        <div className="kateri-creations-content">
          <h3>✨ Créations intuitives inspirées des sagesses ancestrales</h3>
          <p>
            Il y a des élans qui viennent du cœur. Des gestes nés du silence, du souffle, d'un appel intérieur.
            <br />
            <br />
            Lors d'un voyage au Québec, j'ai ressenti une connexion profonde avec les peuples autochtones de ces terres.
            Une mémoire ancienne, un lien d'âme. Depuis ce moment, mes mains ont commencé à créer. Tisser, assembler,
            peindre… comme guidée par quelque chose de plus grand que moi.
            <br />
            <br />
            C'est ainsi qu'est née Kateri Créations : une ligne d'objets vibratoires, uniques et faits main, pour
            accompagner les âmes sensibles, les lieux de vie et les rituels du quotidien.
          </p>
        </div>

        <h3>🌿 Ce que je crée</h3>
        <ul className="creations-list-styled">
          {creations.map((item, idx) => (
            <li key={idx}>
              <span className="creation-bullet">•</span> {item}
            </li>
          ))}
        </ul>

        {/* Carrousels pour toutes tailles d'écran: un par catégorie */}
        <div className="kc-mobile-carousels">
          {categories.map(
            (cat) =>
              cat.images.length > 0 && (
                <div key={cat.key} className="kc-mobile-carousel-block">
                  <Caroussel images={cat.images} title={cat.title} />
                  {cat.description && <p className="kc-cat-desc">{cat.description}</p>}
                </div>
              )
          )}
        </div>

        <div className="kc-extension">
          <h3>🌙 Une prolongation naturelle de mon accompagnement</h3>
          <p>
            Ces objets ne sont pas de simples décorations. Ils portent une mémoire vibratoire, une énergie douce et
            bienveillante. Ils peuvent t'accompagner dans un processus de guérison, marquer un passage important dans ta
            vie, ou simplement créer un espace sacré chez toi.
            <br />
            <br />
            Chaque création est reliée à mon travail thérapeutique et énergétique. Elle prolonge mon approche de
            reconnexion au corps, au souffle, à l'instant.
          </p>
        </div>
        <div className="signature">
          <h4>🪶 Signature</h4>
          <p>
            Kateri Créations
            <br />
            Reliée aux éléments, guidée par l'intuition
            <br />
            Chaque création est un écho du vivant : un lien tissé entre la nature, le cœur et l'énergie subtile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KateriCreations;
