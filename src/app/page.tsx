import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import decor from "../../public/decor.png";
import hero from "../../public/Hero Collage.webp";
import hero_mobile from "../../public/Hero Collage MOBILE.webp";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import imgLinks from "@/constents/slideImgs";
import { Facebook, Instagram } from "lucide-react";
import TextBanner from "@/components/TextBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <section className="w-full h-[40vh] max-md:pb-5 md:h-screen flex justify-center flex-col items-center ">
        <h1 className="text-4xl md:text-[4.8rem] boldee leading-tight tracking-widest text-center uppercase">
          Life ain&apos;t <br />
          perfect but <br />
          your{" "}
          <span className=" relative">
            hair{" "}
            <Image
              src={decor}
              alt="saloon"
              fill
              objectFit="contain"
              objectPosition="50% 100%"
            />
          </span>{" "}
          <br />
          can be.
        </h1>
        <Button variant="outln" size="xl" className="mt-10">
          VIEW OUR MENU
        </Button>
      </section>
      <section className="w-full h-full">
        <Image src={hero} alt="saloon" className="max-md:hidden" />
        <Image src={hero_mobile} alt="saloon" className="md:hidden" />
      </section>
      <section className="w-full h-full py-16 relative flex justify-center items-center flex-col text-center text-white">
        <Image
          src="/img/5b2cffb695f0a079a9ecc306_pattern-v1.webp"
          alt="saloon"
          fill
          objectFit="cover"
          className="-z-10"
        />
        <div className="w-full h-full bg-[#000000]  absolute top-0 left-0 -z-20"></div>
        <h2 className=" text-lg tracking-wider boldee">ABOUT THE CHARLEE</h2>
        <p className="md:w-[60%] text-xl md:text-2xl px-1 pierpont my-6 md:my-12">
          Located in historic downtown Lancaster, THE CHARLEE offers big city
          experience in a relaxed, modern salon. Our technicians are masters of
          their craft—with specialized areas of expertise—and educate every
          client on how to maintain their look at home. We deliver consistent
          results and personalized service in a welcoming atmosphere.
        </p>
        <Button variant="whiteOutln" size="xl">
          CHECK IT OUT
        </Button>
      </section>
      <section className="w-full h-full relative">
        <Image src="/img/white-bg.webp" alt="saloon" fill />
        <div className="md:w-[75%] relative h-full mx-auto md:py-20">
          <Image
            src="/img/5b32a42f6f941a63e364b8c1_Hello Gorgeous.png"
            width={160}
            height={160}
            className=" absolute top-10 -left-32 z-10 -rotate-12 max-md:hidden"
            alt="saloon"
          />
          <Carousel>
            <CarouselContent>
              {imgLinks.map((links, index) => (
                <CarouselItem key={index}>
                  <div className="w-full h-[30vh] md:h-screen relative">
                    <Image
                      src={links.link}
                      alt="sal"
                      fill
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <TextBanner />
      <Footer />
    </main>
  );
}
