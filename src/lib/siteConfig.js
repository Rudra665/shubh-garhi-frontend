// Edit values here to update the entire site.
export const SITE = {
	brand: "Shubh Garhi",
	tagline: "Because Your Big Day Deserves No Compromises",
	founder: "Mrs. Deepika Tiwari & Mr. Sushil Kumar Singh",
	city: "Jhansi",
	phone: "+91-9795459646",
	phoneTel: "919795459646",
	whatsapp: "919795459646", // international, no +, used in wa.me links
	email: "bhadouriarudra665@gmail.com",
	address: "Jhansi, Uttar Pradesh, India 284001",
	mapEmbed:
		"https://www.google.com/maps?q=Jhansi%2C%20Uttar%20Pradesh%2C%20India%20284001&output=embed",
	social: {
		instagram: "https://instagram.com/",
		facebook: "https://facebook.com/",
		youtube: "https://youtube.com/",
	},
	justDial: "https://www.justdial.com/",
	serviceAreas: ["Jhansi", "Orchha", "Lalitpur", "Shivpuri"],
};

export const waLink = (
	text = "Hi! I'd like to enquire about wedding planning.",
) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
