import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountHotmailService extends ApiService {

  private url = 'http://127.0.0.1:8000/api/hotmail/';

  constructor(private http: HttpClient) {
    super();
  }

  public userExist(username: string): Promise<any> {

    if (this.debug) {
      return super.fakeApi(username);
    }

    return this.http.get(this.url + username)
      .toPromise()
      .then((resposta: any) => {
        return resposta;
      });

  }
}