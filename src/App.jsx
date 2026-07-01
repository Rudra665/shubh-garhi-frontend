import "./App.css";
import { Toaster } from "sonner";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Gallery from "@/components/site/Gallery";
import EnquiryForm from "@/components/site/EnquiryForm";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import StickyWhatsApp from "@/components/site/StickyWhatsApp";
import Chatbot from "@/components/site/Chatbot";

function App() {
	return (
		<div className="App" data-testid="app-root">
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Gallery />
				<EnquiryForm />
				<Contact />
			</main>
			<Footer />
			<StickyWhatsApp />
			<Chatbot />
			<Toaster position="top-center" richColors closeButton />
		</div>
	);
}

export default App;
