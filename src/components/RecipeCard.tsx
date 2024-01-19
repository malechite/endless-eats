import React from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import { Recipe } from '../types/recipe';
import { theme } from '../styles/theme';
import { TagBox } from './TagBox';
import { FavoriteButton } from './FavoriteButton';
import { opacityFadeIn } from '../styles/style-helpers';

interface RecipeCardProps {
  recipe: Recipe;
  width: number;
}

// RecipeCard is a card component that displays a recipe's image, title, author, tags, and favorite status.
// It takes an object of type Recipe as a prop and renders the appropriate information.
// The image is imported from the assets folder dynamically using require(). Normally this would be a URL from an API.
// The date is formatted using Luxon's DateTime library.

export const RecipeCard = ({ recipe, width }: RecipeCardProps) => {
  const { title, author, tags, date, favorite, image_url } = recipe;
  const img = require(`../../assets/${image_url}`);
  const formattedDate = DateTime.fromISO(date).toRelative();

  return (
    <Card style={{ width, height: width }}>
      <Img src={img} alt={title} />
      <GradientOverlay />
      <ItemDetails>
        <Title>{title}</Title>
        <SubTitle>
          <span>{author}</span>
          <span>&#8226;</span>
          <span>{formattedDate}</span>
        </SubTitle>
        <MetaContainer>
          <FavoriteButton favorite={favorite} />
          {tags.length > 0 && <TagBox tags={tags} />}
        </MetaContainer>
      </ItemDetails>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  background-color: ${theme.colors.black};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${opacityFadeIn} 0.2s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transform: scale(1.02);
  }
  transition: box-shadow 0.2s ease-in, transform 0.1s ease-in;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const GradientOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: 100%;
  height: 65%;
  z-index: 2;
`;

const ItemDetails = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: column;
  bottom: 0;
  left: 0;
  padding: 16px;
  gap: 8px;
  z-index: 3;
  overflow: hidden;
`;

const MetaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  mask-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%);
`;

const Title = styled.span`
  font: ${theme.fonts.large};
  color: ${theme.colors.white};
  line-height: 20px;
  text-shadow: 1px 1px 1px ${theme.colors.black};
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font: ${theme.fonts.small};
  color: ${theme.colors.white};
  text-shadow: 1px 1px 1px ${theme.colors.black};
  gap: 4px;
`;
