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
            <h1>Who We Are</h1>
            <h2>
                Welcome to Travel Ease, your ultimate travel companion! We are a modern travel
                platform designed to make trip planning effortless, personalized, and exciting.
                Whether you're looking for an adventurous getaway, a relaxing vacation, or a
                cultural exploration, we’ve got you covered.
            </h2>

            <h1>What We Offer</h1>
            <AboutCard cards={offerings}></AboutCard>

            <br />
            <br />
            <br />
            <br />

            <h1>Why Choose Us</h1>
            <br />
            <AboutCard cards={choose} />
            <br />
            <br />

            <h1>Our Mission</h1>
            <h2>
                We believe that travel is not just about visiting places—it's about creating
                memories. Our goal is to provide seamless, enriching, and unforgettable travel
                experiences for every explorer.
            </h2>

            {/* Get in Touch Section */}
            <br />
            <div className="contact us">
                <h1>Get In Touch</h1>
                <GetInTouch></GetInTouch>
            </div>
        </div>
    );
}
