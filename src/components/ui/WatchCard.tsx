import {
  useAddToCartMutation,
  useFetchCurrentUserQuery,
} from "@/redux/api/apiSlice";
import { IWatch } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const WatchCard: React.FC<{ watch: IWatch }> = ({ watch }) => {
  const { data } = useFetchCurrentUserQuery();

  console.log(data);

  const userId = data?.accessToken?._id;

  console.log(userId, "TOKEN");

  const [addToCart, { isLoading, isSuccess }] = useAddToCartMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isSuccess) {
    console.log("Success");
  }

  const handleAddToCart = (data: IWatch) => {
    console.log(data);

    addToCart({ userId, data });
  };

  return (
    <div className="p-4 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full">
      <div
        className="
          h-auto
          border
          border-gray-800
          rounded-lg
          overflow-hidden
          relative
          flex
          flex-col
          gap-2
      "
      >
        <div className="flex-1">
          <Image
            className="w-full object-cover object-center pt-4"
            src={watch?.image}
            alt="watch image"
            height={0}
            width={0}
            layout="responsive"
          />
        </div>
        <div className="p-6 flex-1 relative">
          <h2
            className="
              tracking-widest
              text-xs
              title-font
              font-medium
              text-gray-500 
              mb-1
          "
          >
            SMART WATCH
          </h2>
          <h1 className="title-font text-lg font-medium mb-3">{watch?.name}</h1>
          <div
            className="
              leading-relaxed
              mb-3
              flex 
              justify-between
              items-center
          "
          >
            <p className="flex gap-1">
              <span>TK:</span> {watch?.price.toFixed(2)}
            </p>
          </div>
          <div
            className="
              flex 
              justify-between
              items-center
              flex-wrap
          "
          >
            <div className="flex gap-3">
              <button
                className="
                py-2
                px-3
                bg-indigo-400
                hover:bg-indigo-500
                rounded
                text-white
                text-xs
                font-medium
              "
                onClick={() => handleAddToCart(watch)}
              >
                To Cart
              </button>
              <Link
                href={`/details/${watch?._id}`}
                className="
                  py-2 
                  px-3 
                  bg-indigo-400 
                  hover:bg-indigo-500 
                  rounded 
                  text-white 
                  text-xs 
                  font-medium
                "
              >
                Details
              </Link>
            </div>
          </div>
          <div
            style={{
              transform: "translate(-50%, -50%)",
              position: "absolute",
              top: "0px",
              right: "-60px",
              borderRadius: "10px",
              height: "50px",
            }}
          >
            <p
              className="
                tracking-widest
                text-xs
                font-medium
                pl-3 
                pr-7
                py-1
                ring-1
                ring-inset
                ring-indigo-200
                rounded-3xl
                flex
                gap-1
                justify-center
                items-center
                bg-slate-50
                cursor-not-allowed
            "
            >
              <FaStar className="text-yellow-400 mr-2" />
              {watch?.rating}
            </p>
          </div>
        </div>
        <div
          style={{
            transform: "translate(-50%, -50%)",
            position: "absolute",
            top: "35px",
            left: "60px",
            borderRadius: "10px",
            height: "50px",
          }}
        >
          <p
            className="
              tracking-widest
              text-xs
              font-medium
              px-3
              py-1
              ring-1
              ring-inset
              ring-indigo-400
              rounded-3xl
              flex
              gap-1
              justify-center
              items-center
              bg-slate-50
              cursor-not-allowed
          "
          >
            STATUS
            {watch?.status === "In stock" ? (
              <Image height={19} width={19} src="/icons/tic.svg" alt="" />
            ) : (
              <Image height={16} width={16} src="/icons/cross.svg" alt="" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;
