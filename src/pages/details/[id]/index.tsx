import RootLayout from "@/components/layout/RootLayout";
import CommentBox from "@/components/ui/CommentBox";
import Reviews from "@/components/ui/Reviews";
import { useGetSingleWatchQuery } from "@/redux/api/apiSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  const { data } = useGetSingleWatchQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const watch = data?.data;

  return (
    <div className="mt-16 container mx-auto">
      <div className="w-full h-40 mb-4 flex justify-center items-center bg-[url('https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-Ultra-3up-hero-220907_Full-Bleed-Image.jpg.large.jpg')] object-cover bg-center relative">
        <div className=" absolute top-0 left-0 bottom-0 right-0 bg-white/50 backdrop-blur" />
        <h2 className="text-center text-2xl md:text-3xl py-6 font-semibold z-20">
          # Details Page
        </h2>
      </div>

      <div className="px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-center items-center flex-1">
            <Image
              src={watch?.image}
              alt="productImage"
              height={300}
              width={300}
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          <div className="flex flex-col justify-start flex-1">
            <p
              className="tracking-widest 
            text-xs
            title-font
            font-medium
            text-indigo-500
            mb-1"
            >
              SMART WATCH
            </p>
            <h2 className="text-2xl">{watch?.name}</h2>
            <div className="mt-2">
              Price:{" "}
              <span className="text-indigo-500">{watch?.price}.00 TK</span>
            </div>
            <div className="flex flex-col mt-5">
              <p className="font-semibold">Description</p>{" "}
              <p>{watch?.description}</p>
            </div>
            <div className="flex justify-end">
              <span
                className="
            tracking-widest 
            text-sm
            title-font
            font-medium
            text-white
            bg-indigo-500
            px-3
            py-1
            rounded
            mt-3
            mb-1"
              >
                {watch?.status}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="divider">
          <h3
            className="tracking-widest 
              text-lg
              title-font
              font-normal
             ring-1
             ring-inset
             ring-indigo-300
              mb-1
              px-3
              py-1
              rounded
              "
          >
            REVIEWS SECTION
          </h3>
        </div>

        <CommentBox />
      </div>
      <Reviews />
    </div>
  );
};

export default Details;

Details.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout key={null}>{page}</RootLayout>;
};
