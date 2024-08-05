import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>404 Not Found</h1>
      <p>{error}</p>
      <Link to="/">Back to Home Page</Link>
    </>
  );
};

export default ErrorPage;
