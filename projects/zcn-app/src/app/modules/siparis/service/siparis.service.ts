import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { find } from 'rxjs-compat/operator/find';
import { SiparisDto } from '../model/siparis';
import { SiparisSaveDto } from '../model/siparis-save-dto';

@Injectable({
  providedIn: 'root'
})
export class SiparisService {
  private endpoint = 'siparis';

  constructor(private readonly httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<any>(environment.apiUrl+this.endpoint);
  }

  save(siparis: SiparisSaveDto){
    return this.httpClient.post<any>(environment.apiUrl+this.endpoint,siparis);
  }
   
  delete(uuid: string){
    return this.httpClient.delete<any>(`${environment.apiUrl}/${this.endpoint}?uuid=${uuid}`)
  }
  find(uuid: string){
    return this.httpClient.get<any>
                            (environment.apiUrl+this.endpoint);

  }

}


export interface Siparis{

}