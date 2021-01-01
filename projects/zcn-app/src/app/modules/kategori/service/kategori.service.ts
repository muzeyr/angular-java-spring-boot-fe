import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestResponse } from 'app/shared/model/rest-response';
import { environment } from 'environments/environment';
import { CategortDto } from '../model/category-dto.models';
import { BaseService } from '../../../utilities/service/base.service';
@Injectable({
  providedIn: 'root'
})
export class KategoriService  implements BaseService<CategortDto> {

  endpoint: string = 'category';
 
  constructor(private readonly httpClient: HttpClient) {
  }

  save(kategoriForm: any){
    return this.httpClient.post<any>(`${environment.apiUrl}/${this.endpoint}`,kategoriForm);
  }
  list(){
    return this.httpClient.get<RestResponse<CategortDto>>(`${environment.apiUrl}/${this.endpoint}`);
  }
  detail(uuid: string){
    return this.httpClient.get<any>(`${environment.apiUrl}/${this.endpoint}/find-category/${uuid}`)
  }
  delete(uuid: string){
    return this.httpClient.delete<any>(`${environment.apiUrl}/${this.endpoint}?uuid=${uuid}`)
  }



}
