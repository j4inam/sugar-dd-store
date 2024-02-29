import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { DEFAULT_USER_AVATAR } from "@/constants";
import Image from "next/image";

const UserAccountActions = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const userData = await getUser();

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
        <li>
          <LogoutLink>Log out</LogoutLink>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountActions;
