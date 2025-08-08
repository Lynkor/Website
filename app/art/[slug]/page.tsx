
import data from "@/data/art.json";

export default function ArtPage({ params }: { params: { slug: string } }) {
  const item = data.find(i => i.slug === params.slug);
  if (!item) return <div className="p-8">Introuvable.</div>;
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <img src={item.thumb} alt={item.title} className="mb-4 w-full rounded-2xl" />
      <h1 className="mb-2 text-2xl font-semibold">{item.title}</h1>
      <div className="mb-4 text-sm text-neutral-400">{item.category} · {item.date}</div>
      <div className="mb-6 flex flex-wrap gap-2">
        {item.tags?.map((t:string)=>(
          <span key={t} className="rounded bg-neutral-900 px-2 py-0.5 text-xs">{t}</span>
        ))}
      </div>
      <div className="flex gap-3">
        {item.links?.deviantart && <a className="rounded bg-neutral-900 px-3 py-2" href={item.links.deviantart}>DeviantArt</a>}
        {item.links?.patreon && <a className="rounded bg-neutral-900 px-3 py-2" href={item.links.patreon}>Patreon</a>}
      </div>
    </main>
  );
}
