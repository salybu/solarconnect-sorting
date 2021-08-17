import React from 'react';
import styled, { keyframes } from 'styled-components';

import theme from 'styles/theme';

const Spinner = () => {
  return <StyledSpinner />;
};

const load8 = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  &,
  &::after {
    border-radius: 50%;
    width: 19px;
    height: 19px;
  }

  margin: 0 auto;
  font-size: 16px;
  position: relative;
  text-indent: -9999em;
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-right: 2px solid rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  border-left: 2px solid ${theme.colors.primary};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${load8} 1.1s infinite linear;
  animation: ${load8} 1.1s infinite linear;
`;

export default Spinner;
