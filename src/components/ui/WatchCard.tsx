import { IWatch } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const WatchCard: React.FC<{ watch: IWatch }> = ({ watch }) => {
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
            <p>TK: {watch?.price.toFixed(2)}</p>
            <p className="tracking-widest text-xs font-medium py-1 px-3 ring-1 ring-inset ring-indigo-200 rounded-3xl flex gap-1 justify-center items-center">
              STOCK
              {watch?.status === "In stock" ? (
                <Image height={19} width={19} src="/icons/tic.svg" alt="" />
              ) : (
                <Image height={16} width={16} src="/icons/cross.svg" alt="" />
              )}
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex gap-3">
              <button className="py-2 px-3 bg-indigo-400 hover:bg-indigo-500 rounded text-white text-xs font-medium">
                To Cart
              </button>
              <Link
                href={`/details/${watch._id}`}
                className="py-2 px-3 bg-indigo-400 hover:bg-indigo-500 rounded text-white text-xs font-medium"
              >
                Details
              </Link>
            </div>
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

export default WatchCard;
