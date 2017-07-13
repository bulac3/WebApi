export class Subcategory {
    public id: number;
    public name: string;
    public categoryId: number;

    constructor(id?: number, name?: string, categoryId?: number) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
    }
}