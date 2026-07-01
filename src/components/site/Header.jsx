import { Menu, X, Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/siteConfig";
import { useEffect, useState } from "react";

const NAV = [
	{ id: "about", label: "About" },
	{ id: "services", label: "Services" },
	{ id: "gallery", label: "Gallery" },
	{ id: "enquire", label: "Enquire" },
	{ id: "contact", label: "Contact" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const goTo = (id) => {
		setOpen(false);
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<header
			data-testid="site-header"
			className={`fixed inset-x-0 top-0 z-40 transition-all ${
				scrolled ? "glass-nav" : "bg-[#ffffffb8]"
			}`}
		>
			<div className="container-x flex items-center justify-between h-16 sm:h-20">
				<button
					data-testid="brand-link"
					onClick={() => goTo("top")}
					className="flex items-center gap-2 flex-col"
				>
					<span
						className="font-display text-2xl sm:text-3xl tracking-tight"
						style={{ color: "hsl(var(--primary))" }}
					>
						{SITE.brand}
					</span>
					<span className="hidden sm:inline-block text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
						Weddings · Events
					</span>
				</button>

				<nav className="hidden md:flex items-center gap-8">
					{NAV.map((n) => (
						<button
							key={n.id}
							data-testid={`nav-${n.id}`}
							onClick={() => goTo(n.id)}
							className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
						>
							{n.label}
						</button>
					))}
				</nav>

				<div className="hidden md:flex items-center gap-2">
					<a
						data-testid="header-call"
						href={`tel:${SITE.phoneTel}`}
						className="btn-ghost !py-2 !px-4"
					>
						<Phone className="h-4 w-4" /> {SITE.phone}
					</a>
					<a
						data-testid="header-whatsapp"
						href={waLink()}
						target="_blank"
						rel="noreferrer"
						className="btn-wa !py-2 !px-4"
					>
						WhatsApp
					</a>
				</div>

				<button
					data-testid="mobile-menu-toggle"
					onClick={() => setOpen((s) => !s)}
					className="md:hidden p-2 rounded-md border border-border bg-white/70"
					aria-label="menu"
				>
					{open ? (
						<X className="h-5 w-5" />
					) : (
						<Menu className="h-5 w-5" />
					)}
				</button>
			</div>

			{open && (
				<div
					data-testid="mobile-menu"
					className="md:hidden border-t border-border bg-white"
				>
					<div className="container-x py-4 flex flex-col gap-3">
						{NAV.map((n) => (
							<button
								key={n.id}
								data-testid={`mobile-nav-${n.id}`}
								onClick={() => goTo(n.id)}
								className="text-left text-sm py-2"
							>
								{n.label}
							</button>
						))}
						<div className="flex gap-2 pt-2">
							<a
								data-testid="mobile-call"
								href={`tel:${SITE.phoneTel}`}
								className="btn-ghost flex-1 !py-2"
							>
								Call
							</a>
							<a
								data-testid="mobile-whatsapp"
								href={waLink()}
								target="_blank"
								rel="noreferrer"
								className="btn-wa flex-1 !py-2"
							>
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
