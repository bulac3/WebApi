import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Category } from '../models/category';
import { Subcategory } from '../models/subcategory';
import { Coords } from '../models/coords';
import { FilterOptions } from '../models/filterOtions';
import { environment } from '../environments/environment';
import { itemService } from '../services/item.service'; 
@Component({
    selector: 'filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {

    constructor(private _itemService: itemService) { }

    public filterOptions: Coords;
    public selectedCategoryId: number;
    public selectedSubcategoryId: number;
    private categories: Category[];
    private subcategories: Subcategory[];
    
    @Output() filter = new EventEmitter();

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
        this.filter.emit(this.getFilterOptions());
    }

    private subcategoryChange(categoryId: number): void {
        this.filter.emit(this.getFilterOptions());
    }

    public getFilterOptions(): FilterOptions {
        let result: FilterOptions = {
            categoryId: this.selectedCategoryId,
            subcategoryId: this.selectedSubcategoryId
        };
        return result;
    }
}