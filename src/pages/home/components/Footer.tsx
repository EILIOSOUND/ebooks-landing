
export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img
              src="https://public.readdy.ai/ai/img_res/d5bb779b-b5e7-4829-a1b0-17d4b8febf21.png"
              alt="Fabrice Richard"
              className="h-12 w-auto opacity-90"
            />
          </div>
          <div className="space-y-3 text-gray-300">
            <p className="text-base">Livres numériques uniquement</p>
            <p className="text-base">Accès immédiat après achat</p>
            <p className="text-base">Paiement sécurisé via Amazon ou Payhip</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© Fabrice Richard – Tous droits réservés</p>
            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
