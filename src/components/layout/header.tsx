import { NETFLIX_AVATAR, NETFLIX_LOGO } from "@/utils/constants";
import type { RootState } from "@/utils/store/appStore";
import type { UserState } from "@/utils/store/slices/userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { signOutUser } from "@/utils/firebase/userActions";
import type { PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren) => {
  const user = useSelector((store: RootState) => store.user as UserState);
  return (
    <header className="w-full absolute top-0 px-20 bg-gradient-to-b from-black flex items-center justify-between z-10">
      <Link to="/browse">
        <img src={NETFLIX_LOGO} alt="netflix logo" width={150} height={50} />
      </Link>
      <div className="flex gap-2 items-center">
        {children}
        <Link to={"/demo"}>
          <img src={user?.photoURL ?? NETFLIX_AVATAR} alt="Avatar" width={50} height={10} />
        </Link>
        <Button
          size={"sm"}
          onClick={() => {
            signOutUser();
          }}
        >
          Signout
        </Button>
      </div>
    </header>
  );
};
