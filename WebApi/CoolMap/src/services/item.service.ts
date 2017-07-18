import { Http, Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Item } from '../models/item';
import { Category } from '../models/category';
import { environment } from '../environments/environment';

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

    public GetItem(id: number,): Observable<Item> {
        let url = `${environment.apiUrl}/${id}`;
        return this._httpService.get(url)
            .map((response: Response) => <Item>response.json());
    }
} 