import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import AreasMain from "~/component/AreasMain";
import HeroSection from "~/component/HeroSelection";
import Header from "~/component/Header";
import ClientCarousel from "~/component/ClientCarousel";



export function Welcome() {
  const clientLogos = [ 
  { src: "../assets/company-logos/logo1.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo2.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo3.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo4.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo5.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo6.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo7.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo8.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo9.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo10.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo11.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo12.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo13.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo14.png", alt: "Coca-Cola", url: "https://coca-cola.com" },
  { src: "../assets/company-logos/logo15.png", alt: "Coca-Cola", url: "https://coca-cola.com" },

];
  return (
	<main className=" relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
    <div className="snap-center">
      <HeroSection/>
      </div>
    <div className="snap-center">
      <AreasMain/>
      </div>
    <div className="snap-center">
      <Header/>
      </div>
    <div className="snap-center">
      <ClientCarousel clients={clientLogos}/>
      </div>
    <div className="snap-center">
      </div>
    </main>
  );
}