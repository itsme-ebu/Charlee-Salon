import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function TextBanner() {
  return (
    <section className="w-full h-full relative py-20">
      <Image
        src="/img/Scissors.webp"
        fill
        objectFit="cover"
        objectPosition="center"
        className="-z-20"
        alt="saloon"
      />
      <div className="w-full h-full bg-black absolute opacity-60 top-0 left-0 -z-10"></div>
      <div className=" md:w-1/2 text-white h-full mx-auto px-2 text-center">
        <h2 className="text-xl boldee tracking-wider">
          READY TO FEEL AMAZING?
        </h2>
        <p className="pierpont my-7 md:my-10 text-xl md:text-2xl">
          It’s time to give your hair some love. Make an appointment for the
          personalized salon experience you deserve.
        </p>
        <Button variant="whiteOutln" size="xl">
          Book The Look
        </Button>
      </div>
    </section>
  );
}

export default TextBanner;
