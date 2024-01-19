import React from 'react';
import styled from 'styled-components';
import { Icon, IconType } from './Icon';
import { theme } from '../styles/theme';

interface FavoriteButtonProps {
  favorite: boolean;
  style?: React.CSSProperties;
}

// FavoriteButton toggles between a filled and outline heart icon and stores the current state in local state.

export const FavoriteButton = ({ style, favorite }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = React.useState(favorite);
  const favIcon = isFavorite ? IconType.HEART_FILLED : IconType.HEART_OUTLINE;
  const favColor = isFavorite ? theme.colors.red500 : theme.colors.white;

  return (
    <Button onClick={() => setIsFavorite(!isFavorite)}>
      <Icon type={favIcon} style={{ color: favColor }} />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
`;
