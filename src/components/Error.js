import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log("Error: ", error);

  return (
    <div className="error">
      <h1>Oops! Something went wrong.</h1>
      <p>
        {error.status} : {error.statusText}
      </p>
      <p>If the problem persists, contact support.</p>
    </div>
  );
};

export default Error;
