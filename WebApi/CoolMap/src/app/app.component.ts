import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http'

import { MapComponent } from '../components/map.component';
import { CategoryFilterComponent } from '../components/categoryFilter.component';
import { Item } from '../models/item';

import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent implements OnInit {
    constructor(private _httpService: Http) { }

    @ViewChild(MapComponent) map: MapComponent
    @ViewChild(CategoryFilterComponent) filter: CategoryFilterComponent

    selectedItem: Item;

    ngOnInit() {
        this._httpService.get('http://localhost:5000/api/webapi/')
            .map((response: Response) => <Item[]>response.json())
            .subscribe(items => {
                this.map.setItems(items);
                if (items.length > 0) {
                    this.map.setScreenPosition(items[0]);
                }
            });
    }

    onFilter() {
        let category = this.filter.selectedCategoryId;
        let subcategory = this.filter.selectedSubcategoryId;
        let url = `${environment.apiUrl}/FilterObjects?category=${category}&subcategory=${subcategory}`;
        this._httpService.get(url)
            .map((response: Response) => <Item[]>response.json())
            .subscribe(items => {
                this.map.setItems(items);
            });
    }

    mapClicked(event) {
        console.log("Hello1");
    }

    markerSelected(id) {
        let url = `${environment.apiUrl}/${id}`;
        this._httpService.get(url)
            .map((response: Response) => <Item>response.json())
            .subscribe(item => {
                this.selectedItem = item;
            });
    }
    
}