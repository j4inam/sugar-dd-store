import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-black shadow-xl rounded-xl">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Sugar DD
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52"
          >
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
              <Link href="/track-order">Track Order</Link>
            </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
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
            <Link href="/track-order">Track Order</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
