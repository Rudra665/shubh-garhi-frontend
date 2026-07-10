import { SERVICES } from "@/components/site/Services";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const ALL = [
	{
		src: "/images/decor&setup.jpg",
		cat: "decor",
		// span: "lg:row-span-2",
	},
	{
		src: "/images/wedding-micro.jpg",
		cat: "micro-weddings",
	},
	{
		src: "/images/wedding-domestication.jpg",
		cat: "domestication-wedding",
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
		src: "/images/venue.jpg",
		cat: "venue",
	},
	{
		src: "/images/wedding-venue2.jpeg",
		cat: "venue",
	},
	{
		src: "/images/wedding-venue1.avif",
		cat: "venue",
	},
	{
		src: "/images/wedding-venue.avif",
		cat: "venue",
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
		src: "/images/beauty&styling.jpg",
		cat: "beauty",
	},
	{
		src: "/images/wedding-styling.png",
		cat: "beauty",
	},
	{
		src: "/images/wedding-styling1.png",
		cat: "beauty",
	},
	{
		src: "/images/wedding-styling2.png",
		cat: "beauty",
	},
	{
		src: "/images/photography.jpg",
		cat: "photography",
	},
	{
		src: "/images/wedding-photography.png",
		cat: "photography",
	},
	{
		src: "/images/wedding-photography1.png",
		cat: "photography",
	},
	{
		src: "/images/wedding-photography2.png",
		cat: "photography",
	},
	{
		src: "/images/wedding-photography3.png",
		cat: "photography",
	},
	{
		src: "/images/wedding-photography4.png",
		cat: "photography",
	},
	{
		src: "/images/wedding-photography5.png",
		cat: "photography",
	},
	{
		src: "/images/wedding-stationary.jpg",
		cat: "stationery",
	},
	{
		src: "/images/entertainment.jpg",
		cat: "entertainment",
		// span: "lg:col-span-2",
	},
	{
		src: "/images/wedding-hamper.webp",
		cat: "gifting",
	},
	{
		src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
		cat: "vendor-management",
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
		src: "/images/wedding-hospitality.webp",
		cat: "hospitality",
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
	const [carouselIndex, setCarouselIndex] = useState(null);
	const items = useMemo(() => {
		if (active === "all") return ALL;
		return ALL.filter((i) => i.cat === active);
	}, [active]);
	const gridItems = active === "all" ? items.slice(0, 12) : items;

	const carouselItems = items;
	const isCarouselOpen = carouselIndex !== null && carouselItems.length > 0;

	useEffect(() => {
		if (!isCarouselOpen) return undefined;

		const onKeyDown = (e) => {
			if (e.key === "Escape") setCarouselIndex(null);
			if (e.key === "ArrowRight") {
				setCarouselIndex((idx) =>
					idx === null ? 0 : (idx + 1) % carouselItems.length,
				);
			}
			if (e.key === "ArrowLeft") {
				setCarouselIndex((idx) =>
					idx === null
						? 0
						: (idx - 1 + carouselItems.length) %
							carouselItems.length,
				);
			}
		};

		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [carouselItems.length, isCarouselOpen]);

	const openCarousel = (index = 0) => setCarouselIndex(index);
	const closeCarousel = () => setCarouselIndex(null);
	const moveCarousel = (delta) => {
		setCarouselIndex((idx) => {
			if (idx === null) return 0;
			return (idx + delta + carouselItems.length) % carouselItems.length;
		});
	};

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
								onClick={() => {
									setActive(f.id);
								}}
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
					{gridItems.map((it, idx) => (
						<figure
							key={idx}
							data-testid={`gallery-item-${idx}`}
							className={`overflow-hidden rounded-xl card-soft group cursor-pointer ${it.span || ""}`}
							onClick={() => openCarousel(idx)}
							role="button"
							tabIndex={0}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									openCarousel(idx);
								}
							}}
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

				{items.length > 12 && (
					<div className="mt-8 flex justify-center">
						<button
							type="button"
							onClick={() => openCarousel(0)}
							className="btn-primary"
							data-testid="gallery-see-more"
						>
							See more photos
						</button>
					</div>
				)}
			</div>

			{isCarouselOpen && (
				<div
					className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
					role="dialog"
					aria-modal="true"
					aria-label="Gallery carousel"
					onClick={closeCarousel}
				>
					<div
						className="relative w-full max-w-6xl rounded-3xl overflow-hidden bg-background shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-border">
							<div>
								<div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
									Gallery carousel
								</div>
								<div className="mt-1 text-sm sm:text-base font-medium capitalize">
									{carouselItems[carouselIndex]?.cat}
								</div>
							</div>
							<button
								type="button"
								onClick={closeCarousel}
								className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/80 hover:text-primary hover:border-primary transition-colors"
								aria-label="Close gallery carousel"
							>
								<X className="h-5 w-5" />
							</button>
						</div>

						<div className="grid lg:grid-cols-[1fr_240px]">
							<div className="relative bg-black">
								<img
									src={carouselItems[carouselIndex]?.src}
									alt={`${carouselItems[carouselIndex]?.cat} event large view`}
									className="h-[65vh] w-full object-contain"
								/>

								<button
									type="button"
									onClick={() => moveCarousel(-1)}
									className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
									aria-label="Previous image"
								>
									<ChevronLeft className="h-5 w-5" />
								</button>
								<button
									type="button"
									onClick={() => moveCarousel(1)}
									className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
									aria-label="Next image"
								>
									<ChevronRight className="h-5 w-5" />
								</button>
							</div>

							<div className="border-t lg:border-t-0 lg:border-l border-border bg-muted/25 p-4 sm:p-5">
								<div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
									More images
								</div>
								<div className="mt-4 grid grid-cols-3 lg:grid-cols-2 gap-2 max-h-[65vh] overflow-y-auto pr-1">
									{carouselItems.map((it, idx) => (
										<button
											key={`${it.src}-${idx}`}
											type="button"
											onClick={() =>
												setCarouselIndex(idx)
											}
											className={`overflow-hidden rounded-lg border transition-all ${
												carouselIndex === idx
													? "border-primary ring-2 ring-primary/20"
													: "border-transparent hover:border-border"
											}`}
											aria-label={`Show ${it.cat} image ${idx + 1}`}
										>
											<img
												src={it.src}
												alt={`${it.cat} thumbnail`}
												className="h-24 w-full object-cover"
											/>
										</button>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
