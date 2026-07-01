/* eslint-disable react-refresh/only-export-components */
import { ArrowUpRight } from "lucide-react";

export const SERVICES = [
	{
		id: "decor",
		title: "Décor & Setup",
		desc: "Mandaps, stage design, floral installations, lighting, themed entryways and venue transformation tailored to your palette.",
		img: "/images/decor&setup.jpg",
	},
	{
		id: "catering",
		title: "Catering",
		desc: "Multi-cuisine live counters, traditional Bundelkhandi thalis, dessert stations and chef-curated menus for every function.",
		img: "/images/catering.jpg",
	},
	{
		id: "beauty",
		title: "Beauty & Styling",
		desc: "Bridal makeup artists, mehendi, hair styling, draping and grooming partners — on-call across pre-wedding and main day.",
		img: "https://images.unsplash.com/photo-1556859438-6845d3f1116e",
	},
	{
		id: "entertainment",
		title: "Entertainment",
		desc: "Dhol, baraat bands, sangeet choreography, DJs, live singers, anchors and curated performances that match the moment.",
		img: "/images/entertainment.jpg",
	},
	{
		id: "logistics",
		title: "Logistics",
		desc: "Guest transport, baraat vehicles, on-site coordination, accommodation tie-ups and crew management end-to-end.",
		img: "/images/logistics.png",
	},
	{
		id: "rituals",
		title: "Rituals & Traditional",
		desc: "Trusted pandits, samagri arrangements, haldi/mehendi/sangeet setups and authentic Bundelkhandi rituals — done right.",
		img: "/images/traditions&ritual.png",
	},
];

export default function Services() {
	const goEnquire = () =>
		document
			.getElementById("enquire")
			?.scrollIntoView({ behavior: "smooth" });

	return (
		<section
			id="services"
			data-testid="services-section"
			className="section-y"
			style={{ background: "hsl(var(--muted))" }}
		>
			<div className="container-x">
				<div className="max-w-2xl">
					<span className="divider-mark eyebrow">Services</span>
					<h2
						className="font-display text-4xl sm:text-5xl mt-5 leading-[1.05]"
						data-testid="services-title"
					>
						One team. Six crafts.{" "}
						<em
							className="not-italic"
							style={{ color: "hsl(var(--primary))" }}
						>
							Zero compromises.
						</em>
					</h2>
					<p className="text-muted-foreground mt-4 text-base sm:text-lg">
						Pick the parts you need — or hand us the whole canvas.
						Either way, you get a single point of accountability.
					</p>
				</div>

				<div
					className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
					data-testid="services-grid"
				>
					{SERVICES.map((s) => (
						<article
							key={s.id}
							data-testid={`service-card-${s.id}`}
							className="group card-soft overflow-hidden flex flex-col"
						>
							<div className="aspect-[4/3] overflow-hidden">
								<img
									src={s.img}
									alt={s.title}
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									loading="lazy"
								/>
							</div>
							<div className="p-6 flex flex-col gap-3 flex-1">
								<div className="flex items-start justify-between gap-3">
									<h3 className="font-display text-2xl leading-snug">
										{s.title}
									</h3>
									<button
										data-testid={`service-cta-${s.id}`}
										onClick={goEnquire}
										className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary transition-colors"
										aria-label={`Enquire about ${s.title}`}
									>
										<ArrowUpRight className="h-4 w-4" />
									</button>
								</div>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{s.desc}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
