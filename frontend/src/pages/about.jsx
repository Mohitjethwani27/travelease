import AboutCard from "../components/aboutcard";
import "./about.css";
import Box from "../components/box";
import GetInTouch from "../components/getintouch";

export default function About() {
    const offerings = [
        {
            id: 1,
            title: "Handpicked Tour Packages",
            description:
                "Discover top-rated destinations with carefully curated travel experiences.",
            logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
        },
        {
            id: 2,
            title: "Personalized Itineraries",
            description:
                "AI-driven recommendations tailored to your travel preferences and style.",
            logo: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png",
        },
        {
            id: 3,
            title: "Secure & Hassle-Free Bookings",
            description: "Book flights, hotels, and tours with a seamless and secure process.",
            logo: "https://cdn-icons-png.flaticon.com/512/633/633759.png",
        },
        {
            id: 4,
            title: "24/7 Customer Support",
            description: "Reliable assistance at every step of your journey, anytime, anywhere.",
            logo: "https://cdn-icons-png.flaticon.com/512/724/724664.png",
        },
    ];

    const choose = [
        {
            id: 1,
            title: "🤖 Personalized Experience ",
            description:
                "Get tour recommendations based on your interests and travel preferences.",
            logo: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png",
        },
        {
            id: 2,
            title: "💰 Best Price Guarantee ",
            description: "Enjoy budget-friendly packages and unbeatable travel deals.",
            logo: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
        },
        {
            id: 3,
            title: "🌟 Trusted by Travelers ",
            description:
                "A growing network of satisfied travelers who trust us for their dream vacations.",
            logo: "https://cdn-icons-png.flaticon.com/512/684/684809.png",
        },
        {
            id: 4,
            title: "🛫 Seamless Planning ",
            description: "From flights to stays, enjoy a stress-free and smooth travel experience.",
            logo: "https://cdn-icons-png.flaticon.com/512/2997/2997707.png",
        },
    ];

    return (
        <div className="about">
            <div className="text">
            <h2>Who We Are</h2>
            </div>
            <h3>
                Welcome to Travel Ease, your ultimate travel companion! We are a modern travel
                platform designed to make trip planning effortless, personalized, and exciting.
                Whether you're looking for an adventurous getaway, a relaxing vacation, or a
                cultural exploration, we’ve got you covered.
            </h3>
            <div className="text">
            <h2>What We Offer</h2>
            </div>
            <AboutCard cards={offerings}></AboutCard>

            <br />
            <br />
            <br />
            <br />
            <div className="text">
            <h2>Why Choose Us</h2>
            </div>
            <br />
            <AboutCard cards={choose} />
            <br />
            <br />
            <div className="text">
            <h2>Our Mission</h2>
            </div>
            <h3>
                We believe that travel is not just about visiting places—it's about creating
                memories. Our goal is to provide seamless, enriching, and unforgettable travel
                experiences for every explorer.
            </h3>

            {/* Get in Touch Section */}
            <br />
            <div className="contact us">
                <div className="text">
                <h2>Get In Touch</h2></div>
                <GetInTouch></GetInTouch>
            </div>
        </div>
    );
}
