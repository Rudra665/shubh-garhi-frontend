import axios from "axios";
import { toast } from "sonner";
import { Calendar as CalIcon, Loader2, Send } from "lucide-react";
import { SITE } from "@/lib/siteConfig";
import { useState } from "react";

const API_BASE = (import.meta.env.VITE_BACKEND_URL ?? "").replace(/\/$/, "");
const API = API_BASE ? `${API_BASE}/api` : "/api";

const EVENT_TYPES = [
	"Wedding",
	"Engagement / Roka",
	"Sangeet",
	"Haldi / Mehendi",
	"Reception",
	"Birthday / Anniversary",
	"Corporate Event",
	"Other",
];

export default function EnquiryForm() {
	const [form, setForm] = useState({
		name: "",
		phone: "",
		event_type: "",
		city: SITE.city,
		message: "",
	});
	const [date, setDate] = useState("");
	const [submitting, setSubmitting] = useState(false);

	const update = (k) => (e) =>
		setForm((p) => ({ ...p, [k]: e?.target ? e.target.value : e }));

	const submit = async (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.phone.trim()) {
			toast.error("Please share your name and phone number.");
			return;
		}
		setSubmitting(true);
		try {
			await axios.post(`${API}/leads`, {
				...form,
				event_date: date,
			});
			toast.success("Thank you! We'll reach out within 24 hours.");
			setForm({
				name: "",
				phone: "",
				event_type: "",
				city: SITE.city,
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
						<Field label="Event Type">
							<select
								data-testid="form-event-type"
								value={form.event_type}
								onChange={(e) =>
									setForm((p) => ({ ...p, event_type: e.target.value }))
								}
								className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
							>
								<option value="">Choose…</option>
								{EVENT_TYPES.map((t) => (
									<option key={t} value={t} data-testid={`event-type-${t}`}>
										{t}
									</option>
								))}
							</select>
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
							placeholder="Approx. guest count, venue (if booked), services you're looking for…"
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
