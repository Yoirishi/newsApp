export class urlWriter  {

      public playerName: string;
      public strtSwith: string;
      public limitOfResult: any;
      public url: string;

      urlWrite(modelName: string, modelSwith: boolean, modelLimit: any) {
      this.playerName = modelName;
      if (modelSwith=true) {this.strtSwith = 'startswith'} else {this.strtSwith = 'exact'};
      this.limitOfResult = <string>modelLimit;
      this.url = 'https://api.worldoftanks.ru/wot/account/list/?application_id=a599619096be92699be7795af10b9854&search='+this.playerName+'&fields=-&language=ru&limit='+<string>this.limitOfResult+'&type='+this.strtSwith;
      }
}
