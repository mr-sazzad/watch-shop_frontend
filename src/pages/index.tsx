import RootLayout from "@/components/layout/RootLayout";
import Featured from "@/components/ui/Featured";
import GoTo from "@/components/ui/GoTo";
import Hero from "@/components/ui/Hero";
import MobileMenuItem from "@/components/ui/MobileMenuItem";
import { useGetRecentWatchesQuery } from "@/redux/api/apiSlice";
import { ReactElement } from "react";
export default function Home() {
  const { data } = useGetRecentWatchesQuery(undefined);

  return (
    <div>
      <Hero />
      <Featured watches={data?.data} />
      <GoTo text={`Go To Watches Page`} link={`/watches`} />
      <MobileMenuItem />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout key={null}>{page}</RootLayout>;
};
