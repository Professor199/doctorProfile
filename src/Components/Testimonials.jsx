import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "semantic-ui-react";
import patient1 from '../../src/assets/patient1.png'
import patient12 from '../../src/assets/patient12.png'
import patient3 from '../../src/assets/patient3.png'
import patient11 from '../../src/assets/patient11.png'
import patient5 from '../../src/assets/patient5.png'
import patient6 from '../../src/assets/patient6.png'
import patient8 from '../../src/assets/patient8.png'
import patient7 from '../../src/assets/patient7.png'
import patient9 from '../../src/assets/patient9.png'
import patient10 from '../../src/assets/patient10.png'

const testimonials = [
  {
    name: "Ravi Sharma",
    review: "I had chronic migraine issues for years. Dr. Mandloi’s treatment worked wonders for me!",
    img: patient1
  },
  {
    name: "Priya Verma",
    review: "Very professional and caring doctor. My thyroid treatment went really well.",
    img: patient12
  },
  {
    name: "Ankit Jain",
    review: "Best homeopathy clinic in Bhopal. My skin allergy is completely gone.",
    img: patient3
  },
  {
    name: "Neha Gupta",
    review: "Dr. Mandloi listens patiently and gives the best advice. Highly recommended!",
    img: patient11
  },
  {
    name: "Suresh Patil",
    review: "My child’s frequent cough and cold improved a lot after treatment. Very satisfied.",
    img: patient5
  },
  {
    name: "Kavita Mehra",
    review: "The doctor explains everything clearly and gives genuine advice. Truly trustworthy.",
    img:patient6
  },
  {
    name: "Rahul Khanna",
    review: "Excellent experience! My acidity problem got cured with homeopathy here.",
    img: patient8
  },
  {
    name: "Shalini Desai",
    review: "Very clean and positive clinic atmosphere. Doctor gives ample time to each patient.",
    img: patient7
  },
  {
    name: "Amit Tiwari",
    review: "Dr. Mandloi’s medicines are gentle but very effective. No side effects at all.",
    img: patient9
  },
  {
    name: "Pooja Soni",
    review: "I took treatment for hair fall and got amazing results. Highly recommended clinic.",
    img:patient10
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
     responsive: [
      {
        breakpoint: 768, // tablet
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 1024, // desktop
        settings: { slidesToShow: 2 }
      }
    ]
  };
  return (
    <div className="testimonials">
      <h1 style={{ textAlign: "center" }}>What our patients say <Icon name="comments"/></h1>
      <div style={{ width: "1000px", margin: "auto" }}>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={t.img}
                alt={t.name}
                className="patient-img"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  margin: "auto",
                }}
              />
              <div
                className="stars"
                style={{ color: "gold", fontSize: "18px", marginBottom: "5px" }}
              >
                ⭐⭐⭐⭐⭐
              </div>
              <p className="review">“{t.review}”</p>
              <h3 className="name">- {t.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
