
import "./globals.css";

export const metadata = {
  title: "LynkorArt – Portfolio",
  description: "Portfolio d'art 3D – catégories, mises en avant, dernières publications",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="border-b border-neutral-800">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <a href="/" className="text-lg font-semibold">LynkorArt</a>
            <nav className="flex gap-4 text-sm text-neutral-300">
              <a href="/c/Naruto">Naruto</a>
              <a href="/c/Dragon%20Ball">Dragon Ball</a>
              <a href="/c/One%20Piece">One Piece</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-400">
          © {new Date().getFullYear()} LynkorArt
        </footer>
      </body>
    </html>
  );
}
