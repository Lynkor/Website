
import Link from "next/link";

export default function ArtCard({ item }: { item: any }) {
  return (
    <Link href={`/art/${item.slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900">
        <img
          src={item.thumb}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <h3 className="text-sm font-medium">{item.title}</h3>
        <span className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300">
          {item.category}
        </span>
      </div>
    </Link>
  );
}
