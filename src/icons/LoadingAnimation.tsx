import React from 'react';
import { keyframes, styled } from 'styled-components';

export const LoadingAnimation = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <AnimatedBar x="1" y="1" width="6" height="22" />
      <AnimatedBar className="second-bar" x="9" y="1" width="6" height="22" />
      <AnimatedBar className="third-bar" x="17" y="1" width="6" height="22" />
    </svg>
  );
};

const pulseAnimation = keyframes`
  0% {
    y:1px;
    height:22px
  }
  93.75% {
    y:5px;
    height:14px;
    opacity:.2
  }
`;

const AnimatedBar = styled.rect`
  animation: ${pulseAnimation} 0.8s linear infinite;
  animation-delay: -0.8s;
  &.second-bar {
    animation-delay: -0.65s;
  }
  &.third-bar {
    animation-delay: -0.5s;
  }
`;
