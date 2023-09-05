import Cookies from "js-cookie";

export const GetCookie = () => {
  return Cookies.get("access_token");
};
