import { ApiService } from './api.service';
import { Tokens } from './../tokens/tokens';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountGmailService extends ApiService {

  private url = 'https://apilayer.net/api/check?access_key=' + Tokens.emails + '&email=';

  constructor(private http: HttpClient) {
    super();
  }

  public userExist(username: string): Promise<any> {

    if (this.debug) {
      return super.fakeApi(username);
    }

    return this.http.get(this.url + `${username}@gmail.com`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.smtp_check;
      });

  }
}