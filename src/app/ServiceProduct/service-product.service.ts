import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Produit } from '../Models/Produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {

  constructor(private httpClient: HttpClient) { }

  public getAllProduit(): Observable<Array<Produit>> {
    return this.httpClient.get<Array<Produit>>(environment.baseUrl);
  }
}
