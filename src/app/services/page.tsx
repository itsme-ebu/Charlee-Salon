import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import wedding_image from "../../../public/img/Wedding_Images.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import servicesData from "@/constents/services";
import { Button } from "@/components/ui/button";
import TextBanner from "@/components/TextBanner";
import Footer from "@/components/Footer";
function services() {
  console.log(servicesData);

  return (
    <div>
      <Navbar />
      <section className="w-full border h-[82vh] flex justify-center items-center relative">
        <Image
          src="/img/service_banner.jpg"
          alt="saloon"
          fill
          objectFit="cover"
          objectPosition="center"
          className="-z-20"
        />
        <div className="w-full h-full bg-black absolute opacity-20 top-0 left-0 -z-10"></div>

        <h2 className="text-4xl text-white md:text-7xl uppercase px-5 md:w-3/4 mx-auto boldee leading-relaxed tracking-widest">
          Love your hair, its the accessory you{" "}
          <span className=" relative">
            never
            <Image
              src="/img/scribble.png"
              alt="saloon"
              fill
              objectFit="contain"
              objectPosition="50% 100%"
            />
          </span>{" "}
          take off.
        </h2>
      </section>
      <section className="w-full h-full py-16">
        <div className="md:w-2/3 mx-auto text-center">
          <h2 className="boldee text-xl tracking-widest">
            It&lsquo;s about your hair, not your gender.
          </h2>
          <p className="pierpont my-8 text-lg px-4 md:px-20 md:text-2xl">
            At THE CHARLEE, we believe in an inclusive environment where pricing
            is based on hair length, density, and time.
          </p>
        </div>
        <div className="md:w-[80%] h-full mx-auto px-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>CUT</AccordionTrigger>
              <AccordionContent>
                <p className="pierpont text-sm md:text-xl">
                  {servicesData.Cut.description}
                </p>
                <p className="pierpont text-right my-4 text-sm md:text-base italic">
                  Stylist / Senior / Director
                </p>
                <div className="border-t border-black">
                  {servicesData.Cut.subServices.map((serv) => (
                    <div
                      className={
                        serv.lastOne
                          ? " py-6"
                          : " border-b border-slate-500 py-6"
                      }
                      key={serv.serviceTitle}
                    >
                      <div className="flex justify-between items-center">
                        <h2 className="mediumm tracking-wider text-sm uppercase">
                          {serv.serviceTitle}
                        </h2>
                        <div className="flex items-center gap-6 md:gap-16">
                          <p>{serv.stylish}</p>
                          <p>{serv.senior}</p>
                          <p>{serv.director}</p>
                        </div>
                      </div>
                      <p className="pierpont text-xs md:text-sm text-slate-600">
                        {serv.serviceDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>STYLE</AccordionTrigger>
              <AccordionContent>
                <p className="pierpont text-sm md:text-xl">
                  {servicesData.Style.description}
                </p>
                <p className="pierpont text-right my-4 text-sm md:text-base italic">
                  Stylist / Senior / Director
                </p>
                <div className="border-t border-black">
                  {servicesData.Style.subServices.map((serv) => (
                    <div
                      className={
                        serv.lastOne
                          ? " py-6"
                          : " border-b border-slate-500 py-6"
                      }
                      key={serv.serviceTitle}
                    >
                      <div className="flex justify-between items-center">
                        <h2 className="mediumm tracking-wider text-sm uppercase">
                          {serv.serviceTitle}
                        </h2>
                        <div className="flex items-center gap-6 md:gap-16">
                          <p>{serv.stylish}</p>
                          <p>{serv.senior}</p>
                          <p>{serv.director}</p>
                        </div>
                      </div>
                      <p className="pierpont text-xs md:text-sm text-slate-600">
                        {serv.serviceDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger>COLOR</AccordionTrigger>
              <AccordionContent>
                <p className="pierpont text-sm md:text-xl">
                  {servicesData.Color.description}
                </p>
                <p className="pierpont text-right my-4 text-sm md:text-base italic">
                  Stylist / Senior / Director
                </p>
                <div className="border-t border-black">
                  {servicesData.Color.subServices.map((serv) => (
                    <div
                      className={
                        serv.lastOne
                          ? " py-6"
                          : " border-b border-slate-500 py-6"
                      }
                      key={serv.serviceTitle}
                    >
                      <div className="flex justify-between items-center">
                        <h2 className="mediumm tracking-wider text-sm uppercase">
                          {serv.serviceTitle}
                        </h2>
                        <div className="flex items-center gap-6 md:gap-16">
                          <p>{serv.stylish}</p>
                          <p>{serv.senior}</p>
                          <p>{serv.director}</p>
                        </div>
                      </div>
                      <p className="pierpont text-xs md:text-sm text-slate-600">
                        {serv.serviceDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section className="md:w-[80%] mx-auto h-full">
        <div className="w-full  py-10 h-full grid md:grid-cols-2">
          <div className="w-full h-full ">
            <Image
              src="/img/Wedding_Images.jpg"
              alt="saloon"
              width={450}
              height={450}
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col items-center p-4 justify-center gap-8">
            <h2 className="boldee text-xl tracking-widest">WEDDING SERVICES</h2>
            <p className="pierpont text-center text-xl md:text-2xl">
              THE CHARLEE team feels deeply honored when clients consider us for
              their wedding day. We pride ourselves on creating the look you’ve
              dreamed of while still staying true to your personal style.
            </p>
            <Button variant="outln" size="xl">
              Wedding REQUEST
            </Button>
          </div>
        </div>
        <div className="w-full  py-10 h-full grid md:grid-cols-2">
          <div className="flex flex-col items-center p-4 justify-center gap-8">
            <h2 className="boldee text-xl tracking-widest">HAVE A QUESTION?</h2>
            <p className="pierpont text-center text-xl md:text-2xl">
              Have an aftercare question not answer above? We&nbsp;re happy to
              help. Use the button below or email info@thecharleesalon.com.
            </p>
            <Button variant="outln" size="xl">
              Aftercare Questions
            </Button>
          </div>
          <div className="w-full h-full ">
            <Image
              src="/img/aftercare_callout.jpg"
              alt="saloon"
              width={450}
              height={450}
              className="mx-auto"
            />
          </div>
        </div>
      </section>
      <TextBanner />
      <Footer />
    </div>
  );
}

export default services;
