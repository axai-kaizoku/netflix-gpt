import { auth } from "@/utils/firebase/config";
import { addUser, removeUser } from "@/utils/store/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration, useNavigate } from "react-router";
import Browse from "../../pages/browse";
import Login from "../../pages/login";
import MoviePage from "@/pages/movie";

function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user.uid
        const { email, displayName, uid, photoURL } = user;
        dispatch(addUser({ email, name: displayName, uid, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export default function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/movie/:id",
          element: <MoviePage />,
        },
      ],
      errorElement: <>Oops Route not found !!</>,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}
