import { useState } from 'react';

interface Book {
  title: string;
  subtitle?: string;
  price: string;
  format: string;
  description: string;
  cta: string;
  link: string;
  platform: 'amazon' | 'payhip';
  cover?: string;
  expandedText: string;
}

const books: Book[] = [
  {
    title: 'Les correspondances muettes',
    subtitle: 'Ce que les images racontent avant l\'histoire',
    price: '6,99 €',
    format: 'Kindle',
    description: 'Une exploration des résonances silencieuses entre images, symboles et histoire. Sans accusation. Sans théorie du complot. Un regard sensible sur le temps et la synchronicité.',
    cta: 'Acheter sur Amazon',
    link: 'https://www.amazon.fr/dp/B0GMD2561T',
    platform: 'amazon',
    cover: 'https://static.readdy.ai/image/f64a4f029ff087c4e70229551572bd89/cd93977ae907a911c6c5fc83c626451f.jpeg',
    expandedText: `Et si certaines images parlaient avant que l'histoire ne s'écrive ?

À la fin du XIXᵉ siècle, un livre pour enfants paraît presque inaperçu. Sa couverture montre une scène calme, maîtrisée, silencieuse. Rien d'extraordinaire. Et pourtant, plus d'un siècle plus tard, cette image semble entrer en résonance troublante avec notre époque.

Les correspondances muettes n'affirme rien. Il n'accuse pas. Il ne cherche ni plan caché ni théorie du complot. Il observe, il rapproche, il interroge.

À partir d'une couverture oubliée, d'un nom singulier, de symboles discrets et d'échos historiques inattendus, ce livre explore une question simple et dérangeante : pourquoi certaines images refusent-elles de rester insignifiantes ?

En s'appuyant sur l'analyse visuelle, le contexte historique, les notions de pouvoir silencieux et la théorie de la synchronicité développée par Carl Gustav Jung, l'ouvrage propose une lecture sensible du temps, où le sens précède parfois les preuves.

Ce livre s'adresse à celles et ceux qui aiment penser sans réponses toutes faites.
À ceux qui acceptent de rester dans l'inconfort d'une question ouverte.
À ceux qui pressentent que l'histoire ne se contente pas toujours d'avancer en ligne droite.

Ici, rien n'est démontré.
Mais tout résiste à l'indifférence.`
  },
  {
    title: 'Pourquoi tu n\'y arrives plus',
    price: '2,99 €',
    format: 'PDF – lecture immédiate',
    description: 'Un texte court et lucide sur l\'effort qui ne suffit plus. Pas de méthode. Pas de promesse. Juste assez de clarté pour arrêter de se prendre pour le problème.',
    cta: 'Acheter sur Payhip',
    link: 'https://payhip.com/b/B5Hfc',
    platform: 'payhip',
    cover: 'https://static.readdy.ai/image/f64a4f029ff087c4e70229551572bd89/f4ecb8fe831fb9f6f97eb0cbfb32d1c9.jpeg',
    expandedText: `Tu fais ce qu'il faut.
Tu t'adaptes.
Tu avances.
Et pourtant, rien ne se débloque.

Ce livre n'explique pas comment réussir.
Il explique pourquoi insister ne fonctionne plus.

Un texte court, lucide, sans méthode ni promesse.
Juste de la clarté, pour arrêter de te prendre pour le problème.

PDF – lecture immédiate.
Aucun bullshit. Aucune recette miracle.`
  },
  {
    title: 'Créer du contenu viral sans être créatif',
    subtitle: 'Méthode simple et concrète pour publier sans inspiration',
    price: '5,99 €',
    format: 'PDF',
    description: 'Créer du contenu efficace sans inspiration ni talent particulier. Des formats simples, reproductibles, déjà validés. À lire vite. À appliquer immédiatement.',
    cta: 'Acheter sur Payhip',
    link: 'https://payhip.com/b/EhO32',
    platform: 'payhip',
    cover: 'https://static.readdy.ai/image/f64a4f029ff087c4e70229551572bd89/1da780162532181afcd5892d2598e82b.jpeg',
    expandedText: `Tu n'as pas besoin d'être créatif pour créer du contenu viral.
Tu as besoin d'un système.

Ce PDF te montre comment produire des posts qui fonctionnent
en utilisant des formats simples, reproductibles, déjà validés.

Pas d'inspiration à trouver.
Pas de talent particulier.
Juste une méthode claire, étape par étape.

À lire vite.
À appliquer immédiatement.`
  },
  {
    title: 'L\'être est suffisant',
    price: '3,99 €',
    format: 'Kindle',
    description: 'Un essai sur une rupture silencieuse. Quand produire ne suffit plus à donner une place. Un texte court, dense, sans injonction ni solution clé en main.',
    cta: 'Acheter sur Amazon',
    link: 'https://www.amazon.fr/dp/B0GMS28JDK',
    platform: 'amazon',
    cover: 'https://static.readdy.ai/image/f64a4f029ff087c4e70229551572bd89/733997078c35d98e4ed2578ccacc65cb.jpeg',
    expandedText: `L'être est suffisant est un essai contemporain sur une rupture silencieuse :
le moment où l'effort ne garantit plus rien, où le mérite cesse de structurer l'existence, où produire ne suffit plus à donner une place.

Ce livre explore le vertige qui apparaît quand les anciens repères s'effondrent :
travail, performance, utilité sociale, reconnaissance.
Non pour proposer une méthode de réussite, mais pour nommer un malaise partagé et rarement formulé.

À travers une écriture sobre et lucide, l'auteur interroge une bascule d'époque :
que reste-t-il de l'humain quand il n'est plus défini par ce qu'il produit ?
Comment exister dans un monde où l'efficacité a remplacé le sens ?

Sans promesse.
Sans injonction.
Sans solution clé en main.

Un texte pour celles et ceux qui sentent que le jeu a changé,
et qui cherchent non pas à faire plus,
mais à comprendre comment être, autrement.

Un essai court et dense, conçu pour être lu en une seule fois.`
  }
];

export default function Books() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-warm-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Livres disponibles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des textes courts, denses et accessibles immédiatement après achat.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-product-shop>
          {books.map((book, index) => (
            <div key={index}>
              <div
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col shadow-sm"
              >
                {/* Book Cover */}
                {book.cover && (
                  <div className="w-full h-80 bg-gray-100 overflow-hidden flex items-center justify-center p-6">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="h-full w-auto object-contain transition-transform duration-500 ease-out hover:scale-125 drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="text-base text-gray-600 italic">
                        {book.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Price & Format */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-violet-600">
                      {book.price}
                    </span>
                    <span className="text-sm text-gray-500 bg-warm-100 px-3 py-1 rounded-full">
                      {book.format}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-base text-gray-700 leading-relaxed mb-6 flex-grow">
                    {book.description}
                  </p>

                  {/* More Info Button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-sm text-gray-600 hover:text-gray-900 mb-4 text-left cursor-pointer underline"
                  >
                    {expandedIndex === index ? 'Masquer' : 'En savoir plus'}
                  </button>

                  {/* CTA Button */}
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`whitespace-nowrap w-full text-center px-6 py-3 text-white text-base font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                      book.platform === 'amazon'
                        ? 'bg-gray-900 hover:bg-gray-800'
                        : 'bg-violet-600 hover:bg-violet-700'
                    }`}
                  >
                    {book.cta}
                  </a>
                </div>
              </div>

              {/* Expanded Text Block */}
              {expandedIndex === index && (
                <div className="bg-white rounded-2xl p-8 mt-4 shadow-sm">
                  <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                    {book.expandedText}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
