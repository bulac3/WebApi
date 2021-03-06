﻿import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { MapComponent } from '../components/map.component';
import { FilterComponent } from '../components/filter.component';
import { ItemFormComponent } from '../components/item.form.component';
import { Item } from '../models/item';
import { Coords } from '../models/coords';
import { environment } from '../environments/environment';
import { itemService } from '../services/item.service';  

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [itemService] 
})

export class AppComponent implements OnInit {
    constructor(private _itemService: itemService) { }

    @ViewChild(MapComponent) map: MapComponent
    @ViewChild(FilterComponent) filter: FilterComponent    
    @ViewChild(ItemFormComponent) itemForm: ItemFormComponent    
    
    private newItemCoords: Coords;
    
    public ngOnInit() {
        this.onFilter();
    }

    private onFilter(): void {
        let options = this.filter.getFilterOptions();
        this.map.filterObjects(options);
    }

    private selectNewItemCoords(coords) {
        this.newItemCoords = coords;
    }    

    private onModalClose() {
        this.onFilter();
        this.newItemCoords = undefined;
    }
}