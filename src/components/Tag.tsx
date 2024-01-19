import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

interface TagProps {
  value: string;
}

export const Tag = ({ value }: TagProps) => {
  return <Container>{value}</Container>;
};

const Container = styled.div`
  display: flex;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: ${theme.colors.grey800};
  font: ${theme.fonts.small};
  color: ${theme.colors.white};
  white-space: nowrap;
`;
