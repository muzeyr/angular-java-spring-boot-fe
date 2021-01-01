import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KullaniciService {
  private endpoint ='users';

  constructor(private readonly httpClient: HttpClient) { }

  kullaniciListesi(){
    return this.httpClient.get<any>(environment.apiUrl+this.endpoint);
  }
}
