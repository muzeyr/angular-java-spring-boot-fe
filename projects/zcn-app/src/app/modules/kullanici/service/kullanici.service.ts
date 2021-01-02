import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestResponse } from 'app/shared/model/rest-response';
import { environment } from 'environments/environment'; 
import { BaseService } from '../../../utilities/service/base.service';
import { KullaniciDto } from '../model/kullanici-dto.models';
@Injectable({
  providedIn: 'root'
})
export class KullaniciService  implements BaseService<KullaniciDto> {

  endpoint: string = 'users';
 
  constructor(private readonly httpClient: HttpClient) {
  }

  save(kategoriForm: any){
    return this.httpClient.post<any>(`${environment.apiUrl}/${this.endpoint}`,kategoriForm);
  }
  list(){
    return this.httpClient.get<RestResponse<KullaniciDto>>(`${environment.apiUrl}/${this.endpoint}`);
  }
  detail(uuid: string){
    return this.httpClient.get<any>(`${environment.apiUrl}/${this.endpoint}/find-user/${uuid}`)
  }
  delete(uuid: string){
    return this.httpClient.delete<any>(`${environment.apiUrl}/${this.endpoint}?uuid=${uuid}`)
  }



}
