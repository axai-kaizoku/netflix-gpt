import { useAuthState } from "@/hooks/use-auth-state";
import MoviePage from "@/pages/movie";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router";
import Browse from "../../pages/browse";
import Login from "../../pages/login";
import Demo from "@/pages/demo";

function Layout() {
  useAuthState();
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
        {
          path: "/demo",
          element: <Demo />,
        },
      ],
      errorElement: <>Oops Route not found !!</>,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}
