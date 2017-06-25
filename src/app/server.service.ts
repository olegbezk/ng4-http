import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    BASE_URL = 'https://udemy-ng-http-dca15.firebaseio.com/data.json';

    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});

        //return this.http.post(this.BASE_URL, servers, {headers: headers});
        return this.http.put(this.BASE_URL, servers, {headers: headers});
    }

    getServers() {
        //noinspection TypeScriptValidateTypes
        return this.http.get(this.BASE_URL)
            .map(
                (response: Response) => {
                    const data = response.json();
                    for (const server of data) {
                        server.name = "FETCHED_" + server.name;
                    }
                    return data;
                }
            );
    }
}