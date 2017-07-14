import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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

export class MapComponent implements OnInit {

    constructor(private _httpService: Http) { }

    screenLatitude: number;
    screenLongitude: number;
    clickLatitude: number;
    clickLongitude: number;
    items: Item[];

    @Output() markerSelected = new EventEmitter();

    setItems(newItems: Item[]) {
        this.items = newItems;
    }

    setScreenPosition(item: Item) {
        this.screenLatitude = item.latitude;
        this.screenLongitude = item.longitude;
    }

    ngOnInit() {

    }

    mapClicked(event) {
        console.log("asd");
  
    }   

    markerClicked(id) {        
        this.markerSelected.emit(id);
    }

}