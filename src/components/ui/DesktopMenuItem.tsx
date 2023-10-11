import { useRoutes } from "@/constants/route";
import Link from "next/link";

const DesktopMenuItem = () => {
  const routes = useRoutes();
  return (
    <div className="hidden md:flex">
      <ul className="flex gap-3 items-center">
        {routes.map((route) => (
          <li key={route.href}>
            <Link href={route.href}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopMenuItem;
