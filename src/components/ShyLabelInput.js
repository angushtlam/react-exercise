import React from "react";
import styled from "styled-components";

const FormField = styled.div`
  color: #848793;
  font-size: 14px;
  width: 100%;
`;

const Label = styled.div`
  transition: transform 0.1s ease;
  ${props =>
    !!props.value &&
    `
    height: 0;
    transform: scale(1, 0);
    `}
`;

const Input = styled.input`
  background: none;
  border: none;
  color: initial;
  display: block;
  font: unset;
  font-size: 17px;
  padding: 6px 0;
  width: 100%;

  ::placeholder {
    color: rgba(39, 41, 55, 0.25);
  }
`;

export default ({ className, label, value, ...otherProps }) => (
  <FormField>
    <Label value={value}>{label}</Label>
    <Input value={value} {...otherProps} />
  </FormField>
);
