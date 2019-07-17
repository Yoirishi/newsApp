import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { HttpClientModule }   from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent }   from './about.component';
import { NewsComponent }   from './news.component';
import { NotFoundComponent }   from './not-found.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RecivedData } from './news/recived.news';




const appRoutes: Routes =[
    { path: '', component: NewsComponent},
    { path: 'news', component: NewsComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:[BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes), InfiniteScrollModule],
    declarations: [ AppComponent, NewsComponent, AboutComponent, NotFoundComponent, RecivedData],
    bootstrap: [AppComponent]
})
export class AppModule{}
