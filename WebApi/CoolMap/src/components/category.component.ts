import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

import { Category } from '../models/category';
import { Subcategory } from '../models/subcategory';

import { environment } from '../environments/environment';

@Component({
    selector: 'category',
    templateUrl: './category.component.html'
})

export class CategoryComponent implements OnInit {

    constructor(private _httpService: Http) { }

    categories: Category[];
    selectedCategoryId: number;
    subcategories: Subcategory[];
    selectedSubcategoryId: number;

    public getCategoryId() {
        return this.selectedCategoryId;
    }

    public getSubcategoryId() {
        return this.selectedSubcategoryId;
    }

    ngOnInit() {
        this._httpService.get(environment.apiUrl + '/GetCategoryHierarchy').subscribe(values => {
            this.categories = values.json();
            this.selectedCategoryId = this.categories[0].id;
            this.selectDefaultSubcategory();
        });
    }

    onInputCategory($event) {
        $event.preventDefault();
        this.selectedCategoryId = $event.target.value;
        this.selectDefaultSubcategory();
    }

    onInputSubcategory($event) {
        $event.preventDefault();
        this.selectedSubcategoryId = $event.target.value;
    }

    selectDefaultSubcategory() {
        this.subcategories = this.categories.find((category, num, array) => category.id == this.selectedCategoryId).subcategories;
        console.log(this.selectedCategoryId);
        console.log(this.subcategories);

        this.selectedSubcategoryId = this.subcategories[0].id;
    }
}