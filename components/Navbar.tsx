import Link from "next/link";
import UserAccountActions from "./UserAccountActions";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl rounded-xl">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Sugar DD
        </Link>
      </div>
      <div className="flex-none flex md:hidden">
        <label className="btn btn-ghost" htmlFor="nav-drawer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href="/faq">FAQs</Link>
          </li>
          <li>
            <Link href="/orders">View Orders</Link>
          </li>
        </ul>
        <UserAccountActions />
      </div>
    </div>
  );
};

export default Navbar;
