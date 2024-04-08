import { useLoaderData } from "react-router-dom";
import { getMoviesData } from "../../api/fetch";
import { Card } from "../../components/Card/Card";

function Movies() {
  const moviesData = useLoaderData();
  return (
    <>
      <h1>Movies</h1>
      <div className="grid-auto-fit">
        {moviesData.map((data) => {
          return <Card {...data} />;
        })}
      </div>
    </>
  );
}

// LOADER
function loader({ request: { signal } }) {
  return getMoviesData({ signal });
}

export const MoviesRoute = {
  loader,
  element: <Movies />,
};
