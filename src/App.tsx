import React from 'react';
import { RecipeList } from './components/RecipeList';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './styles/theme';

// App is the root component of the application. It renders the RecipeList component.

const App = () => {
  return (
    <AppContainer className="App">
      <GlobalStyle />
      <Header>Endless Eats</Header>
      <SubHeader>Infinite scroll by Brandon Everhart</SubHeader>
      <RecipeList />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  margin: 16px 0 64px 0;
  display: flex;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.grey900};
  }
`;

const Header = styled.h1`
  font: ${theme.fonts.header};
  color: ${theme.colors.white};
  text-align: center;
  margin: 0 auto 8px auto;
`;

const SubHeader = styled.h2`
  font: ${theme.fonts.largeThin};
  color: ${theme.colors.white};
  text-align: center;
  margin: 0 auto 16px auto;
`;

export default App;
