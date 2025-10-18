import { auth } from "@/utils/firebase/config";
import type { RootState } from "@/utils/store/appStore";
import { addUser, removeUser } from "@/utils/store/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const useAuthState = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user.uid
        const { email, displayName, uid, photoURL } = user;
        dispatch(addUser({ email, name: displayName, uid, photoURL }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
};

export const useAuthUser = () => {
  const user = useSelector((state: RootState) => state.user);

  return user;
};
