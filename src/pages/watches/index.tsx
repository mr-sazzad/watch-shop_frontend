import RootLayout from "@/components/layout/RootLayout";
import GoTo from "@/components/ui/GoTo";
import WatchCard from "@/components/ui/WatchCard";
import { useGetAllWatchesQuery } from "@/redux/api/apiSlice";
import { IWatch } from "@/types";
import { ReactElement } from "react";

const WatchesPage = () => {
  const { data: watches } = useGetAllWatchesQuery(undefined);

  return (
    <div className="mt-16">
      <div className="w-full h-40 mb-4 flex justify-center items-center bg-[url('https://image.shoplc.com/Product-ebc/7313680/7313680_01.jpg')] object-cover bg-center relative">
        <div className=" absolute top-0 left-0 bottom-0 right-0 bg-white/50 backdrop-blur" />
        <h2 className="text-center text-2xl md:text-3xl py-6 font-semibold z-20">
          # Watches Gallery
        </h2>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center px-4 md:px-12">
        {watches?.data?.map((watch: IWatch) => (
          <WatchCard key={watch._id} watch={watch} />
        ))}
      </div>
      <GoTo text={`Go To Cart Page`} link={`/cart`} />
    </div>
  );
};

export default WatchesPage;

WatchesPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout key={null}>{page}</RootLayout>;
};
