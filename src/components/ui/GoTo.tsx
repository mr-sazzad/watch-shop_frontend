import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

const GoTo: React.FC<{ text: string; link: string }> = ({ text, link }) => {
  return (
    <div className="my-10 w-full flex justify-center items-center">
      <button className="h-12 w-48 ring-1 ring-inset ring-indigo-200 bg-[url('https://static.gadgetandgear.com/tmp/product/20230225_1677323027_105015.jpeg')] object-contain bg-center relative flex justify-center items-center rounded overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-white/60 backdrop-blur-xl rounded" />
        <Link
          href={link}
          className="z-40 tracking-widest text-xs font-medium text-gray-700 flex justify-center items-center gap-1"
        >
          {text} <HiOutlineExternalLink />
        </Link>
      </button>
    </div>
  );
};

export default GoTo;
