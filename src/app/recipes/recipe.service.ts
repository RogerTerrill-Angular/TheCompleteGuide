import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://lobsterfrommaine.com/wp-content/uploads/2022/05/20210503-MLMC-Spring-Radish-Pea-Lobster-Salad-Labneh2883-scaled.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://lobsterfrommaine.com/wp-content/uploads/2022/05/20210503-MLMC-Spring-Radish-Pea-Lobster-Salad-Labneh2883-scaled.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
