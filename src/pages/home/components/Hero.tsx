
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=minimalist%20abstract%20composition%20with%20soft%20geometric%20shapes%20and%20clean%20lines%20in%20muted%20violet%20mauve%20and%20warm%20beige%20tones%20creating%20a%20calm%20contemporary%20editorial%20atmosphere%20with%20subtle%20depth%20and%20modern%20sophistication%20perfect%20for%20a%20literary%20landing%20page%20background%20with%20soft%20gradients%20and%20organic%20forms&width=1920&height=1080&seq=hero-bg-violet-002&orientation=landscape"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-50/50 via-warm-50/70 to-warm-50/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img
            src="https://public.readdy.ai/ai/img_res/d5bb779b-b5e7-4829-a1b0-17d4b8febf21.png"
            alt="Fabrice Richard"
            className="h-16 w-auto"
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Des livres courts pour penser autrement.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Essais et textes lucides sur le sens, l'effort, les images et les blocages contemporains.<br />
          Sans promesse. Sans méthode miracle. Juste de la clarté.
        </p>
      </div>
    </section>
  );
}
