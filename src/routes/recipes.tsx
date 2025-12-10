import { createFileRoute } from '@tanstack/react-router';
import Recipes from '../components/recipes';

export const Route = createFileRoute('/recipes')({
  component: RecipesPage,
});

function RecipesPage() {
  return <Recipes />;
}
