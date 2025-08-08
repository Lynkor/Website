
# LynkorArt – Portfolio (Next.js + Tailwind)

## Déploiement ultra simple (recommandé)
1. Crée un compte sur **vercel.com**.
2. Clique **New Project** → **Import** → **Upload** → sélectionne le ZIP.
3. Déploie. Fini.

## Édition des contenus
- Modifie **data/art.json** depuis GitHub/Vercel (ou localement) pour ajouter des œuvres.
- Champs requis par œuvre :
  - `id`, `title`, `slug`, `category`, `thumb`, `featured` (bool), `tags` (array), `date` (YYYY-MM-DD), `links` (patreon/deviantart).

## Local (optionnel)
```bash
npm install
npm run dev
# http://localhost:3000
```

## Notes
- Dossier images : `public/images/` (mets tes vignettes `.webp`).
- Catégories : Naruto / Dragon Ball / One Piece (tu peux en ajouter librement).
