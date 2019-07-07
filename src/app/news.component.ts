import { Component, OnInit, AfterViewChecked, DoCheck} from '@angular/core';
import { NewsHttpService } from './news/news.http.service';
import { News } from './news/news.form';
import { RecivedData } from './news/recived.news';

const nisPackage = require('../../package.json');

@Component({
    selector: 'news-app',
    templateUrl: `./news.component.html`,
    providers: [NewsHttpService, News]
})
export class NewsComponent implements OnInit, AfterViewChecked, DoCheck{
    recivedNews: RecivedData[] = [];
    displayedNews: RecivedData[] = [];
    throttle = 300;
    scrollDistance = 1;
    counter: boolean = false;


    timeConverter (nginx_timestamp: number) {
      let a = new Date(nginx_timestamp*1000);
      let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      let year = a.getFullYear();
      let month = months[a.getMonth()];
      let date = a.getDate();
      let hour = a.getHours();
      let min = a.getMinutes();
      let sec = a.getSeconds();
      let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      return time;
    }



    constructor(private newsHttpService: NewsHttpService, public newscontaner: News){
      this.newscontaner.count = 20;
      this.newscontaner.type = 1;
      this.newscontaner.offset = 0;
    }


  ngOnInit() {
    this.loadNews(this.newscontaner);
    console.log('OnInit');
  }

  ngDoCheck() {
    this.pushNews();
    console.log('DoCheck');
  }

  ngAfterViewChecked() {
    this.pushNews();
    console.log('AfterViewChecked');
  }

    loadNews(newscontaner: News) {
      console.log('try to update');
      this.newsHttpService.postNews(newscontaner)
        .subscribe(
          (data: RecivedData) => {
            this.recivedNews=data["data"];
            console.log('load');
            this.counter = true;
          },
          error => console.log(error));
    console.log('switch is ' + this.counter);
      this.pushNews();
    }

    pushNews() {
    console.log('switch is ' + this.counter);
    if (this.counter == true) {
            for (let i = 0; i<20; i++){
              this.displayedNews.push(this.recivedNews[i]);
            }
              this.newscontaner.offset += 20;
              this.counter = false;
              console.log('succesfull update');
          }
          else {
            console.log('fail to update');
          }
          console.log('switch is ' + this.counter);
    }
}
