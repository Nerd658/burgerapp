import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">À propos de ce projet</h1>
      <p className="text-lg mb-4">
        Ce projet est une application de démonstration construite avec Next.js, TypeScript et Tailwind CSS.
      </p>
      <p className="text-lg mb-4">
        Il a été amélioré par Jules, un assistant IA, pour démontrer les bonnes pratiques de développement telles que la structure de projet, le contenu dynamique et les tests unitaires.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default AboutPage;
