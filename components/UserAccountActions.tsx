import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { DEFAULT_USER_AVATAR } from "@/constants";

const UserAccountActions = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const userData = await getUser();

  if (!(await isAuthenticated())) {
    return (
      <LoginLink>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="Profile Image" src={DEFAULT_USER_AVATAR} />
          </div>
        </div>
      </LoginLink>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Profile Image"
            src={userData?.picture || DEFAULT_USER_AVATAR}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <LogoutLink>Log out</LogoutLink>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountActions;
