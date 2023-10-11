import Link from "next/link";

interface MobileMenuItemProps {
  icon: any;
  label: string;
  active?: boolean;
  href: string;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <li>
      <Link
        href={href}
        className={`flex gap-3 rounded-md p-3 tex-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100 ${
          active && "bg-gray-100 text-black"
        }`}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default MobileMenuItem;
