// Edit values here to update the entire site.
export const SITE = {
	brand: "Shubh Garhi",
	tagline: "Because Your Big Day Deserves No Compromises",
	founder: "Mr. Aman Tiwari & Mr. Sushil Chauhan",
	city: "Jhansi",
	phone: "+91-9795459646",
	phoneTel: "919795459646",
	whatsapp: "919795459646", // international, no +, used in wa.me links
	email: "bussiness@shubh-garhi.com",
	address: "Jhansi, Uttar Pradesh, India 284001",
	mapEmbed:
		"https://www.google.com/maps?q=Jhansi%2C%20Uttar%20Pradesh%2C%20India%20284001&output=embed",
	social: {
		instagram: "https://instagram.com/",
		facebook: "https://facebook.com/",
		youtube: "https://youtube.com/",
	},
	justDial: "https://www.justdial.com/",
	serviceAreas: [
		"Jhansi",
		"Orchha",
		"Datia",
		"Shivpuri",
		"Gwalior",
		"Lalitpur",
		"Bhopal",
	],
};

export const waLink = (
	text = `Hi! I'd like to enquire about wedding planning. Here are my details:
				Name:
				Phone:
				preferred date of event:
				preferred location of event:
				Services interested in:`,
) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
