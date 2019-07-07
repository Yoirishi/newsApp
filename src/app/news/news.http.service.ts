import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {News} from './news.form';


@Injectable()
export class NewsHttpService{


    constructor(private http: HttpClient){};

    postNews(news: News) {
      return this.http.post('http://dev.apianon.ru:3000/posts/get', news);
    };
}
