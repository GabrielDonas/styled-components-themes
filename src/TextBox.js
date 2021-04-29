import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
`;

function TextBox() {
  return (
    <div>
      <TextArea rows="4" cols="50">
        At w3schools.com you will learn how to make a website. They offer free
        tutorials in all web development technologies.
      </TextArea>
    </div>
  );
}

export default TextBox;
