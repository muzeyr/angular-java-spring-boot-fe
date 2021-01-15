import { classify } from '@angular-devkit/core/src/utils/strings';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { find } from 'rxjs-compat/operator/find';

@Injectable({
  providedIn: 'root'
})
export class KaanService {
  private endpoint = 'kaan';

  constructor(private readonly httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<any>(environment.apiUrl+this.endpoint);
  }
  
  delete(uuid: string){
    return this.httpClient.delete(environment.apiUrl+this.endpoint+'/'+uuid);

  }

    find(uuid: string){
      return this.httpClient.get<any>
                              (environment.apiUrl+this.endpoint);

    }

}


export interface Kaan{

}