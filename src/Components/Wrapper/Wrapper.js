import React from "react";
import Title from "../Title/Title";
import Form from "../Form/Form";
import Index from "../Weader/Index";

function Container({ children }) {
  return <div className="container px-2.5">{children}</div>;
}
function Wrapper() {
  return (
    <Container>
      <Title />
      <Form />
      <Index />
    </Container>
  );
}

export default Wrapper;
