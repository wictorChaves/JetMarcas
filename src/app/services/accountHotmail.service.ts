import { ApiService } from './api.service';
import { Tokens } from './../tokens/tokens';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountHotmailService extends ApiService {

  private url = ``;

  constructor(private http: HttpClient) {
    super();
  }

  public userExist(username: string): Promise<any> {

    if (this.debug) {
      return super.fakeApi(username);
    }

    return super.fakeApi(username);

  }
}