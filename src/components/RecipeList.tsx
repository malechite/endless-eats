import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RecipeCard } from './RecipeCard';
import { useFetchRecipes } from '../hooks/hooks';
import { ScrollMonitorCard } from './ScrollMonitorCard';
import { DEFAULT_CARD_WIDTH } from '../styles/style-helpers';

// RecipeList is a container component that fetches and renders a list of recipes.
// It uses the useFetchRecipes hook to fetch recipes from a mock API.
// The layout is responsive and adjusts to the width of the viewport.

export const RecipeList = () => {
  const [layoutWidth, setLayoutWidth] = useState(window.innerWidth);
  const [cardWidth, setCardWidth] = useState(DEFAULT_CARD_WIDTH);
  const { recipes, isLoading, hasReachedEnd, fetchRecipes } = useFetchRecipes(10);

  useEffect(() => {
    const calculateLayoutWidth = () => {
      const width = window.innerWidth;
      const gap = 16;
      const maxColumns = 5;
      const numColumns = Math.min(maxColumns, Math.floor(width / (DEFAULT_CARD_WIDTH + gap)));

      if (numColumns === 1) {
        setCardWidth(width - gap * 2);
      } else {
        setCardWidth(DEFAULT_CARD_WIDTH);
      }

      return numColumns * (cardWidth + gap) - gap;
    };

    const handleResize = () => setLayoutWidth(calculateLayoutWidth());
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [cardWidth]);

  return (
    <Layout style={{ width: layoutWidth }}>
      <Container>
        {recipes.map(r => (
          <RecipeCard key={r.id} recipe={r} width={cardWidth} />
        ))}
        {!hasReachedEnd && <ScrollMonitorCard isLoading={isLoading} loadFn={fetchRecipes} width={cardWidth} />}
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;
