import { DEFAULT_USER_AVATAR } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const UserAccountActions = async () => {
  const { getPermission, isAuthenticated, getUser } = getKindeServerSession();

  const userData = await getUser();
  const adminPermission = await getPermission("store:admin");

  if (!(await isAuthenticated())) {
    return (
      <LoginLink>
        <section className="flex md:block gap-4 items-center">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10">
              <Image
                fill={true}
                className="rounded-full"
                alt="Profile Image"
                src={DEFAULT_USER_AVATAR}
              />
            </div>
          </div>
          <h2 className="md:hidden text-xl">Login</h2>
        </section>
      </LoginLink>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <section className="flex md:block gap-4 items-center">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image
              fill={true}
              className="rounded-full"
              alt="Profile Image"
              src={userData?.picture || DEFAULT_USER_AVATAR}
            />
          </div>
        </div>
        <h2 className="md:hidden text-xl">
          {userData?.given_name} {userData?.family_name}
        </h2>
      </section>
      <ul
        tabIndex={0}
        className="hidden md:block mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        {adminPermission?.isGranted && (
          <li>
            <Link href={"/admin-dash"} className="leading-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                <path
                  fillRule="evenodd"
                  d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z"
                  clipRule="evenodd"
                />
              </svg>
              Store Manager
            </Link>
          </li>
        )}
        <li>
          <LogoutLink className="leading-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
            Log out
          </LogoutLink>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountActions;
