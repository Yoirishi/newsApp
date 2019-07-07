import { Component } from '@angular/core';
import { HttpService} from './http.service';
import { Data } from './data';
import { urlWriter } from './url.construct.component';



@Component({
    selector: 'home-app',
    template: `<div class="page-header">
        <h1> Поиск игрока WoT </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="plName" placeholder = "Введите имя игрока" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-8">
                    <label>Строгое соответствие</label> <input type="checkbox" [(ngModel)]="startSwith" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-8">
                    <input type="number" class="form-control" [(ngModel)]="limit" placeholder = "Количество результатов" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="urlSearcher(plName, checkbox, limit)">Искать</button>
                </div>
            </div>
        </div>
      </div>
       <table cellspacing="5" cellpadding="10" border="1" class="table table-striped">
     <thead>
         <tr>
             <th>Игрок</th>
             <th>Id игрока</th>
         </tr>
     </thead>
     <tbody>
         <tr *ngFor="let user of player">
             <td>{{user?.nickname}}</td>
             <td>{{user?.account_id}}</td>
         </tr>
     </tbody>
 </table>`,
providers: [HttpService]
})


export class HomeComponent {
    player: Data[]=[];
    urlWork = new urlWriter ();
    urlSearcher (modName: string, modSwith:boolean, modlimit: any) {
      this.urlWork.urlWrite(modName, modSwith, modlimit);
      console.log ("api url is " + this.urlWork.url);
      this.httpService.url = this.urlWork.url;
      this.httpService.getData().subscribe(data => this.player=data["data"]);
    };
    constructor(private httpService: HttpService){}
}
