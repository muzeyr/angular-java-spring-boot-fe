import { classify } from '@angular-devkit/core/src/utils/strings';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { find } from 'rxjs-compat/operator/find';
import { MusteriDto } from '../model/musteri';

@Injectable({
  providedIn: 'root'
})
export class MusteriService {
  private endpoint = 'musteri';

  constructor(private readonly httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<any>(environment.apiUrl+this.endpoint);
  }
  save(musteri: MusteriDto){
    return this.httpClient.post<any>(`${environment.apiUrl}/${this.endpoint}`,musteri);
  }
  find(uuid: string){
    return this.httpClient.get<any>(environment.apiUrl+this.endpoint+'/'+uuid);

  } 
  delete(uuid: string){
    return this.httpClient.delete<any>(`${environment.apiUrl}/${this.endpoint}?uuid=${uuid}`)
  }

}


export interface Musteri{

}