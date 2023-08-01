import { IWatch } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Card: React.FC<{ watch: IWatch }> = ({ watch }) => {
  console.log(watch);

  return (
    <div className="p-4 md:w-1/4">
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <Image
          className="lg:h-36 md:h-32 w-full object-cover object-center"
          src={watch?.image}
          alt="blog"
          width={100}
          height={100}
          layout="responsive"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            SMART WATCH
          </h2>
          <h1 className="title-font text-lg font-medium mb-3">{watch?.name}</h1>
          <div className="leading-relaxed mb-3 flex justify-between items-center">
            <p>TK: {watch?.price}</p>
            <p className="tracking-widest text-xs font-medium py-1 px-3 ring-1 ring-inset ring-indigo-200 rounded-3xl flex gap-1 justify-center items-center">
              STOCK
              {watch?.status === "In stock" ? (
                <Image height={19} width={19} src="/icons/tic.svg" alt="" />
              ) : (
                <Image height={16} width={16} src="/icons/cross.svg" alt="" />
              )}
            </p>
          </div>
          <div className="flex items-center flex-wrap ">
            <Link
              href="/watches"
              className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Watches Page
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
              <FaStar className="text-yellow-400 mr-2" />
              {watch?.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
