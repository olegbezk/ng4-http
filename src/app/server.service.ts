import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
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
        return this.http.get('https://udemy-ng-http-dca15.firebaseio.com/data') // url without .json
            .map(
                (response: Response) => {
                    const data = response.json();
                    for (const server of data) {
                        server.name = "FETCHED_" + server.name;
                    }
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong');
                }
            );
    }

    getAppName() {
        //noinspection TypeScriptValidateTypes
        return this.http.get("https://udemy-ng-http-dca15.firebaseio.com/appName.json")
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }
}