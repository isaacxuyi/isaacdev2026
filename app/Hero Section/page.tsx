import Hero from "@/app/Hero Section/Hero/page";
import Header from "@/app/Hero Section/Header/page";
import './HeroSection.css' // Your styles for the container
import Footer from "../componets/Footer/page";


export default function HeroSection() {
    return (
        <section className="hero-layout-wrapper">
            {/* The video sits here, behind the children */}
            <video autoPlay muted loop playsInline className="background-video">
                <source src="Assets/videos/Clip.mp4" type="video/mp4" />
            </video>

            {/* The components sit on top */}
            <Header />
            <Hero />
            <Footer />
        </section>


    );
}