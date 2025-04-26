// contain review provided my each user which are passed to reviewcard as prop
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./reviews.css";

import Review from "./review_card";

export default function Reviews() {
  const reviews = [
    {
      user: "Ankit Dubey",
      review: "Amazing experience! The tour was well-organized, the guide was friendly and informative, and we got to see some breathtaking sights.",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      placeImg: "https://media.istockphoto.com/id/858917054/photo/happy-friends-travel-expedition-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=pBvcpc3A2Uz7yfJyL190ugXfJqsJyt8gKdR9KzvEz40=",

    },
    {
      user: "Priya Sharma",
      review: "A fantastic journey! The itinerary was perfect, and the accommodations were comfortable.",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      placeImg: "https://media.istockphoto.com/id/2202424781/photo/woman-looking-at-flock-of-migratory-birds-on-river-in-new-delhi-from-boat.jpg?s=612x612&w=0&k=20&c=D9JMALVBP1WuIuxobEB-GO6QUDaynN_0gYwBdgIXwyY="
     
    },
    {
      user: "Rohan Mehta",
      review: "The best tour I have ever been on! Everything was smooth, and the tour guide was extremely knowledgeable.",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      placeImg: "https://media.istockphoto.com/id/649356542/photo/adventurous-people-making-ascent-to-high-mountain-walking-on-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=qRNUM9m4We5lJfOsU9l4Equ5Hf2kccC3y24i_NPvtLk="
    },
    {
      user: "Sneha Kapoor",
      review: "Loved every bit of the experience. The transportation was comfortable, and the places we visited were breathtaking!",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      placeImg: "https://media.istockphoto.com/id/2203635856/photo/varanasi-holy-city-along-the-ganges-river-with-religious-temples-and-boats.jpg?s=612x612&w=0&k=20&c=LcK_2hLJlvx356MvZI3a3_MyD0dqoynmth7PmFtPrHM="},
    {
      user: "Amit Verma",
      review: "A must-try tour! Great customer service, seamless travel experience, and wonderful memories created.",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      placeImg: "https://images.unsplash.com/photo-1680816739813-f939ab78e84f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JvdXAlMjB0b3VyJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D" },
    {
      user: "Neha Joshi",
      review: "An unforgettable experience! The food, the views, and the people made this journey truly special.",
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      placeImg: "https://media.istockphoto.com/id/1140611116/photo/excited-to-travel.jpg?s=612x612&w=0&k=20&c=noaDQ4_2H3Z0AuZPiYtoljGRu_IyZyJwo4xiu1xs7C0="
    },
  ];

  return (
    <div className="reviews-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="reviews-swiper"
      >
        {reviews.map((rev, i) => (
          <SwiperSlide key={i}>
            <Review user={rev.user} review={rev.review} img={rev.img} placeImg={rev.placeImg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
