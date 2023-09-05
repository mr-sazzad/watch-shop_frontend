import RootLayout from "@/components/layout/RootLayout";
import Featured from "@/components/ui/Featured";
import GoTo from "@/components/ui/GoTo";
import Hero from "@/components/ui/Hero";
import { useGetRecentWatchesQuery } from "@/redux/api/apiSlice";
import Cookies from "js-cookie";
import { ReactElement } from "react";

export default function Home() {
  const { data } = useGetRecentWatchesQuery(undefined);

  const token = Cookies.get("access_token");

  console.log(token, "USER ");

  return (
    <div>
      <Hero />
      <Featured watches={data?.data} />
      <GoTo text={`Go To Watches Page`} link={`/watches`} />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout key={null}>{page}</RootLayout>;
};
