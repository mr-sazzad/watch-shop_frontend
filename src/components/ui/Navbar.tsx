import { useFetchCurrentUserQuery } from "@/redux/api/apiSlice";
import Link from "next/link";

const Navbar = () => {
  const { data, error } = useFetchCurrentUserQuery();
  if (error) {
    console.log(error);
  }

  console.log(data);

  return (
    <div className="md:px-12 px-4 flex justify-between items-center h-16 border-b fixed top-0 w-full bg-white/30 backdrop-blur-2xl z-50">
      <div>
        <Link href="/">Smart Watch</Link>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link href="/watches">Watches</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            {/* {currentUser ? (
              <Link href="/sign-out">LogOut</Link>
            ) : (
              <Link href="/sign-in">Login</Link>
            )} */}
          </li>
          <li>user</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
