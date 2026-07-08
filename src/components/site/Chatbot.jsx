import axios from "axios";
import { toast } from "sonner";
import { MessageSquare, X, Send } from "lucide-react";
import { SITE, waLink } from "@/lib/siteConfig";
import { useEffect, useRef, useState } from "react";

const API_BASE = (import.meta.env.VITE_BACKEND_URL ?? "").replace(/\/$/, "");
const API = API_BASE ? `${API_BASE}/api` : "/api";

const FAQS = [
	{
		q: "What's your pricing approach?",
		a: "Our packages are tailored to guest count, venue, and the services you choose (décor, venue, photography, catering, beauty, stationery, entertainment, gifting, vendor management, logistics, hospitality, rituals). After a short call we share a transparent itemised proposal — no last-minute add-ons.",
	},
	{
		q: "Which areas do you serve?",
		a: `We're based in ${SITE.city} and regularly plan events across ${SITE.serviceAreas.join(", ")}. Destination weddings elsewhere in Bundelkhand & Uttar Pradesh are available on request.`,
	},
	{
		q: "Is my date available?",
		a: "We take a limited number of weddings each season to keep quality high. Share your event date below and we'll check availability and revert within a few hours.",
	},
	{
		q: "Can you handle just one service (e.g. décor only)?",
		a: "Absolutely. You can hire us for a single craft or the whole celebration — the choice is yours.",
	},
];

export default function Chatbot() {
	const [open, setOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			role: "bot",
			text: `Namaste! I'm Shubh — ${SITE.brand}'s assistant. How can I help?`,
		},
		{
			role: "bot",
			text: "Pick a question, or leave your number and we'll reach out.",
		},
	]);
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [question, setQuestion] = useState("");
	const [sending, setSending] = useState(false);
	const endRef = useRef(null);

	useEffect(() => {
		if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, open]);

	const ask = (faq) => {
		setMessages((m) => [
			...m,
			{ role: "user", text: faq.q },
			{ role: "bot", text: faq.a },
		]);
		setQuestion(faq.q);
	};

	const sendContact = async () => {
		if (!phone.trim()) {
			toast.error("Please share your phone number first.");
			return;
		}
		setSending(true);
		try {
			await axios.post(`${API}/chatbot/contact`, {
				name: name || "Chatbot Visitor",
				phone,
				question: question || "Asked via chatbot",
			});
			setMessages((m) => [
				...m,
				{ role: "user", text: `Please contact me on ${phone}` },
				{
					role: "bot",
					text: "Got it! Our team will reach out shortly. Meanwhile, feel free to WhatsApp us for an instant reply.",
				},
			]);
			setPhone("");
			setName("");
			toast.success("Thanks — we'll reach out shortly.");
		} catch (e) {
			toast.error("Could not submit. Please WhatsApp us directly.", e);
		} finally {
			setSending(false);
		}
	};

	return (
		<>
			<button
				data-testid="chatbot-toggle"
				onClick={() => setOpen((s) => !s)}
				className="fixed z-50 bottom-5 right-5 sm:bottom-6 sm:right-6 inline-flex items-center justify-center h-14 w-14 rounded-full shadow-2xl text-white"
				style={{
					background: "hsl(var(--primary))",
					boxShadow: "0 14px 38px hsl(var(--primary) / 0.45)",
				}}
				aria-label="Open chatbot"
			>
				{open ? (
					<X className="h-5 w-5" />
				) : (
					<MessageSquare className="h-5 w-5" />
				)}
			</button>

			{open && (
				<div
					data-testid="chatbot-panel"
					className="fixed z-50 bottom-24 right-4 sm:right-6 w-[92vw] sm:w-[380px] max-h-[78vh] flex flex-col rounded-2xl overflow-hidden card-soft"
					style={{ background: "white" }}
				>
					<div
						className="px-4 py-3 flex items-center justify-between"
						style={{
							background: "hsl(var(--primary))",
							color: "white",
						}}
					>
						<div>
							<div className="font-display text-lg leading-none">
								{SITE.brand} · Shubh
							</div>
							<div className="text-[10px] uppercase tracking-[0.2em] opacity-80">
								Usually replies in minutes
							</div>
						</div>
						<button
							data-testid="chatbot-close"
							onClick={() => setOpen(false)}
							className="opacity-80 hover:opacity-100"
						>
							<X className="h-4 w-4" />
						</button>
					</div>

					<div
						className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm"
						style={{ background: "hsl(var(--muted))" }}
					>
						{messages.map((m, i) => (
							<div
								key={i}
								className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
							>
								<div
									data-testid={`chatbot-msg-${i}`}
									className={`max-w-[85%] px-3 py-2 rounded-xl ${
										m.role === "user"
											? "bg-foreground text-background rounded-br-sm"
											: "bg-white border border-border rounded-bl-sm"
									}`}
								>
									{m.text}
								</div>
							</div>
						))}
						<div ref={endRef} />
					</div>

					<div className="px-4 py-3 border-t border-border bg-white">
						<div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
							Quick questions
						</div>
						<div className="flex flex-wrap gap-2">
							{FAQS.map((f, i) => (
								<button
									key={i}
									data-testid={`chatbot-faq-${i}`}
									onClick={() => ask(f)}
									className="text-xs rounded-full border border-border px-3 py-1.5 hover:border-primary hover:text-primary"
								>
									{f.q}
								</button>
							))}
						</div>

						<div className="mt-4 grid grid-cols-2 gap-2">
							<input
								data-testid="chatbot-name"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Name (optional)"
								className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
							/>
							<input
								data-testid="chatbot-phone"
								type="tel"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								placeholder="Phone *"
								inputMode="tel"
								className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
							/>
						</div>

						<div className="mt-2 flex gap-2">
							<button
								data-testid="chatbot-submit"
								onClick={sendContact}
								disabled={sending}
								className="btn-primary flex-1 !py-2 !text-xs disabled:opacity-70"
							>
								{sending ? (
									"Sending…"
								) : (
									<>
										<Send className="h-3.5 w-3.5" /> Request
										callback
									</>
								)}
							</button>
							<a
								data-testid="chatbot-wa"
								href={waLink()}
								target="_blank"
								rel="noreferrer"
								className="btn-wa !py-2 !px-3 !text-xs"
							>
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
