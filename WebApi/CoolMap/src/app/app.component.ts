import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    constructor(private _httpService: Http) { }
    values: any;
    screenLatitude: number;
    screenLongitude: number;
    clickLatitude: number;
    clickLongitude: number;
    markers: any[] = [
        {
            latitude: 51,
            longitude: 7.06
        }
    ]
    ngOnInit() {
        this._httpService.get('http://localhost:60289/api/webapi/').subscribe(values => {
            console.log("Hello1");
            this.values = values.json();
            this.screenLatitude = this.values[0].latitude;
            this.screenLongitude = this. values[0].longitude;
        });
    }
    mapClicked($event: any) {
        console.log("Hello1");
        this.markers.push({
            latitude: $event.coords.lat,
            longitude: $event.coords.lng
        });
    }   
}