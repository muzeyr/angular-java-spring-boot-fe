import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { RestResponse } from 'app/shared/model/rest-response';
import { environment } from 'environments/environment';

 
export interface BaseService<T> {
 
    endpoint: string;
    list();
    
    save(T);
    
    delete(string);

    detail(string);
      
}