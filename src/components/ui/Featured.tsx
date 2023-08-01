import { IWatch } from "@/types";
import Card from "./Card";

const Featured: React.FC<{ watches: IWatch[] }> = ({ watches }) => {
  return (
    <div>
      <div className="w-full h-40 mb-4 flex justify-center items-center bg-[url('https://istarmax.com/wp-content/uploads/2022/02/homepage-smart-watch-collection-banner.jpg')] object-cover bg-center relative">
        <div className=" absolute top-0 left-0 bottom-0 right-0 bg-white/50 backdrop-blur" />
        <h2 className="text-center text-2xl md:text-3xl py-6 font-semibold z-20">
          # Featured Section
        </h2>
      </div>
      <div className="flex flex-wrap px-4 md:px-12 justify-center items-center">
        {watches?.map((watch: IWatch) => (
          <Card key={watch._id} watch={watch} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
