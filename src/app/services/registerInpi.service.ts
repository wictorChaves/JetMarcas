import { ApiService } from './api.service';
import { Tokens } from './../tokens/tokens';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterInpiService extends ApiService {

  private url = 'http://127.0.0.1:8000/api/inpi/';

  constructor(private http: HttpClient) {
    super();
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return error;
  };

  public userExist(brand: string): Promise<any> {

    return this.http.get(this.url + brand)
      .toPromise()
      .then((resposta: any) => {
        console.log('Aqui: ');
        console.log(resposta);
        return resposta;
      }).catch(this.handleError);
      
/*
    if (this.debug) {
      return super.fakeApi(username);
    }

    return super.fakeApi(username);*/

  }
}