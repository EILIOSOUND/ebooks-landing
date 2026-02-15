
import Hero from './components/Hero';
import Books from './components/Books';
import AudienceFilter from './components/AudienceFilter';
import Author from './components/Author';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-50">
      <Hero />
      <Books />
      <AudienceFilter />
      <Author />
      <Footer />
    </div>
  );
}
