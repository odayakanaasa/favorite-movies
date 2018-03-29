import React from 'react';
import styled from "styled-components";

import { red, green } from "../../utils/colors";

const Button = (props) =>
  <StyledButton>
    <span>{props.children}</span>
  </StyledButton>

export default Button;

// Styles
const StyledButton = styled.div`
  color: #fff;
  padding: 9px 20px;
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
  outline: none;
  margin: 0 auto;
  font-weight: 600;
  background: ${red};
  display: inline-block;
  vertical-align: middle;
  text-transform: uppercase;
  transition: all ease-in-out 0.3s;

  &:hover {
    background: ${green};
  }
`;