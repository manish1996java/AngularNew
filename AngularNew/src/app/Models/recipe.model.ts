import { Ingredient } from './ingredient.model';

export class RecipeModel{
    constructor(
        public name:string,
        public description:string,
        public imagepath:string,
        public ingredients:Ingredient[]){}
}