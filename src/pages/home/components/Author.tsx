
export default function Author() {
  return (
    <section className="py-24 px-6 bg-warm-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          À propos de l'auteur
        </h2>
        <div className="bg-white rounded-2xl p-10 shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Fabrice Richard</strong> est auteur indépendant.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Il écrit des textes courts et sobres pour interroger les ruptures silencieuses de notre époque.
          </p>
        </div>
      </div>
    </section>
  );
}
