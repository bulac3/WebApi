import { Subcategory } from './subcategory';

export class Category {
    public id: number;
    public name: string;
    public subcategories: Subcategory[];
}