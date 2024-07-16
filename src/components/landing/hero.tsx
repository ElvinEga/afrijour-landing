"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { heros } from "../../data/content";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Carousel
          className="w-full size-full object-cover z-0 absolute top-0 start-0 before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/90"
          plugins={[Autoplay({ delay: 5000 })]}
        >
          <CarouselContent className="m-0 size-full object-cover absolute  ">
            {heros.map((item, index) => (
              <CarouselItem key={index} className="p-0">
                <img
                  className="size-full object-cover"
                  src={item.img}
                  alt="Image Description"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {/* End Hero */}
    </>
  );
};

export default Hero;
