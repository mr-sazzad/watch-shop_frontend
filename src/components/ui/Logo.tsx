import Link from "next/link";

const Logo = ({ link }: { link: string }) => {
  return (
    <div>
      <Link
        href={link}
        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl">Watch Shop</span>
      </Link>
    </div>
  );
};

export default Logo;
