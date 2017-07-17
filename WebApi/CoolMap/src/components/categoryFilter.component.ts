﻿import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Http } from '@angular/http'

import { Category } from '../models/category';
import { Subcategory } from '../models/subcategory';

import { environment } from '../environments/environment';

@Component({
    selector: 'category-filter',
    templateUrl: './categoryFilter.component.html'
})

export class CategoryFilterComponent implements OnInit {

    constructor(private _httpService: Http) { }

    public selectedCategoryId: number;
    public selectedSubcategoryId: number;

    private categories: Category[];
    private subcategories: Subcategory[];

    public ngOnInit() {
        this._httpService.get(`${environment.apiUrl}/GetCategoryHierarchy`).subscribe(values => {
            this.categories = values.json();
            this.selectedCategoryId = this.categories[0].id;
            this.selectDefaultSubcategory();
        });
    }

    private onInputCategory($event) {
        $event.preventDefault();
        this.selectedCategoryId = $event.target.value;
        this.selectDefaultSubcategory();
    }

    private onInputSubcategory($event) {
        $event.preventDefault();
        this.selectedSubcategoryId = $event.target.value;
    }

    private selectDefaultSubcategory() {
        this.subcategories = this.categories.find(
            (category, num, array) => category.id == this.selectedCategoryId).subcategories;
        this.selectedSubcategoryId = this.subcategories[0].id;
    }    
}