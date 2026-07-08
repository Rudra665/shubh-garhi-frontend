import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/siteConfig";

export default function StickyWhatsApp() {
	return (
		<a
			data-testid="sticky-whatsapp"
			href={waLink(
				`Hi ${SITE.brand}! I'd like to know more about your wedding planning services.
				here are my details:
				Name:
				Phone:
				preferred date of event:
				preferred location of event:
				Services interested in:`,
			)}
			target="_blank"
			rel="noreferrer"
			className="fixed z-50 bottom-5 left-5 sm:bottom-6 sm:left-6 inline-flex items-center gap-2 rounded-full px-4 py-3 text-white shadow-2xl"
			style={{
				background: "hsl(var(--whatsapp))",
				boxShadow: "0 14px 38px hsl(var(--whatsapp) / 0.45)",
			}}
			aria-label="Chat on WhatsApp"
		>
			<MessageCircle className="h-5 w-5" />
			<span className="hidden sm:inline text-sm font-medium">
				WhatsApp
			</span>
		</a>
	);
}
