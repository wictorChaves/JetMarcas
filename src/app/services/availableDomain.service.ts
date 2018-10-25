import { Tokens } from './../tokens/tokens';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AvailableDomain {

  constructor(private http: HttpClient) { }

  public domainExist(domain: string): Promise<any> {
    return this.http.get(this.getUrl(domain))
      .toPromise()
      .then((resposta: any) => {
        return resposta.registered;
      });
  }

  private getUrl(domain) {
    return 'http://api.whoapi.com/?domain=' + domain + '.com.br&r=whois&apikey=' + Tokens.whoapi;
  }

}