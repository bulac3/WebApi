import { Component, Output, Input, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { ReactiveFormsModule, NgForm } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { Item } from '../models/item';
import { Category } from '../models/category';
import { Subcategory } from '../models/subcategory';
import { Coords } from '../models/coords';
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
    private model = new Item();

    @ViewChild('itemForm') itemForm: NgForm;
    @ViewChild('childModal') childModal: ModalDirective;
    @Input() coords: Coords;

    public ngOnInit(): void {
        this._itemService.GetCategoryHierarchy()
            .subscribe(categories => this.categories = categories);
    }

    public show(): void {
        this.model = new Item();
        this.itemForm.reset();
        this.childModal.show();
    }

    public hide(): void {
        this.childModal.hide();
    }
    
    private onSubmit() {
        this.childModal.hide();
    }

}