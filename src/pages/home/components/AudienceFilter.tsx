
export default function AudienceFilter() {
  return (
    <section className="py-24 px-6 bg-warm-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-12 shadow-sm">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Pour qui sont ces livres ?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Ces livres s'adressent à celles et ceux qui préfèrent la <strong className="text-violet-600">lucidité</strong> aux promesses.
              </p>
              <p>
                À ceux qui acceptent les <strong className="text-violet-600">questions ouvertes</strong>.
              </p>
              <p className="text-gray-600 italic">
                Ils ne sont pas conçus pour les amateurs de recettes miracles ou de discours motivationnels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
