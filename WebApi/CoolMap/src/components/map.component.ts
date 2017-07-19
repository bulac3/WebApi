import { Component, Output, EventEmitter } from '@angular/core';

import { environment } from '../environments/environment';

import { Category } from '../models/category';
import { Subcategory } from '../models/subcategory';
import { Item } from '../models/item';
import { Coords } from '../models/coords';
import { FilterOptions } from '../models/filterOtions';
import { itemService } from '../services/item.service';  

@Component({
    selector: 'cool-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent {
    constructor(private _itemService: itemService) { }

    private screenLatitude: number;
    private screenLongitude: number;
    private items: Item[];

    @Output() markerSelectedEvent = new EventEmitter();
    @Output() selectCoords = new EventEmitter();

    public setItems(newItems: Item[]) {
        if (newItems.length > 0 && this.screenLatitude == null) {
            this.screenLatitude = newItems[0].latitude;
            this.screenLongitude = newItems[0].longitude;
        }
        this.items = newItems;
    }

    public filterObjects(options: FilterOptions) {
        this._itemService.FilterObjects(options.categoryId, options.subcategoryId)
            .subscribe(items => this.setItems(items));
    }

    private markerClicked(id) {        
        this.markerSelectedEvent.emit(id);
    }

    private mapDblClick(event) {
        let coords: Coords = { latitude: event.coords.lat, longitude: event.coords.lng };
        this.selectCoords.emit(event);
    }

}