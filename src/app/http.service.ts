import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }
    public url: string;
    getData(){
        return this.http.get(this.url);
    }
}
