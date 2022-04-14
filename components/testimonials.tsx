import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Jhon Dee">
        Con agencia web pudimos solucionar el de cargas de imagen para una mejor respuesta y menores tiempos de carga 
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Rodh Pin">
        Agencia web, excelentes profesionales a cargo y expertos bien preparados 
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Gomith Well">
        Encantada con los trabajos realizados 
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Diego Maradona">
        Comparten el amor por el software de alta
        performace y la pasion por construir cosas que la gente quiere
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Miriah Velaz">
        Gran variedad para administrar clientes y productos en los servicios que brindan 
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
