import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { SITE, waLink } from "@/lib/siteConfig";

const HERO_IMG =
	"https://images.pexels.com/photos/33417236/pexels-photo-33417236.jpeg";

export default function Hero() {
	const scrollTo = (id) =>
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

	return (
		<section
			id="top"
			data-testid="hero-section"
			className="relative min-h-[100svh] overflow-hidden"
		>
			<div className="absolute inset-0">
				<img
					src={HERO_IMG}
					alt="Indian wedding mandap with floral décor"
					className="h-full w-full object-cover"
					loading="eager"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/55" />
			</div>

			<div className="relative container-x pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-28 min-h-[100svh] flex flex-col justify-center">
				<div className="max-w-3xl">
					<div
						className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-4 py-1.5 text-white/90 text-xs tracking-[0.22em] uppercase backdrop-blur"
						data-testid="hero-badge"
					>
						<Sparkles className="h-3.5 w-3.5" />
						Wedding & Event Planners · {SITE.city}
					</div>

					<h1
						data-testid="hero-title"
						className="font-display text-white mt-6 text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight"
					>
						Because Your{" "}
						<em className="not-italic" style={{ color: "#E8C887" }}>
							Big Day
						</em>
						<br />
						Deserves No Compromises.
					</h1>

					<p
						data-testid="hero-sub"
						className="text-white/85 mt-6 max-w-xl text-base sm:text-lg leading-relaxed"
					>
						{SITE.brand} brings together a hand-picked network of
						décor artists, chefs, beauticians, performers and ritual
						specialists — orchestrated as one seamless celebration
						across {SITE.serviceAreas.join(", ")}.
					</p>

					<div
						className="mt-9 flex flex-wrap items-center gap-3"
						data-testid="hero-ctas"
					>
						<button
							data-testid="hero-enquire-btn"
							onClick={() => scrollTo("enquire")}
							className="btn-primary"
						>
							Enquire Now <ArrowRight className="h-4 w-4" />
						</button>
						<a
							data-testid="hero-whatsapp-btn"
							href={waLink(
								`Hi ${SITE.brand}! I'd like a quote for my upcoming event.`,
							)}
							target="_blank"
							rel="noreferrer"
							className="btn-wa"
						>
							<MessageCircle className="h-4 w-4" /> Chat on
							WhatsApp
						</a>
						<a
							data-testid="hero-call-btn"
							href={`tel:${SITE.phoneTel}`}
							className="btn-ghost !text-white !border-white/30 !bg-white/10 hover:!bg-white/20 hover:!text-white"
						>
							Call {SITE.phone}
						</a>
					</div>

					<div
						className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/80 text-sm"
						data-testid="hero-trust"
					>
						<Stat n="120+" label="Events delivered" />
						<Stat n="40+" label="Vendor partners" />
						<Stat n="7" label="Cities served" />
					</div>
				</div>
			</div>

			<button
				onClick={() => scrollTo("about")}
				className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs tracking-[0.3em] uppercase"
				data-testid="hero-scroll-cue"
			>
				Scroll
			</button>
		</section>
	);
}

const Stat = ({ n, label }) => (
	<div className="flex items-baseline gap-2">
		<span className="font-display text-2xl text-[#E8C887]">{n}</span>
		<span className="text-xs uppercase tracking-[0.2em]">{label}</span>
	</div>
);
