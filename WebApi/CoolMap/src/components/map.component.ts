import { Component, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http'

import { environment } from '../environments/environment';

import { Category } from '../models/category';
import { Subcategory } from '../models/subcategory';
import { Item } from '../models/item';

@Component({
    selector: 'cool-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent {

    constructor(private _httpService: Http) { }

    private screenLatitude: number;
    private screenLongitude: number;
    private items: Item[];

    @Output() markerSelectedEvent = new EventEmitter();
    @Output() selectCoors = new EventEmitter();

    public setItems(newItems: Item[]) {
        this.items = newItems;
        if (newItems.length > 0) {
            this.screenLatitude = newItems[0].latitude;
            this.screenLongitude = newItems[0].longitude;
        }
    }

    private markerClicked(id) {        
        this.markerSelectedEvent.emit(id);
    }

    private mapDblClick(event) {
        this.selectCoors.emit(event);
    }

}