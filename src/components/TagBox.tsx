import React from 'react';
import { styled } from 'styled-components';
import { Tag } from './Tag';

interface TagBoxProps {
  tags: string[];
}

// TagBox is a component that renders a list of tags by mapping over the tags array and rendering a Tag component for each tag.

export const TagBox = ({ tags }: TagBoxProps) => {
  return (
    <TagContainer>
      {tags.map(tag => (
        <Tag key={tag} value={tag} />
      ))}
    </TagContainer>
  );
};

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
