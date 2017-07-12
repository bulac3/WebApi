import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private _httpService: Http) { }
    apiValues: string[] = [];
    title: string = 'My first AGM project';
    lat: number = 51.678418;
    lng: number = 7.809007;
    ngOnInit() {
        this._httpService.get('http://localhost:60289/api/webapi/').subscribe(values => {
            console.log("Hello1");
            this.apiValues = values.json() as string[];
            
        });
    }
}