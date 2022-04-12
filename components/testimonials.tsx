import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Rodrigo (show time)">
        Agency y showTime ambos comparten el amor por el software de alta
        performace y la pasion por construir cosas que la gente quiere
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Rodrigo (show time)">
        Agency y showTime ambos comparten el amor por el software de alta
        performace y la pasion por construir cosas que la gente quiere
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Rodrigo (show time)">
        Agency y showTime ambos comparten el amor por el software de alta
        performace y la pasion por construir cosas que la gente quiere
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
