import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { SERVICES } from "@/components/site/Services";
import { waLink } from "@/lib/siteConfig";

export default function ServiceDetailPage() {
	const { serviceId } = useParams();
	const navigate = useNavigate();
	const service = SERVICES.find((s) => s.id === serviceId);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [serviceId]);

	if (!service) {
		return <Navigate to="/" replace />;
	}

	const goToServicesSection = (e) => {
		e.preventDefault();
		navigate("/");
		scrollToServicesWhenReady();
	};

	function scrollToServicesWhenReady() {
		const existing = document.getElementById("services");
		if (existing) {
			existing.scrollIntoView({ behavior: "smooth", block: "start" });
			return;
		}

		const observer = new MutationObserver(() => {
			const el = document.getElementById("services");
			if (el) {
				observer.disconnect();
				el.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		});

		observer.observe(document.body, { childList: true, subtree: true });

		// safety net: stop watching after 5s so we don't leak an observer
		setTimeout(() => observer.disconnect(), 5000);
	}

	return (
		<section className="section-y bg-background">
			<div className="container-x">
				<div className="mb-8 flex items-center justify-between gap-4">
					<Link
						to="/#services"
						onClick={goToServicesSection}
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						<ArrowLeft className="h-4 w-4" />
						Back to services
					</Link>
					<a
						href={waLink(
							`Hi! I want to enquire about ${service.title}. Here are my details:
				Name:
				Phone:
				preferred date of event:
				preferred location of event:
				Services interested in:`,
						)}
						target="_blank"
						rel="noreferrer"
						className="btn-primary !py-2 !px-4 text-sm"
					>
						<ArrowUpRight className="h-4 w-4" />
						Enquire now
					</a>
				</div>

				<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
					<div>
						<span className="divider-mark eyebrow">
							Service details
						</span>
						<h1 className="font-display text-4xl sm:text-5xl mt-5 leading-[1.05]">
							{service.title}
						</h1>
						<p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
							{service.desc}
						</p>

						<div className="mt-10 grid gap-4 sm:grid-cols-2">
							{service.included.map((item) => (
								<div
									key={item}
									className="rounded-2xl border border-border bg-muted/40 p-4 flex items-start gap-3"
								>
									<div className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
										<Check className="h-3.5 w-3.5" />
									</div>
									<p className="text-sm leading-relaxed">
										{item}
									</p>
								</div>
							))}
						</div>
					</div>

					<aside className="card-soft overflow-hidden">
						<div className="aspect-[4/3] overflow-hidden">
							<img
								src={service.img}
								alt={service.title}
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="p-6">
							<div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
								What this service covers
							</div>
							<p className="mt-3 text-sm text-muted-foreground leading-relaxed">
								We tailor every booking to your guest count,
								venue, and event flow, then coordinate the
								moving parts so you don’t have to juggle
								vendors.
							</p>
							<Link
								to="/#services"
								onClick={goToServicesSection}
								className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
							>
								View all services
								<ArrowUpRight className="h-4 w-4" />
							</Link>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
