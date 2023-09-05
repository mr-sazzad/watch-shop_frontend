import { useGetCurrentUserQuery } from "@/redux/api/apiSlice";

import Cookies from "js-cookie";

function useCurrentUser() {
  const token = Cookies.get("access_token");

  const { data, error, isLoading } = useGetCurrentUserQuery(token);

  if (isLoading) {
    console.log("Loading ....");
  }
  if (error) {
    console.log("Something Went Wrong !");
  }

  return token;
}

export default useCurrentUser;
