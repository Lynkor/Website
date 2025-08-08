
import data from "@/data/art.json";
import ArtCard from "@/components/ArtCard";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const current = decodeURIComponent(params.category);
  const items = data.filter(i => i.category === current);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-semibold">{current}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map(i => <ArtCard key={i.id} item={i} />)}
      </div>
    </main>
  );
}
