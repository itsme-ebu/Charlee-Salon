import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TextBanner from "@/components/TextBanner";

function page() {
  return (
    <main>
      <Navbar />
      <Banner
        imageUrl="/img/hero_flip.webp"
        description="begins the moment you decide to be yourself."
        title="BEAUTY"
      />
      <section className="w-full h-full py-20">
        <div className="md:w-2/3 mx-auto text-center">
          <h2 className="boldee text-xl tracking-widest">
            LOCATION + PARKING{" "}
          </h2>
          <p className="pierpont my-10 text-lg px-4 md:text-2xl">
            THE CHARLEE is located at 311 East Orange Street near Musser Park, a
            10-minute walk from downtown Lancaster. Parking and handicap
            accessibility is available in the rear of the building, accessible
            by the easement just before the salon. Additional parking is
            available on Orange Street and is meter-free for two hours.
          </p>
        </div>
        <div className="md:w-[80%] h-full mx-auto md:flex px-3 justify-start gap-5">
          <div className="md:w-[40%] border-t-[1.5px] border-black">
            <p className="mediumm text-base tracking-widest py-6 border-b-[1.5px] border-black">
              THE CHARLEE
            </p>
            <p className="mediumm uppercase text-base tracking-widest py-6 border-b-[1.5px] border-black">
              311 E Orange St
            </p>
            <p className="mediumm uppercase text-base tracking-widest py-6 border-b-[1.5px] border-black">
              LANCASTER, PA 17602
            </p>
            <p className="mediumm uppercase text-base tracking-widest py-6 border-b-[1.5px] border-black">
              <a href="mailto:info@thecharleesalon.com">
                info@thecharleesalon.com
              </a>
            </p>
            <p className="mediumm uppercase text-base tracking-widest py-6 border-b-[1.5px] border-black">
              <a href="tel:+1717.517.7526">717.517.7526</a>
            </p>
          </div>
          <div className="w-full h-full md:border-t-[1.5px] border-black">
            <h2 className="mediumm text-base tracking-widest py-6">
              CANCELLATION POLICY
            </h2>

            <p className="pierpont text-lg pb-5">
              Our client’s appointments are very important to the technicians at
              THE CHARLEE. A credit card will be required to book any
              appointments. Card information is encrypted and stored to your
              customer profile and will only be used for our
              cancellation/no-show policy.
            </p>
            <p className="pierpont text-lg pb-5">
              If you need to reschedule or cancel your appointment, please
              notify us 48-hours in advance. A late cancellation will result in
              a charge of 50% of the service fee. A no-show to your appointment
              will result in a charge of 100% of the service fee. This balance
              must be paid in order to book any future appointments. This allows
              our team to adjust schedules or accommodate any clients on the
              waiting list.
            </p>
            <p className="pierpont text-lg pb-5">
              We get it, things happen. We allow a 10-minute grace period, but
              please call the salon if you are running late. We will always try
              our best to accommodate you but if you are more than 10-minutes
              late for your appointment, it is up to the technician’s discretion
              to provide the service based on their schedule availability.
            </p>
            <h2 className="mediumm text-base tracking-widest py-6">
              THE CHARLEE GUARANTEE
            </h2>
            <p className="pierpont text-lg pb-5">
              We are serious when we say we want you to love your hair. If you
              are not 100% satisfied with your services, please notify us within
              5 days of your appointment. We strive to provide excellent results
              and will schedule an appointment to have your services corrected
              at no charge. We also stand by our products. All product returns
              or exchanges must be made within 5 days of purchase.
            </p>
          </div>
        </div>
      </section>
      <TextBanner />
      <Footer />
    </main>
  );
}

export default page;
