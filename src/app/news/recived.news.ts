import { Component } from '@angular/core';

@Component({
    selector: 'recived-app',
    template: ``
})

export class RecivedData
   {
      text: string;
      date: number;
      owner_name: string;

      constructor(text: string, owner_name: string, date: number) {

        this.text = text;
        this.date = date;
        this.owner_name = owner_name;
    }
  }
