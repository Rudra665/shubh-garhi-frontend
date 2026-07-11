import axios from "axios";
import { toast } from "sonner";
import { Calendar as CalIcon, Loader2, Send } from "lucide-react";
import { SITE, buildEnquiryWaMessage, waLink } from "@/lib/siteConfig";
import { SERVICES } from "@/components/site/Services";
import { useState } from "react";

const API_BASE = (import.meta.env.VITE_BACKEND_URL ?? "").replace(/\/$/, "");
const API = API_BASE ? `${API_BASE}/api` : "/api";

const EVENT_TYPES = [
	"Wedding",
	"Engagement / Roka",
	"Pre-Wedding Shoot",
	"Cocktail / Sangeet Night",
	"Sangeet",
	"Haldi / Mehendi",
	"Baraat / Welcome Ceremony",
	"Reception",
	"Post-Wedding Brunch",
];

const BUDGET_OPTIONS = [
	"Under ₹5 lakh",
	"₹5–15 lakh",
	"₹15–35 lakh",
	"₹35–70 lakh",
	"₹70 lakh+",
	"Prefer to discuss",
];

const SERVICE_OPTIONS = SERVICES.map((service) => ({
	value: service.id,
	label: service.title,
}));

export default function EnquiryForm() {
	const [form, setForm] = useState({
		name: "",
		phone: "",
		event_type: "",
		city: SITE.city,
		guest_count: "",
		preferred_locations: "",
		venue_name: "",
		budget_range: "",
		services_needed: [],
		message: "",
	});
	const [date, setDate] = useState("");
	const [submitting, setSubmitting] = useState(false);

	const update = (k) => (e) =>
		setForm((p) => ({ ...p, [k]: e?.target ? e.target.value : e }));

	const toggleService = (serviceId) => {
		setForm((p) => ({
			...p,
			services_needed: p.services_needed.includes(serviceId)
				? p.services_needed.filter((id) => id !== serviceId)
				: [...p.services_needed, serviceId],
		}));
	};

	const submit = async (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.phone.trim()) {
			toast.error("Please share your name and phone number.");
			return;
		}
		if (!form.services_needed.length) {
			toast.error("Please select at least one service you need.");
			return;
		}
		setSubmitting(true);
		try {
			await axios.post(`${API}/leads`, {
				...form,
				event_date: date,
				services_needed: form.services_needed.join(", "),
			});
			toast.success("Thank you! We'll reach out within 24 hours.");

			// Open WhatsApp with the enquiry pre-filled
			const message = buildEnquiryWaMessage(form, date);
			window.open(waLink(message), "_blank", "noopener,noreferrer");

			setForm({
				name: "",
				phone: "",
				event_type: "",
				city: SITE.city,
				guest_count: "",
				preferred_locations: "",
				venue_name: "",
				budget_range: "",
				services_needed: [],
				message: "",
			});
			setDate("");
		} catch (err) {
			toast.error(
				"Couldn't submit. Please WhatsApp or call us directly.",
				err,
			);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section
			id="enquire"
			data-testid="enquiry-section"
			className="section-y relative"
			style={{ background: "hsl(var(--muted))" }}
		>
			<div className="container-x grid lg:grid-cols-12 gap-12 items-start">
				<div className="lg:col-span-5">
					<span className="divider-mark eyebrow">Enquire</span>
					<h2
						className="font-display text-4xl sm:text-5xl mt-5 leading-[1.05]"
						data-testid="enquiry-title"
					>
						Tell us about your day. We'll handle the rest.
					</h2>
					<p className="text-muted-foreground mt-5 text-base sm:text-lg">
						Share a few details and our planning lead will revert
						with a tailored proposal — usually within 24 hours.
					</p>
					<div className="mt-8 space-y-3 text-sm">
						<div>
							<div className="eyebrow">Call</div>
							<a
								href={`tel:${SITE.phoneTel}`}
								className="text-base hover:text-primary"
							>
								{SITE.phone}
							</a>
						</div>
						<div>
							<div className="eyebrow">Email</div>
							<a
								href={`mailto:${SITE.email}`}
								className="text-base hover:text-primary"
							>
								{SITE.email}
							</a>
						</div>
					</div>
				</div>

				<form
					onSubmit={submit}
					data-testid="enquiry-form"
					className="lg:col-span-7 card-soft p-6 sm:p-8 space-y-5"
				>
					<div className="space-y-3">
						<label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
							Services you need *
						</label>
						<div className="grid sm:grid-cols-2 gap-2">
							{SERVICE_OPTIONS.map((service) => {
								const checked = form.services_needed.includes(
									service.value,
								);
								return (
									<button
										type="button"
										key={service.value}
										data-testid={`service-option-${service.value}`}
										onClick={() =>
											toggleService(service.value)
										}
										className={`rounded-lg border px-4 py-3 text-left transition-colors ${
											checked
												? "border-primary bg-primary/5 text-foreground"
												: "border-border bg-white hover:border-primary/50"
										}`}
									>
										<span className="block text-sm font-medium">
											{service.label}
										</span>
										<span className="block text-xs text-muted-foreground mt-1">
											{checked
												? "Selected"
												: "Tap to add"}
										</span>
									</button>
								);
							})}
						</div>
					</div>

					<div className="grid sm:grid-cols-2 gap-5">
						<Field label="Full Name *">
							<input
								data-testid="form-name"
								type="text"
								value={form.name}
								onChange={update("name")}
								placeholder="Your full name"
								required
								className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
							/>
						</Field>
						<Field label="Phone Number *">
							<input
								data-testid="form-phone"
								type="tel"
								value={form.phone}
								onChange={update("phone")}
								placeholder="+91 ..."
								inputMode="tel"
								required
								className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
							/>
						</Field>
					</div>

					<div className="grid sm:grid-cols-2 gap-5">
						<Field label="Event Date">
							<div className="relative">
								<CalIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
								<input
									data-testid="form-date-trigger"
									type="date"
									value={date}
									onChange={(e) => setDate(e.target.value)}
									className="w-full rounded-md border border-border bg-white py-2 pl-10 pr-3 text-sm outline-none focus:border-primary"
								/>
							</div>
						</Field>
						<Field label="Wedding Event Type">
							<select
								data-testid="form-event-type"
								value={form.event_type}
								onChange={(e) =>
									setForm((p) => ({
										...p,
										event_type: e.target.value,
									}))
								}
								className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
							>
								<option value="">Choose…</option>
								{EVENT_TYPES.map((t) => (
									<option
										key={t}
										value={t}
										data-testid={`event-type-${t}`}
									>
										{t}
									</option>
								))}
							</select>
						</Field>
					</div>

					<div className="grid sm:grid-cols-2 gap-5">
						<Field label="Guest Count">
							<input
								data-testid="form-guest-count"
								type="number"
								min="1"
								value={form.guest_count}
								onChange={update("guest_count")}
								placeholder="Approx. number of guests"
								className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
							/>
						</Field>
						<Field label="Budget Range">
							<select
								data-testid="form-budget-range"
								value={form.budget_range}
								onChange={update("budget_range")}
								className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
							>
								<option value="">Select budget range</option>
								{BUDGET_OPTIONS.map((budget) => (
									<option key={budget} value={budget}>
										{budget}
									</option>
								))}
							</select>
						</Field>
					</div>

					<div className="grid sm:grid-cols-2 gap-5">
						<Field label="Preferred Location(s)">
							<input
								data-testid="form-preferred-locations"
								type="text"
								value={form.preferred_locations}
								onChange={update("preferred_locations")}
								placeholder="Jhansi, Orchha, Datia…"
								className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
							/>
						</Field>
						<Field label="Venue / Property Name">
							<input
								data-testid="form-venue-name"
								type="text"
								value={form.venue_name}
								onChange={update("venue_name")}
								placeholder="Hotel, lawn, farmhouse or palace name"
								className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
							/>
						</Field>
					</div>

					<Field label="City">
						<input
							data-testid="form-city"
							type="text"
							value={form.city}
							onChange={update("city")}
							placeholder="Event city"
							className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
						/>
					</Field>

					<Field label="Tell us a little more">
						<textarea
							data-testid="form-message"
							value={form.message}
							onChange={update("message")}
							rows={4}
							placeholder="Share any timeline, special requests, vendor preferences, décor style, or other details we should know…"
							className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
						/>
					</Field>

					<div className="flex flex-wrap items-center justify-between gap-4 pt-2">
						<p className="text-xs text-muted-foreground">
							By submitting, you agree to be contacted via phone,
							WhatsApp or email.
						</p>
						<button
							type="submit"
							data-testid="form-submit"
							disabled={submitting}
							className="btn-primary disabled:opacity-70"
						>
							{submitting ? (
								<>
									<Loader2 className="h-4 w-4 animate-spin" />{" "}
									Submitting…
								</>
							) : (
								<>
									Send Enquiry <Send className="h-4 w-4" />
								</>
							)}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

const Field = ({ label, children }) => (
	<div className="space-y-2">
		<label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
			{label}
		</label>
		{children}
	</div>
);
