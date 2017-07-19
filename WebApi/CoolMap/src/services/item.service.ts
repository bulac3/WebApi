import { Http, Response, Headers, RequestOptions  } from '@angular/http';

import { Item } from '../models/item';
import { Category } from '../models/category';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {
    Injectable
} from '@angular/core';

@Injectable()
export class itemService {
    constructor(private _httpService: Http) { }

    public GetCategoryHierarchy(): Observable<Category[]> {
        return this._httpService.get(`${environment.apiUrl}/GetCategoryHierarchy`)
            .map((response: Response) => <Category[]>response.json());
    }

    public FilterObjects(category: number, subcategory: number): Observable<Item[]> {
        let url = `${environment.apiUrl}/FilterObjects?category=${category}&subcategory=${subcategory}`;
        return this._httpService.get(url)
            .map((response: Response) => <Item[]>response.json());
    }

    public GetItem(id: number, ): Observable<Item> {
        let url = `${environment.apiUrl}/${id}`;
        return this._httpService.get(url)
            .map((response: Response) => <Item>response.json());
    }

    public AddItem(item: Item): Observable<any> {
        let url = `${environment.apiUrl}`;
        let body = JSON.stringify(item);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._httpService
            .post(url, body, options)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
} 