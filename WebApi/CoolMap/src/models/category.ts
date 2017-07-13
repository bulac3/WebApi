import { Subcategory } from './subcategory';

export class Category {
    public id: number;
    public name: string;
    public subcategories: Subcategory[];
    
    constructor(id?: number, name?: string, subcategories?: Subcategory[]) {
        this.id = id;
        this.name = name;
        this.subcategories = subcategories;
    }
}