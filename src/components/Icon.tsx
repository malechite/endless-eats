import React from 'react';
import { styled } from 'styled-components';
import { HeartOutline } from '../icons/HeartOutline';
import { HeartFilled } from '../icons/HeartFilled';
import { LoadingAnimation } from '../icons/LoadingAnimation';

export enum IconType {
  HEART_OUTLINE = 'HEART_OUTLINE',
  HEART_FILLED = 'HEART_FILLED',
  LOADING_BARS = 'LOADING_BARS',
}

export enum IconSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface IconProps {
  type: IconType;
  style?: React.CSSProperties;
  size?: IconSize;
}

// Icon is a wrapper component for the icons in this app. It takes in a type and renders the appropriate icon.
// Icons are rendered as inline SVGs so that they can be styled with CSS and modified with JS.

export const Icon = ({ type, style, size }: IconProps) => {
  return (
    <IconContainer style={style} className={size || IconSize.MEDIUM}>
      <Render type={type} />
    </IconContainer>
  );
};

// Render is a helper component that renders the appropriate icon based on the type prop.

const Render = ({ type }: IconProps) => {
  const icons = {
    [IconType.HEART_OUTLINE]: HeartOutline,
    [IconType.HEART_FILLED]: HeartFilled,
    [IconType.LOADING_BARS]: LoadingAnimation,
  };
  return icons[type] ? React.createElement(icons[type]) : null;
};

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
  &.small {
    width: 24px;
    height: 24px;
  }
  &.medium {
    width: 32px;
    height: 32px;
  }
  &.large {
    width: 48px;
    height: 48px;
  }
  transition: all 0.2s ease-in-out;
`;
