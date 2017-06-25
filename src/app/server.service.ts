import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServerService {
    BASE_URL = 'https://udemy-ng-http-dca15.firebaseio.com/data.json';

    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http.post(this.BASE_URL, servers, {headers: headers});
    }

    getServers() {
        return this.http.get(this.BASE_URL);
    }
}