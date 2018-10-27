import { ApiService } from './api.service';
import { Tokens } from './../tokens/tokens';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterInpiService extends ApiService {

  private url = 'https://www.tmdn.org/tmview/search-tmv?_search=false&nd=1540562034603&rows=10&page=1&sidx=tm&sord=asc&q=tmsort:%22';

  constructor(private http: HttpClient) {
    super();
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return error;
  };

  public userExist(username: string): Promise<any> {

    return this.http.get(this.url + username + '%22&fq=[]&pageSize=10&facetQueryType=2&providerList=null&expandedOffices=null&interfacelanguage=en&selectedRowRefNumber=null')
      .toPromise()
      .then((resposta: any) => {
        console.log('Aqui: ');
        console.log(resposta);
        console.log(resposta.facetFields.facets.oc.ocurrences.BR);
        return resposta;
      }).catch(this.handleError);
      
/*
    if (this.debug) {
      return super.fakeApi(username);
    }

    return super.fakeApi(username);*/

  }
}