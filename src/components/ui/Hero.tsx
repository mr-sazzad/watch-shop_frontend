import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="text-gray-900 md:px-12 px-4 bg-[url('https://learnwithsumit.com/_next/static/media/pattern.afd33a3d.svg')]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center gap-3">
              Product Page <HiOutlineExternalLink className="text-[20px]" />
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src="https://www.pngmart.com/files/13/Smartwatch-PNG-Image.png"
            alt="Hero Image"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
