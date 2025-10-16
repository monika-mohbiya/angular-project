import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAPIlocallyService {
  apiURL = 'http://localhost:3000/';
  private http = inject(HttpClient)
  async userviews(): Promise<any> {
    return await firstValueFrom(
      this.http.get(this.apiURL + 'userDetails')
    );
  }
  async user(val: string): Promise<any> {
    return await firstValueFrom(
      this.http.post(this.apiURL + 'userDetails', val)
    );
  }
}
