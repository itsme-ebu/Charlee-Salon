import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Image from "next/image";

function page() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <Banner
        title="EVERY"
        description="person leaves empowered."
        imageUrl="/img/about_banner.jpg"
        height="h-[65vh]"
      />
      <section className="w-full h-full py-14">
        <div className="md:w-[80%] mx-auto gap-10 px-4 flex flex-wrap justify-around h-full">
          <div className="md:w-[40%]">
            <h2 className="boldee text-xl mb-10 tracking-widest uppercase">
              The Problem{" "}
            </h2>
            <p className="pierpont text-lg leading-tight">
              THE CHARLEE strives to be the solution to a common problem in the
              salon industry. We frequently hear from clients that they’re
              rarely satisfied with the results of both hair color and cut
              services completed by one technician, usually loving how one
              service turns out but less than thrilled with the other. This is
              because there is so much to learn and practice to become
              proficient in with each speciality.
            </p>
          </div>
          <div className="md:w-[40%]">
            <h2 className="boldee text-xl mb-10 tracking-widest uppercase">
              The Solution
            </h2>
            <p className="pierpont text-lg leading-tight">
              Technicians at THE CHARLEE are passionate about hair and each have
              their area of expertise. With specialized technicians, you
              experience someone who is a master of their craft, devoted to
              ongoing education and top techniques. We listen to your hair type,
              needs and desires and match you with the right expert for you.
            </p>
          </div>
          <div className="md:w-[40%]">
            <h2 className="boldee text-xl mb-10 tracking-widest uppercase">
              The Service
            </h2>
            <p className="pierpont text-lg leading-tight">
              We want you to love your hair and for that to hold true, you need
              knowledge of how to handle your hair at home. At THE CHARLEE,
              client education is a top priority. Our goal is that every person
              leaves empowered to replicate their customized style at home with
              confidence. We believe that by pairing consistent results with
              unparalleled service our clients will have an experience only THE
              CHARLEE team can offer.
            </p>
          </div>
          <div className="md:w-[40%]">
            <h2 className="boldee text-xl mb-10 tracking-widest uppercase">
              The Space
            </h2>
            <p className="pierpont text-lg leading-tight">
              THE CHARLEE is located on the 300 block of East Orange Street in
              the Historic District, a wonderful neighborhood with less than a
              ten minute walk to Penn Square in the center of town. The newly
              renovated building was vacant and condemned for many years- we are
              overjoyed to turn it into a new business in the incredible,
              flourishing little city of Lancaster.
            </p>
          </div>
        </div>
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
          <iframe
            width="100%"
            height="100%"
            className="w-full h-[40vh] md:h-[90vh]"
            src="https://www.youtube.com/embed/vJQ8zdo6ljY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="w-full h-full py-16 relative flex justify-center items-center flex-col text-center text-white">
        <Image
          src="/img/5b2cffb695f0a079a9ecc306_pattern-v1.webp"
          alt="saloon"
          fill
          objectFit="cover"
          className="-z-[1]"
        />
        <div className="w-full h-full bg-black  absolute top-0 left-0 -z-20"></div>
        <h2 className=" text-lg tracking-wider boldee">
          THE CHARLEE DIFFERENCE{" "}
        </h2>
        <div className="my-20 md:w-[90%] mx-auto max-md:flex-col max-md:gap-10 flex justify-around">
          <div className="text-center px-10">
            <p className="text-2xl w-10 h-10 mx-auto rounded-full border-2">
              1
            </p>
            <h2 className=" text-lg my-8 tracking-wider boldee">
              BIG CITY EXPERIENCE{" "}
            </h2>
            <p className="pierpont text-lg px-5">
              Modeled after New York City&apos;s top salons, THE CHARLEE offers
              a big city experience (without having to take the subway).{" "}
            </p>
          </div>
          <div className="text-center px-10">
            <p className="text-2xl w-10 h-10 mx-auto rounded-full border-2">
              2
            </p>
            <h2 className=" text-lg my-8 tracking-wider boldee">
              MASTER TECHNICIANS
            </h2>
            <p className="pierpont text-lg px-5">
              Our technicians are masters in their individual areas of expertise
              and are devoted to ongoing education and top techniques.
            </p>
          </div>
          <div className="text-center px-10">
            <p className="text-2xl w-10 h-10 mx-auto rounded-full border-2">
              3
            </p>
            <h2 className=" text-lg my-8 tracking-wider boldee">
              CLIENT EDUCATION
            </h2>
            <p className="pierpont text-lg px-5">
              Client education is a top priority — we walk you through how to do
              your &apos;do. Every person leaves empowered.
            </p>
          </div>
        </div>
      </section>
      <Team />
      <Footer />
    </main>
  );
}

export default page;
