import { ApiService } from './api.service';
import { Tokens } from './../tokens/tokens';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountYoutubeService extends ApiService {

  private url = `https://www.googleapis.com/youtube/v3/channels?key=` + Tokens.google + `&forUsername=`;

  constructor(private http: HttpClient) {
    super();
  }

  public userExist(username: string): Promise<any> {

    if (this.debug) {
      return super.fakeApi(username);
    }

    return this.http.get(this.url + `${username}&part=id`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.items.length > 0;
      });

  }
}