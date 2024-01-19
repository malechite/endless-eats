import { useEffect, useState } from 'react';
import { Position } from '../types/generic';
import { Recipe } from '../types/recipe';
import recipeData from '../data/recipes.json';

// The usePositionAndVisibilityMonitor hook monitors the position and visibility of an element.
// It returns an object with the position of the element, and whether it is visible or completely on screen.

export const usePositionAndVisibilityMonitor = (ref: React.RefObject<HTMLElement>) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isCompletelyOnScreen, setIsCompletelyOnScreen] = useState(false);

  useEffect(() => {
    const element = ref?.current;
    if (!element) return;

    // update determines the position and visibility of the element, and updates the state accordingly.

    const update = () => {
      const rect = element.getBoundingClientRect();
      const { top, bottom, left, right } = rect;
      setPosition({ x: left, y: top });
      setIsVisible(top < window.innerHeight && bottom >= 0 && left < window.innerWidth && right >= 0);
      setIsCompletelyOnScreen(top >= 0 && bottom <= window.innerHeight && left >= 0 && right <= window.innerWidth);
    };

    // Monitor for layout changes by triggering update on scroll, resize, and by observing the DOM for changes.

    const resizeObserver = new ResizeObserver(update);
    const mutationObserver = new MutationObserver(update);

    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    resizeObserver.observe(element);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    update();

    // Cleanup listeners and observers when the component unmounts.

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [ref]);

  return { position, isVisible, isCompletelyOnScreen };
};

// The useFetchRecipes hook fetches recipes from a JSON file, and returns a subset of recipes each time it is called.
// You can pass in the number of recipes to fetch each time, and it will return an object with the recipes, and whether
// it is loading or has reached the end of the list.
// It uses a timeout to simulate a network request.

export const useFetchRecipes = (perPage: number) => {
  const data = recipeData as Recipe[];
  const total = data.length;
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const fetchRecipes = () => {
    if (isLoading || currentIndex >= total) return;

    setIsLoading(true);
    window.setTimeout(() => {
      const nextIndex = Math.min(currentIndex + perPage, total);
      const newRecipes = data.slice(currentIndex, nextIndex);
      if (nextIndex >= total) setHasReachedEnd(true);
      setRecipes([...recipes, ...newRecipes]);
      setCurrentIndex(nextIndex);
      setIsLoading(false);
    }, 1000);
  };

  return { recipes, isLoading, hasReachedEnd, fetchRecipes };
};
