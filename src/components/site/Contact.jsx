import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/siteConfig";

export default function Contact() {
	return (
		<section
			id="contact"
			data-testid="contact-section"
			className="section-y bg-background"
		>
			<div className="container-x grid lg:grid-cols-12 gap-10">
				<div className="lg:col-span-5">
					<span className="divider-mark eyebrow">Contact</span>
					<h2
						className="font-display text-4xl sm:text-5xl mt-5 leading-[1.05]"
						data-testid="contact-title"
					>
						We'd love to hear from you.
					</h2>
					<p className="text-muted-foreground mt-5">
						Drop by, call, or message — whichever feels easiest. We
						typically reply within a few hours.
					</p>

					<ul className="mt-8 space-y-5">
						<Row icon={<Phone className="h-4 w-4" />} label="Phone">
							<a
								data-testid="contact-phone"
								href={`tel:${SITE.phoneTel}`}
								className="hover:text-primary"
							>
								{SITE.phone}
							</a>
						</Row>
						<Row
							icon={<MessageCircle className="h-4 w-4" />}
							label="WhatsApp"
						>
							<a
								data-testid="contact-whatsapp"
								href={waLink()}
								target="_blank"
								rel="noreferrer"
								className="hover:text-primary"
							>
								Click to chat
							</a>
						</Row>
						<Row icon={<Mail className="h-4 w-4" />} label="Email">
							<a
								data-testid="contact-email"
								href={`mailto:${SITE.email}`}
								className="hover:text-primary break-all"
							>
								{SITE.email}
							</a>
						</Row>
						<Row
							icon={<MapPin className="h-4 w-4" />}
							label="Office"
						>
							<span data-testid="contact-address">
								{SITE.address}
							</span>
						</Row>
					</ul>

					<div className="mt-8 flex items-center gap-3">
						<Social
							href={SITE.social.instagram}
							testid="contact-instagram"
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
						</Social>
						<Social
							href={SITE.social.facebook}
							testid="contact-facebook"
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
						</Social>
						<Social
							href={SITE.social.youtube}
							testid="contact-youtube"
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
						</Social>
						<a
							data-testid="contact-wa-btn"
							href={waLink()}
							target="_blank"
							rel="noreferrer"
							className="btn-wa !py-2 !px-4"
						>
							WhatsApp Us
						</a>
					</div>
				</div>

				<div className="lg:col-span-7">
					<div className="card-soft overflow-hidden h-full min-h-[360px]">
						<iframe
							data-testid="contact-map"
							title="Office location"
							src={SITE.mapEmbed}
							loading="lazy"
							className="w-full h-full min-h-[360px] border-0"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

const Row = ({ icon, label, children }) => (
	<li className="flex items-start gap-4">
		<span
			className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full"
			style={{
				background: "hsl(var(--primary) / 0.08)",
				color: "hsl(var(--primary))",
			}}
		>
			{icon}
		</span>
		<div>
			<div className="eyebrow">{label}</div>
			<div className="text-base mt-0.5">{children}</div>
		</div>
	</li>
);

const Social = ({ href, children, testid }) => (
	<a
		href={href}
		target="_blank"
		rel="noreferrer"
		data-testid={testid}
		className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary transition-colors"
	>
		{children}
	</a>
);
