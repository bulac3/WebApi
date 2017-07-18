import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { MapComponent } from '../components/map.component';
import { FilterComponent } from '../components/filter.component';
import { ItemFormComponent } from '../components/item.form.component';
import { Item } from '../models/item';
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
    @ViewChild('childModal') childModal: ModalDirective;

    selectedItem: Item;
    name: string = "";

    public ngOnInit() {
        this.onFilter();
    }

    private onFilter(): void {
        let category = this.filter.selectedCategoryId;
        let subcategory = this.filter.selectedSubcategoryId;
        this._itemService.FilterObjects(category, subcategory)
            .subscribe(items => this.map.setItems(items));
    }

    private itemSelected(id): void {
        this._itemService.GetItem(id)
            .subscribe(item => this.selectedItem = item);
    }

    private selectNewItemCoords(event) {
        let latitude = event.coords.lat;
        let longitude = event.coords.lng;
        //this.childModal.show();
        console.log(latitude, longitude);
    }

    private showChildModal() {        
        this.childModal.show();
    }

    private hideChildModal() {        
        this.childModal.hide();
    }

    private addItem(name, description) {
        //this._httpService.get(url)
        //    .map((response: Response) => <Item[]>response.json())
        //    .subscribe(items => {
        //        this.map.setItems(items);
        //    });



        this.childModal.hide();
    }
}