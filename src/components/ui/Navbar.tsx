import { useRoutes } from "@/constants/route";
import { useFetchCurrentUserQuery } from "@/redux/api/apiSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Logo from "./Logo";
import MobileMenuItem from "./MobileMenuItem";

const Navbar = () => {
  const router = useRouter();
  const { data, isLoading } = useFetchCurrentUserQuery();

  const routes = useRoutes();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to log out !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Logout !",
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          Cookies.remove("access_token");
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          router.push("/");
        }, 2000);
      }
    });
  };

  const currentUser = data?.accessToken;

  let name;

  if (currentUser) {
    name = currentUser?.email.split("@")[0].match(/[a-zA-Z]{4}/)[0];
  }

  return (
    <nav className="container">
      <div
        className="
          flex 
          justify-between 
          items-center
          md:px-12
          px-4
          h-16
          border-b
          fixed
          top-0
          w-full
          bg-white/30
          backdrop-blur-2xl
          z-50
          gap-5
        "
      >
        <div>
          <Logo link="/" />
        </div>
        <div className="hidden md:flex">
          {
            <ul className="flex gap-3 items-center">
              {routes.map((route) => (
                <MobileMenuItem
                  key={route.label}
                  label={route.label}
                  icon={route.icon}
                  href={route.href}
                  active={route.active}
                />
              ))}
            </ul>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
