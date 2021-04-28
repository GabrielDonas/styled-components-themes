import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

function App() {
  return (
    <div>
      <Input defaultValue="Hello" type="text" />
      <Input defaultValue="World" type="text" inputColor="green" />
    </div>
  );
}

export default App;
