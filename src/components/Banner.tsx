import Image from "next/image";
interface TextBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  height?: string;
}

const Banner: React.FC<TextBannerProps> = ({
  title,
  description,
  imageUrl,
  height,
}) => {
  return (
    <section
      className={`w-full border ${
        height ? height : "h-[82vh]"
      } flex justify-center items-center relative`}
    >
      <Image
        src={imageUrl}
        alt="saloon"
        fill
        objectFit="cover"
        objectPosition="center"
        className="-z-20"
      />
      <div className="w-full h-full bg-black absolute opacity-25 top-0 left-0 -z-10"></div>

      <h2 className="text-4xl text-white md:text-7xl uppercase px-5 md:w-3/4 mx-auto boldee leading-relaxed tracking-widest">
        <span className=" relative">
          {title}
          <Image
            src="/img/scribble.png"
            alt="saloon"
            fill
            objectFit="contain"
            objectPosition="50% 100%"
          />
        </span>{" "}
        {description}
      </h2>
    </section>
  );
};

export default Banner;
