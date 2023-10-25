import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BsCart4 } from "react-icons/bs";
import { GiPocketWatch } from "react-icons/gi";
import { RiAccountCircleLine } from "react-icons/ri";

export const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Watches",
        href: "/watches",
        icon: GiPocketWatch,
        active: /^\/watches\//.test(pathname),
      },
      {
        label: "Cart",
        href: "/cart",
        icon: BsCart4,
        active: /^\/watches\//.test(pathname),
      },
      {
        label: "Login",
        href: "/sign-in",
        icon: RiAccountCircleLine,
        active: pathname === "/login",
      },
    ],
    [pathname]
  );

  return routes;
};
