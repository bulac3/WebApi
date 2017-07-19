import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Category } from '../models/category';
import { Subcategory } from '../models/subcategory';
import { Coords } from '../models/coords';
import { FilterOptions } from '../models/filterOtions';
import { environment } from '../environments/environment';
import { itemService } from '../services/item.service'; 
@Component({
    selector: 'filter',
    templateUrl: './filter.component.html'
})

export class FilterComponent implements OnInit {

    constructor(private _itemService: itemService) { }

    public filterOptions: Coords;

    private categories: Category[];
    private subcategories: Subcategory[];
    public selectedCategoryId: number;
    public selectedSubcategoryId: number;

    public ngOnInit(): void {
        this._itemService.GetCategoryHierarchy()
            .subscribe(categories => {
                this.categories = categories;
            });
    }

    private categoryChange(categoryId: number): void {
        this.subcategories = this.categories.find(
            (category, num, array) => category.id == this.selectedCategoryId).subcategories;
        this.selectedSubcategoryId = this.subcategories[0].id;
    }

    public getFilterOptions(): FilterOptions {
        let result: FilterOptions = {
            categoryId: this.selectedCategoryId,
            subcategoryId: this.selectedSubcategoryId
        };
        return result;
    }
}