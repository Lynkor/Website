
import data from "@/data/art.json";
import ArtCard from "@/components/ArtCard";
import Section from "@/components/Section";

export default function Home() {
  const items = [...data].sort((a,b)=>+new Date(b.date)-+new Date(a.date));
  const featured = items.filter(i=>i.featured).slice(0,6);
  const latest = items.slice(0,12);
  const categories = Array.from(new Set(items.map(i=>i.category)));

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Section title="Mises en avant">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {featured.map(i => <ArtCard key={i.id} item={i} />)}
        </div>
      </Section>

      <Section title="Dernières publications">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {latest.map(i => <ArtCard key={i.id} item={i} />)}
        </div>
      </Section>

      <Section title="Catégories">
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <a key={c} href={`/c/${encodeURIComponent(c)}`}
              className="rounded-full bg-neutral-900 px-3 py-1 text-sm hover:bg-neutral-800">
              {c}
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}
