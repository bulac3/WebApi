import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http'

import { MapComponent } from '../components/map.component';
import { CategoryFilterComponent } from '../components/categoryFilter.component';
import { Item } from '../models/item';

import { environment } from '../environments/environment';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    constructor(private _httpService: Http) { }

    @ViewChild(MapComponent) map: MapComponent
    @ViewChild(CategoryFilterComponent) filter: CategoryFilterComponent
    @ViewChild('childModal') childModal: ModalDirective;
    selectedItem: Item;
    name: string = "";

    ngOnInit() {
        this.onFilter();
    }

    onTest() {
        this.name = "";
        console.log(this.name);
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

    itemSelected(id) {
        let url = `${environment.apiUrl}/${id}`;
        this._httpService.get(url)
            .map((response: Response) => <Item>response.json())
            .subscribe(item => {                
                this.selectedItem = item;
            });
    }

    selectNewItemCoords(event) {
        let latitude = event.coords.lat;
        let longitude = event.coords.lng;
        this.childModal.show();
        console.log(latitude, longitude);
    }

    showChildModal() {        
        this.childModal.show();
    }

    hideChildModal() {        
        this.childModal.hide();
    }

    addItem(name, description) {
        //this._httpService.get(url)
        //    .map((response: Response) => <Item[]>response.json())
        //    .subscribe(items => {
        //        this.map.setItems(items);
        //    });



        this.childModal.hide();
    }
}