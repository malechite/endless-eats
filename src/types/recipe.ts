import { Difficulty } from './generic';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  category: string;
  date: string;
  favorite: boolean;
  image_url: string;
  ingredients: string[];
  cooking_time: number;
  difficulty_level: Difficulty;
}
