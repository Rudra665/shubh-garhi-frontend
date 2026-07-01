// import { ExternalLink } from "lucide-react";
import { SITE, waLink } from "@/lib/siteConfig";

const QUICK = [
	{ id: "about", label: "About" },
	{ id: "services", label: "Services" },
	{ id: "gallery", label: "Gallery" },
	{ id: "enquire", label: "Enquire" },
	{ id: "contact", label: "Contact" },
];

export default function Footer() {
	const goTo = (id) =>
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	const year = new Date().getFullYear();

	return (
		<footer
			data-testid="site-footer"
			style={{ background: "#1c1a19", color: "#E5E0D8" }}
		>
			<div className="container-x py-16 grid lg:grid-cols-12 gap-10">
				<div className="lg:col-span-5">
					<div
						className="font-display text-3xl"
						style={{ color: "#E8C887" }}
					>
						{SITE.brand}
					</div>
					<p className="mt-3 text-sm text-white/70 max-w-md">
						Full-service wedding & event planners based in{" "}
						{SITE.city}. Décor, catering, beauty, entertainment,
						logistics and rituals — orchestrated as one.
					</p>
					<div className="mt-6 flex items-center gap-3">
						<FSocial
							href={SITE.social.instagram}
							testid="footer-instagram"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-instagram h-4 w-4"
								aria-hidden="true"
							>
								<rect
									width="20"
									height="20"
									x="2"
									y="2"
									rx="5"
									ry="5"
								></rect>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
								<line
									x1="17.5"
									x2="17.51"
									y1="6.5"
									y2="6.5"
								></line>
							</svg>
						</FSocial>
						<FSocial
							href={SITE.social.facebook}
							testid="footer-facebook"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-facebook h-4 w-4"
								aria-hidden="true"
							>
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
							</svg>
						</FSocial>
						<FSocial
							href={SITE.social.youtube}
							testid="footer-youtube"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-youtube h-4 w-4"
								aria-hidden="true"
							>
								<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
								<path d="m10 15 5-3-5-3z"></path>
							</svg>
						</FSocial>
					</div>
				</div>

				<div className="lg:col-span-3">
					<div className="text-xs uppercase tracking-[0.25em] text-white/50">
						Quick Links
					</div>
					<ul className="mt-4 space-y-2">
						{QUICK.map((q) => (
							<li key={q.id}>
								<button
									data-testid={`footer-link-${q.id}`}
									onClick={() => goTo(q.id)}
									className="text-sm text-white/80 hover:text-white"
								>
									{q.label}
								</button>
							</li>
						))}
					</ul>
				</div>

				<div className="lg:col-span-4">
					<div className="text-xs uppercase tracking-[0.25em] text-white/50">
						Get in touch
					</div>
					<ul className="mt-4 space-y-2 text-sm text-white/80">
						<li>
							<a
								data-testid="footer-phone"
								href={`tel:${SITE.phoneTel}`}
								className="hover:text-white"
							>
								{SITE.phone}
							</a>
						</li>
						<li>
							<a
								data-testid="footer-whatsapp"
								href={waLink()}
								target="_blank"
								rel="noreferrer"
								className="hover:text-white"
							>
								WhatsApp us
							</a>
						</li>
						<li>
							<a
								data-testid="footer-email"
								href={`mailto:${SITE.email}`}
								className="hover:text-white break-all"
							>
								{SITE.email}
							</a>
						</li>
						<li className="text-white/60">{SITE.address}</li>
						{/* <li className="pt-2">
							<a
								data-testid="footer-justdial"
								href={SITE.justDial}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1.5 text-sm text-white hover:text-[#E8C887]"
							>
								View us on Just Dial{" "}
								<ExternalLink className="h-3.5 w-3.5" />
							</a>
						</li> */}
					</ul>
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/55">
					<div data-testid="footer-copyright">
						© {year} {SITE.brand}. All rights reserved.
					</div>
					<div>Crafted with care · {SITE.city}, Uttar Pradesh</div>
				</div>
			</div>
		</footer>
	);
}

const FSocial = ({ href, testid, children }) => (
	<a
		href={href}
		target="_blank"
		rel="noreferrer"
		data-testid={testid}
		className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-colors"
	>
		{children}
	</a>
);
