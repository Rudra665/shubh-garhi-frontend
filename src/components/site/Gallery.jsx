import { SERVICES } from "@/components/site/Services";
import { useMemo, useState } from "react";

const ALL = [
	{
		src: "/images/decor&setup.jpg",
		cat: "decor",
		span: "lg:row-span-2",
	},
	{
		src: "/images/decor1.jpg",
		cat: "decor",
	},
	{
		src: "/images/decor2.jpg",
		cat: "decor",
	},
	{
		src: "/images/decor3.jpg",
		cat: "decor",
	},
	{
		src: "/images/decor4.jpg",
		cat: "decor",
	},
	{
		src: "/images/traditions&ritual.png",
		cat: "rituals",
	},
	{
		src: "/images/catering.jpg",
		cat: "catering",
	},
	{
		src: "/images/catering1.jpg",
		cat: "catering",
	},
	{
		src: "/images/catering2.jpg",
		cat: "catering",
	},
	{
		src: "/images/catering3.jpg",
		cat: "catering",
	},
	{
		src: "/images/catering4.jpg",
		cat: "catering",
	},
	{
		src: "https://images.unsplash.com/photo-1556859438-6845d3f1116e",
		cat: "beauty",
		span: "lg:col-span-2",
	},
	{
		src: "/images/entertainment.jpg",
		cat: "entertainment",
		span: "lg:col-span-2",
	},
	{
		src: "/images/entertainment1.jpg",
		cat: "entertainment",
	},
	{
		src: "/images/entertainment2.jpg",
		cat: "entertainment",
	},
	{
		src: "/images/logistics.png",
		cat: "logistics",
	},
];

const FILTERS = [
	{ id: "all", label: "All" },
	...SERVICES.map((s) => ({ id: s.id, label: s.title })),
];

export default function Gallery() {
	const [active, setActive] = useState("all");
	const items = useMemo(
		() => (active === "all" ? ALL : ALL.filter((i) => i.cat === active)),
		[active],
	);

	return (
		<section
			id="gallery"
			data-testid="gallery-section"
			className="section-y bg-background"
		>
			<div className="container-x">
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
					<div className="max-w-xl">
						<span className="divider-mark eyebrow">Gallery</span>
						<h2
							className="font-display text-4xl sm:text-5xl mt-5 leading-[1.05]"
							data-testid="gallery-title"
						>
							Moments from celebrations we've shaped.
						</h2>
					</div>
					<div
						className="flex flex-wrap gap-2"
						data-testid="gallery-filters"
					>
						{FILTERS.map((f) => (
							<button
								key={f.id}
								data-testid={`gallery-filter-${f.id}`}
								onClick={() => setActive(f.id)}
								className={`text-xs uppercase tracking-[0.2em] rounded-full px-4 py-2 border transition-all ${
									active === f.id
										? "bg-foreground text-background border-foreground"
										: "border-border text-muted-foreground hover:text-primary hover:border-primary"
								}`}
							>
								{f.label}
							</button>
						))}
					</div>
				</div>

				<div
					className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:grid-rows-2"
					data-testid="gallery-grid"
				>
					{items.map((it, idx) => (
						<figure
							key={idx}
							data-testid={`gallery-item-${idx}`}
							className={`overflow-hidden rounded-xl card-soft group ${it.span || ""}`}
						>
							<img
								src={it.src}
								alt={`${it.cat} event`}
								className="h-full w-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105"
								loading="lazy"
							/>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
