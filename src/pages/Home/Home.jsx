import { useLoaderData } from "react-router-dom";
import { getHomeData } from "../../api/fetch";

function Home() {
  const homeData = useLoaderData();
  return (
    <>
      <h1>home</h1>
      {homeData.map((data) => {
        return (
          <div>{data.title}</div>
        )
      })}
    </>
  );
}


// LOADER
function loader({ request: { signal } }) {
  return getHomeData({ signal });
}

export const HomeRoute ={
  loader,
  element: <Home/>
}