"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, Diamond, Facebook, Instagram, ShieldCheck, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="large"
        background="blurBottom"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Rooms & Suites",
          id: "rooms-suites",
        },
        {
          name: "Amenities",
          id: "amenities",
        },
        {
          name: "Gallery",
          id: "gallery",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Luxury Redefined"
      button={{
        text: "Book Now",
        href: "#contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "radial-gradient",
      }}
      title="Experience Luxury Redefined"
      description="Indulge in unparalleled elegance and personalized service at our exclusive high-end property, where every detail is crafted for your utmost comfort and sophisticated escape."
      buttons={[
        {
          text: "Book Your Stay",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPl5wkhbfw8NQyjrpv8EdIYjgV/uploaded-1774398445312-l08b79zz.jpg",
          imageAlt: "Luxurious bedroom with stunning view",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPl5wkhbfw8NQyjrpv8EdIYjgV/uploaded-1774398445312-2e1skopm.jpg",
          imageAlt: "Elegant bathroom with a freestanding tub",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPl5wkhbfw8NQyjrpv8EdIYjgV/uploaded-1774398445312-crqxefwc.jpg",
          imageAlt: "Modern kitchen with dark cabinetry",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPl5wkhbfw8NQyjrpv8EdIYjgV/uploaded-1774398445312-4mzos25q.jpg",
          imageAlt: "Spacious hotel suite bedroom",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-store-with-abstract-concept-architecture_23-2150862096.jpg",
          imageAlt: "Grand hotel exterior at night",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/living-room-with-modern-beautiful-decoration_181624-30650.jpg",
          imageAlt: "Luxurious hotel lobby",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="About Our Exclusive Property"
      metrics={[
        {
          icon: Award,
          label: "Five-Star Service",
          value: "Excellence",
        },
        {
          icon: ShieldCheck,
          label: "Unparalleled Comfort",
          value: "Guaranteed",
        },
        {
          icon: Diamond,
          label: "Exclusive Amenities",
          value: "Curated",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="rooms-suites" data-section="rooms-suites">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "suite-1",
          name: "Executive Suite",
          price: "From $800/night",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-relaxes-leisure-around-swimming-pool_74190-11524.jpg",
          imageAlt: "Executive Suite with city view",
        },
        {
          id: "suite-2",
          name: "Presidential Penthouse",
          price: "From $2,500/night",
          imageSrc: "http://img.b2bpic.net/free-photo/panoramic-sauna-view-organic-wooden-columns-resort-style-wellness_169016-68883.jpg",
          imageAlt: "Presidential Penthouse living area",
        },
        {
          id: "suite-3",
          name: "Deluxe King Room",
          price: "From $500/night",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-woman-resting-home_7502-9290.jpg",
          imageAlt: "Deluxe King Room bedroom",
        },
        {
          id: "suite-4",
          name: "Luxury Villa",
          price: "From $1,500/night",
          imageSrc: "http://img.b2bpic.net/free-photo/male-hotel-porter-carrying-luggage-help-people-reception-lobby-area-moving-trolley-bags-guests-registering-modern-resort-elegant-concierge-providing-luxury-service_482257-75143.jpg",
          imageAlt: "Luxury Villa with private terrace",
        },
      ]}
      title="Our Luxurious Rooms & Suites"
      description="Each space is meticulously designed to offer an experience of sublime comfort and sophisticated living, with breathtaking views and bespoke amenities."
    />
  </div>

  <div id="amenities" data-section="amenities">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "24/7 Personal Concierge",
          "Private Chef & Catering",
          "Exclusive Spa Treatments",
          "Limousine & Chauffeur Service",
        ],
      }}
      positiveCard={{
        items: [
          "Infinity Pool & Jacuzzi",
          "State-of-the-Art Fitness Center",
          "High-Speed Wi-Fi & Smart Home Tech",
          "Gourmet Dining & Room Service",
        ],
      }}
      title="World-Class Amenities"
      description="Discover a curated selection of premium services and facilities designed to enhance your stay and cater to your every desire, ensuring an experience beyond compare."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "suite-1",
          name: "Executive Suite",
          price: "From $800/night",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-relaxes-leisure-around-swimming-pool_74190-11524.jpg",
          imageAlt: "Executive Suite with city view",
        },
        {
          id: "suite-2",
          name: "Presidential Penthouse",
          price: "From $2,500/night",
          imageSrc: "http://img.b2bpic.net/free-photo/panoramic-sauna-view-organic-wooden-columns-resort-style-wellness_169016-68883.jpg",
          imageAlt: "Presidential Penthouse living area",
        },
        {
          id: "suite-3",
          name: "Deluxe King Room",
          price: "From $500/night",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-woman-resting-home_7502-9290.jpg",
          imageAlt: "Deluxe King Room bedroom",
        },
        {
          id: "suite-4",
          name: "Luxury Villa",
          price: "From $1,500/night",
          imageSrc: "http://img.b2bpic.net/free-photo/male-hotel-porter-carrying-luggage-help-people-reception-lobby-area-moving-trolley-bags-guests-registering-modern-resort-elegant-concierge-providing-luxury-service_482257-75143.jpg",
          imageAlt: "Luxury Villa with private terrace",
        },
      ]}
      title="Our Luxurious Rooms & Suites"
      description="Each space is meticulously designed to offer an experience of sublime comfort and sophisticated living, with breathtaking views and bespoke amenities."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      testimonials={[
        {
          id: "1",
          name: "Eleanor Vance",
          role: "CEO, Vanguard Corp.",
          testimonial: "An absolutely sublime experience from start to finish. The attention to detail and personalized service were truly unmatched. We felt completely pampered and rejuvenated.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-beautiful-female-model-rests-restaurant-drinks-fresh-summer-cocktail-points-with-fore-finger-aside-has-happy-expression-enjoys-good-rest-people-recreation-leisure-concept_273609-3015.jpg",
        },
        {
          id: "2",
          name: "Marcus Thorne",
          role: "Investor, Global Ventures",
          testimonial: "The pinnacle of luxury. Every aspect of our stay exceeded expectations, from the stunning suites to the impeccable dining. This is truly luxury redefined.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-shaved-head-male-dressed-grey-suit-dark-grey-background_613910-11352.jpg",
        },
        {
          id: "3",
          name: "Isabella Rossi",
          role: "Fashion Designer",
          testimonial: "Pure elegance and tranquility. The design is exquisite, the staff are delightful, and the views are simply breathtaking. My new favorite escape.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-laughing-girl-sparkle-dress-enjoying-day-indoor-shot-attractive-young-lady-pink-wall_197531-11636.jpg",
        },
        {
          id: "4",
          name: "Julian Chen",
          role: "Tech Innovator",
          testimonial: "Flawless service and unparalleled comfort. It’s more than a hotel; it’s an immersive luxury experience that leaves a lasting impression.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion-male-posing-street-background-outdoors-sunset-crossed-arms_158538-20634.jpg",
        },
        {
          id: "5",
          name: "Sofia Bellwether",
          role: "Art Curator",
          testimonial: "A sanctuary of style and sophistication. Every corner tells a story of luxury. I highly recommend for anyone seeking an extraordinary stay.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexual-woman-with-beautiful-blue-eyes-curly-hair-which-wearing-monochrome-black-dress-sitting-comfortable-chair-keeping-hand-near-face-lovely-posing-camera_8353-12174.jpg",
        },
        {
          id: "6",
          name: "Oliver Sterling",
          role: "Luxury Travel Blogger",
          testimonial: "Having traveled extensively, I can confidently say this property stands in a league of its own. A true gem for discerning travelers.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",
        },
      ]}
      title="Guest Experiences"
      description="Hear from our esteemed guests who have indulged in the exquisite luxury and bespoke service that defines our property."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to immerse yourself in unparalleled luxury? Contact us to inquire about availability or to make a direct reservation. Our dedicated team awaits to ensure your stay is truly unforgettable.\n\nChekela Turner\nPhone: (602) 390-5818\nEmail: chekela@live.com"
      buttons={[
        {
          text: "Book Now",
          href: "mailto:chekela@live.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Luxury Redefined Hotel"
      copyrightText="© 2024 | Luxury Redefined Hotel. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://facebook.com",
          ariaLabel: "Facebook",
        },
        {
          icon: Instagram,
          href: "https://instagram.com",
          ariaLabel: "Instagram",
        },
        {
          icon: Twitter,
          href: "https://twitter.com",
          ariaLabel: "Twitter",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
