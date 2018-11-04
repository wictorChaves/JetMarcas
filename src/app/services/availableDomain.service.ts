import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AvailableDomain extends ApiService {

  private url = 'http://127.0.0.1:8000/api/whoapi/';

  constructor(private http: HttpClient) {
    super();
  }

  public domainExist(domain: string): Promise<any> {

    if (this.debug) {
      return super.fakeApi(domain);
    }

    return this.http.get(this.url + domain)
      .toPromise()
      .then((resposta: any) => {
        return resposta;
      });

  }

}