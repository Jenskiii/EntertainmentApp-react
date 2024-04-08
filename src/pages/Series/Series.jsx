import { useLoaderData } from "react-router-dom";
import { getSeriesData } from "../../api/fetch";

function Series() {
  const seriesData = useLoaderData();
  return (
    <>
      <h1>Series</h1>

      {seriesData.map((data)=> {
        return (
          <div>{data.title}</div>
        )
      })}
    </>
  );
}

// LOADER
function loader({ request: { signal } }) {
  return getSeriesData({ signal });
}

export const SeriesRoute = {
  loader,
  element: <Series />,
};
