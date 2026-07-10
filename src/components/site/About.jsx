import { Check } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

const FOUNDER_IMAGES = [
	"/images/Founder.png",
	"/images/Founder2.png",
]; /* 4:5 aspect ratio, 800x1000px */

const HIGHLIGHTS = [
	"Single point of contact for the entire celebration",
	"Pre-vetted vendor network across décor, food, beauty, music & rituals",
	"Transparent quotes — no last-minute add-ons",
	"On-ground crew on event day from setup to send-off",
];

export default function About() {
	return (
		<section
			id="about"
			data-testid="about-section"
			className="section-y bg-background"
		>
			<div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
				<div className="lg:col-span-5 relative">
					<div className="aspect-[4/5] overflow-hidden rounded-2xl card-soft">
						<div className="absolute inset-0 grid grid-cols-2 gap-2 p-2">
							{FOUNDER_IMAGES.map((src, idx) => (
								<div
									key={src}
									className="overflow-hidden rounded-xl card-soft/50"
								>
									<img
										src={src}
										alt={`${SITE.founder} ${idx === 0 ? "Founder" : "Founder 2"} of ${SITE.brand}`}
										className="h-full w-full object-cover"
										loading="lazy"
									/>
								</div>
							))}
						</div>
					</div>
					<div className="hidden md:block absolute -bottom-8 -right-6 w-44 rounded-xl card-soft p-4">
						<div className="eyebrow">Founder</div>
						<div className="font-display text-xl mt-1 leading-tight">
							{SITE.founder}
						</div>
						<div className="text-xs text-muted-foreground mt-1">
							{SITE.city}, UP
						</div>
					</div>
				</div>

				<div className="lg:col-span-7">
					<span
						className="divider-mark eyebrow"
						data-testid="about-eyebrow"
					>
						About Us
					</span>
					<h2
						className="font-display text-4xl sm:text-5xl mt-5 leading-[1.05]"
						data-testid="about-title"
					>
						Weddings, planned with the warmth of family — and the
						rigour of a studio.
					</h2>
					<p
						className="text-muted-foreground mt-6 text-base sm:text-lg leading-relaxed"
						data-testid="about-desc"
					>
						Founded by <strong>{SITE.founder}</strong>, {SITE.brand}{" "}
						began with a single belief: a wedding shouldn't be a
						stressful logistics project for the couple or their
						parents. We coordinate a curated network of artists,
						kitchens, beauticians, performers, drivers and pandits
						so every ritual flows beautifully into the next — and
						you remain a guest at your own celebration.
					</p>

					<ul
						className="mt-8 grid sm:grid-cols-2 gap-3"
						data-testid="about-highlights"
					>
						{HIGHLIGHTS.map((h) => (
							<li
								key={h}
								className="flex items-start gap-3 text-sm"
							>
								<span
									className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full"
									style={{
										background: "hsl(var(--primary) / 0.1)",
										color: "hsl(var(--primary))",
									}}
								>
									<Check className="h-3.5 w-3.5" />
								</span>
								<span>{h}</span>
							</li>
						))}
					</ul>

					<div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
						<Pill k="Based in" v={SITE.city} />
						<Pill
							k="Service Areas"
							v={SITE.serviceAreas.join(" · ")}
						/>
						<Pill k="Speak to us" v={SITE.phone} />
					</div>
				</div>
			</div>
		</section>
	);
}

const Pill = ({ k, v }) => (
	<div>
		<div className="eyebrow">{k}</div>
		<div className="text-sm mt-1">{v}</div>
	</div>
);
