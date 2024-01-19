import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { usePositionAndVisibilityMonitor } from '../hooks/hooks';
import { Icon, IconSize, IconType } from './Icon';

interface ScrollMonitorCardProps {
  isLoading: boolean;
  width: number;
  loadFn: () => void;
}

// ScrollMonitorCard is a card that monitors whether it is in view and calls a load function when it is.

export const ScrollMonitorCard = ({ isLoading, width, loadFn }: ScrollMonitorCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { isCompletelyOnScreen } = usePositionAndVisibilityMonitor(cardRef);
  const loadTimeoutRef = useRef<number | undefined>(undefined);

  const cancelTimer = () => {
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }
  };

  // If the card is completely on screen and not loading, start a timer to call the load function.
  // We wait 100ms to ensure rendering is complete and the state has changed before calling the load function.
  // If the card is loading, do nothing.
  // When the component unmounts, cancel the timer.

  useEffect(() => {
    if (isCompletelyOnScreen && !isLoading) {
      loadTimeoutRef.current = window.setTimeout(() => {
        loadFn();
      }, 100);
    } else if (!isCompletelyOnScreen && loadTimeoutRef.current) {
      cancelTimer();
    }
    return () => cancelTimer();
  }, [isCompletelyOnScreen, loadFn, isLoading]);

  return (
    <Card ref={cardRef} className={isLoading ? 'loading' : ''} style={{ width, height: width }}>
      {isLoading && <Icon type={IconType.LOADING_BARS} size={IconSize.LARGE} />}
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
  background-color: ${theme.colors.grey600};
  opacity: 0.4;
  &.loading {
    opacity: 1;
  }
  transition: opacity 0.2s ease-in;
`;
