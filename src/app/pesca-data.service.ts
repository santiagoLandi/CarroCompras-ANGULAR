import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './pesca-list/product';

const URL='https://66840f2956e7503d1adf30ce.mockapi.io/api/v1/productos';

@Injectable({
  providedIn: 'root'
})
export class PescaDataService {

  
  constructor(private http:HttpClient) { }

  public getAll(): Observable<product[]>{
    return this.http.get<product[]>(URL);
  }

}
