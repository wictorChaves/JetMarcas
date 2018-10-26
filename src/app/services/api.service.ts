import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  protected debug: boolean = true;

  public fakeApi(register: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Api fake");
        if (register == 'wictor') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, this.randomInteger(1000, 3000));
    });
  }

  private randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
  }
}