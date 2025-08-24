import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">À propos</h1>
      <p className="text-lg mb-4">
        Bienvenue sur la page "À propos".
      </p>
      <p className="text-lg mb-4">
        Cette page est en cours de construction.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default AboutPage;
