import { ApiService } from './api.service';
import { Tokens } from './../tokens/tokens';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AccountTwitterService extends ApiService {

  private url = `https://twitter.com/users/username_available?username=`;

  constructor(private http: HttpClient) {
    super();
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return !error;
  };

  public userExist(username: string): Promise<any> {

    /*
    return this.http.get(this.url + `${username}`)
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta);
        return resposta;
      }).catch(this.handleError);*/

    if (this.debug) {
      return super.fakeApi(username);
    }

    return super.fakeApi(username);

  }
}