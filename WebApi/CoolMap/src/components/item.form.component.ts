import { Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, NgForm } from '@angular/forms';

import { Item } from '../models/item';
import { Category } from '../models/category';
import { Subcategory } from '../models/subcategory';
import { environment } from '../environments/environment';
import { itemService } from '../services/item.service'; 

@Component({
    selector: 'item-form',
    templateUrl: './item.form.component.html',
    styleUrls: ['./item.form.component.css']
})

export class ItemFormComponent implements OnInit {

    constructor(private _itemService: itemService) {}

    private categories: Category[];

    public ngOnInit(): void {
        this._itemService.GetCategoryHierarchy()
            .subscribe(categories => this.categories = categories);
    }

    public itemFormGroup = new FormGroup({
        name: new FormControl()
    });

    model = new Item();

    submitted = false;

    onSubmit(itemForm: NgForm) {
        itemForm.reset();
        
    }
}