import React from "react";
import Container from "@material-ui/core/Container";
const Error404 = () => {
  return (
    <>
      <Container maxWidth="sm">
        <div
          style={{ paddingTop: "10rem", height: "50vh", textAlign: "center" }}
        >
          <h1>404</h1>
          <h3>Page Not Found</h3>
        </div>
      </Container>
    </>
  );
};

export default Error404;
