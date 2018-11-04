import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AccountTwitterService extends ApiService {

  private url = 'http://127.0.0.1:8000/api/twitter/';

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