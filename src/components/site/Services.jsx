/* eslint-disable react-refresh/only-export-components */
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const SERVICES = [
	{
		id: "decor",
		title: "Décor & Setup",
		desc: "Hotel tie-ups, orchard lawns, palace properties and destination wedding planning across Jhansi, Orchha, Datia, Shivpuri, Gwalior, Lalitpur and Bhopal.",
		img: "/images/decor&setup.jpg",
		included: [
			"Mandap and stage design",
			"Fresh floral arrangements and installations",
			"Destination wedding planning across Jhansi, Orchha, Datia, Shivpuri, Gwalior, Lalitpur and Bhopal",
			"Themed entryways and photo corners",
		],
	},
	{
		id: "venue",
		title: "Venue & Destination",
		desc: "Hotel tie-ups, orchard lawns, palace properties and destination wedding planning across Jhansi, Orchha and Bundelkhand.",
		img: "/images/venue.jpg",
		included: [
			"Venue shortlisting and site visits",
			"Hotel, banquet, and lawn tie-ups",
			"Destination wedding planning across Jhansi, Orchha, and all the coverd areas",
			"Accommodation coordination and room blocks",
		],
	},
	{
		id: "catering",
		title: "Catering",
		desc: "Multi-cuisine live counters, traditional Bundelkhandi thalis, dessert stations and chef-curated menus for every function.",
		img: "/images/catering.jpg",
		included: [
			"Menu curation for every function",
			"Live counters and service staff",
			"Traditional Bundelkhandi thalis",
			"Dessert, beverage, and snack stations",
		],
	},
	{
		id: "photography",
		title: "Photography",
		desc: "Candid, cinematic and traditional wedding photography with pre-wedding shoots and partner-led coverage end-to-end.",
		img: "/images/photography.jpg",
		included: [
			"Candid photography",
			"Cinematic highlight films",
			"Pre-wedding shoots",
			"Traditional family and ceremony coverage",
		],
	},
	{
		id: "beauty",
		title: "Beauty & Styling",
		desc: "Bridal makeup artists, mehendi, hair styling, draping and grooming partners — on-call across pre-wedding and main day.",
		img: "/images/beauty&styling.jpg",
		included: [
			"Bridal makeup coordination",
			"Mehendi artists",
			"Hair styling and draping",
			"Groom and family grooming support",
		],
	},
	{
		id: "stationery",
		title: "Stationery & Collaterals",
		desc: "Invitation cards, welcome boards, order-of-events cards, signage and printed pieces that keep every guest informed.",
		img: "/images/wedding-stationary.jpg",
		included: [
			"Invitation card design coordination",
			"Save-the-date and RSVP cards",
			"Welcome signage and seating boards",
			"Order-of-events and thank-you inserts",
		],
	},
	{
		id: "entertainment",
		title: "Entertainment",
		desc: "Dhol, baraat bands, sangeet choreography, DJs, live singers, anchors and curated performances that match the moment.",
		img: "/images/entertainment.jpg",
		included: [
			"Dhol and baraat bands",
			"DJ and sound setup",
			"Sangeet choreography",
			"Anchors, singers, and performance acts",
		],
	},
	{
		id: "gifting",
		title: "Gifting & Hampers",
		desc: "Return gifts, guest welcome kits, potli bags, curated hampers and thoughtful wedding gifting managed by trusted vendors.",
		img: "/images/wedding-hamper.webp",
		included: [
			"Return gift sourcing",
			"Guest welcome kits",
			"Potli bags and hampers",
			"Customized packaging and vendor handling",
		],
	},
	{
		id: "vendor-management",
		title: "Vendor Management",
		desc: "One point of contact for every vendor, timeline and deliverable so your celebration runs smoothly from first call to farewell.",
		img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
		included: [
			"Shortlisting and booking support",
			"Vendor schedule coordination",
			"Contract and payment tracking",
			"Single-point communication on wedding day",
		],
	},
	{
		id: "logistics",
		title: "Logistics",
		desc: "Guest transport, baraat vehicles, on-site coordination, accommodation tie-ups and crew management end-to-end.",
		img: "/images/logistics.png",
		included: [
			"Guest transport planning",
			"Baraat vehicle coordination",
			"Crew movement and load-in planning",
			"Accommodation and transfer support",
		],
	},
	{
		id: "hospitality",
		title: "Wedding Hospitality",
		desc: "Guest reception desks, venue help desks, concierge support and on-ground care that makes every guest feel looked after.",
		img: "/images/wedding-hospitality.webp",
		included: [
			"Reception desks and check-in flow",
			"Guest help desks and concierge support",
			"Room assistance and venue guidance",
			"On-ground problem solving throughout the event",
		],
	},
	{
		id: "rituals",
		title: "Rituals & Traditional",
		desc: "Trusted pandits, samagri arrangements, haldi/mehendi/sangeet setups and authentic Bundelkhandi rituals — done right.",
		img: "/images/traditions&ritual.png",
		included: [
			"Pandit and ritual coordination",
			"Samagri planning and arrangement",
			"Haldi, mehendi, and phera setup support",
			"Bundelkhandi traditional ceremony management",
		],
	},
];

export default function Services() {
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
						One team. Twelve crafts.{" "}
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
						<Link
							key={s.id}
							data-testid={`service-card-${s.id}`}
							to={`/services/${s.id}`}
							aria-label={`View details for ${s.title}`}
							className="group block h-full card-soft overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
						>
							<article className="flex h-full flex-col">
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
										<span
											data-testid={`service-cta-${s.id}`}
											className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors group-hover:text-primary group-hover:border-primary"
											aria-hidden="true"
										>
											<ArrowUpRight className="h-4 w-4" />
										</span>
									</div>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{s.desc}
									</p>
									<p className="text-xs uppercase tracking-[0.18em] text-primary/80 pt-1">
										Click to see what’s included
									</p>
								</div>
							</article>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
