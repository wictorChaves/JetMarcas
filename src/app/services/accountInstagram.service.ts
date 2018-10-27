import { ApiService } from './api.service';
import { Tokens } from './../tokens/tokens';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AccountInstagramService extends ApiService {

  private url = `https://graph.facebook.com/`;

  constructor(private http: HttpClient) {
    super();
  }

  private handleError(error: HttpErrorResponse) {
    return !error.error.error.message.includes("not exist");
  };

  public userExist(username: string): Promise<any> {

    if (this.debug) {
      return super.fakeApi(username);
    }

    return this.http.get(this.url + `${username}/media`)
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta);
        return resposta;
      }).catch(this.handleError);

  }
}