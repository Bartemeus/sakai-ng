import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountries() {
        return this.http.get<any>('assets/demo/data/countries.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
    getAll() {
        return this.http.get<any>('api/getall')
            .toPromise()
            .then(res => res as any[])
            .then(data => data);
    }
}
