import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { HomeRoute } from "./pages/Home/Home";
import { MoviesRoute } from "./pages/Movies/Movies";
import { SeriesRoute } from "./pages/Series/Series";
import { Bookmarked } from "./pages/Bookmarked/Bookmarked";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ errorElement: <ErrorPage /> }],
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "/home", ...HomeRoute },
      { path: "/movies", ...MoviesRoute },
      { path: "/series", ...SeriesRoute },
      { path: "/bookmarked", element: <Bookmarked /> },
      { path: "*", ...HomeRoute },
    ],
  },
]);

//  error handeling
function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
