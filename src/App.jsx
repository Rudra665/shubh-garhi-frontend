import "./App.css";
import { Toaster } from "sonner";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
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
import ServiceDetailPage from "@/components/site/ServiceDetailPage";

function App() {
	return (
		<HashRouter>
			<div className="App" data-testid="app-root">
				<Header />
				<main>
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Hero />
									<About />
									<Services />
									<Gallery />
									<EnquiryForm />
									<Contact />
								</>
							}
						/>
						<Route
							path="/services/:serviceId"
							element={<ServiceDetailPage />}
						/>
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
				<Footer />
				<StickyWhatsApp />
				<Chatbot />
				<Toaster position="top-center" richColors closeButton />
			</div>
		</HashRouter>
	);
}

export default App;
