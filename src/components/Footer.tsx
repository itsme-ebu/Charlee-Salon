import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full h-full bg-black pb-20">
      <div className="justify-center items-center md:justify-around md:w-[80%] mx-auto text-white h-full py-20 flex max-md:flex-col md:items-start max-md:gap-10">
        <Image
          src="/img/white_logo.png"
          alt="saloon"
          width={120}
          height={100}
        />
        <div className="flex w-fit  gap-5 items-center">
          <h2 className="boldee text-sm leading-relaxed tracking-wider">
            MON <br />
            TUE <br />
            WED <br />
            THR <br />
            FRI <br />
            SAT <br />
            SUN
          </h2>
          <p className=" regular flex-nowrap text-nowrap text-sm leading-relaxed tracking-wider">
            CLOSED <br /> 9 AM — 6 PM <br />
            10 AM — 7 PM <br />
            10 AM — 7 PM <br />
            9 AM — 5 PM <br />
            10 AM — 3 PM <br />
            CLOSED
          </p>
        </div>
        <p className="text-sm w-2/3 md:w-1/4 regular px-4">
          Parking is available behind the salon. Additional street parking is
          meter-free for two hours.
        </p>
        <div className="px-4">
          <p className="text-sm regular">
            311 E Orange St <br /> Lancaster, PA 17602
          </p>
          <div className="my-5">
            <a className="text-sm regular block" href="tel:+1717.517.7526">
              717.517.7526
            </a>
            <a
              className="text-sm regular"
              href="mailto:info@thecharleesalon.com"
            >
              info@thecharleesalon.com
            </a>
          </div>
          <div className="flex gap-4 max-md:justify-center items-center">
            <a href="#">
              {" "}
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
