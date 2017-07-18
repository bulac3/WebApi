import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Category } from '../models/category';
import { Subcategory } from '../models/subcategory';
import { environment } from '../environments/environment';
import { itemService } from '../services/item.service'; 

@Component({
    selector: 'category-filter',
    templateUrl: './filter.component.html'
})

export class FilterComponent implements OnInit {

    constructor(private _itemService: itemService) { }

    public selectedCategoryId: number;
    public selectedSubcategoryId: number;

    private categories: Category[];
    private subcategories: Subcategory[];

    public ngOnInit(): void {
        this._itemService.GetCategoryHierarchy()
            .subscribe(categories => {
                this.categories = categories;
                this.selectedCategoryId = this.categories[0].id;
                this.selectDefaultSubcategory();
            });
    }

    private onInputCategory($event): void {
        $event.preventDefault();
        this.selectedCategoryId = $event.target.value;
        this.selectDefaultSubcategory();
    }

    private onInputSubcategory($event): void {
        $event.preventDefault();
        this.selectedSubcategoryId = $event.target.value;
    }

    private selectDefaultSubcategory(): void {
        this.subcategories = this.categories.find(
            (category, num, array) => category.id == this.selectedCategoryId).subcategories;
        this.selectedSubcategoryId = this.subcategories[0].id;
    }    
}