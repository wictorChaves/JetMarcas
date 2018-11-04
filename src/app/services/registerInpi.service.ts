import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterInpiService extends ApiService {

  private url = 'http://127.0.0.1:8000/api/inpi/';

  constructor(private http: HttpClient) {
    super();
  }

  public userExist(brand: string): Promise<any> {

    if (this.debug) {
      return super.fakeApi(brand);
    }

    return this.http.get(this.url + brand)
      .toPromise()
      .then((resposta: any) => {
        return resposta;
      });

  }
}