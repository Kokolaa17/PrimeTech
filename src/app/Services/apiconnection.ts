import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Products } from '../Interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class APIConnection {
  private readonly _httpClient = inject(HttpClient);

  getBrands(){
    return this._httpClient.get<string[]>(`https://api.everrest.educata.dev/shop/products/brands`);
  }

  getAllProducts(){
    return this._httpClient.get<Products>(`https://api.everrest.educata.dev/shop/products/all?page_size=38`);
  }

  getMobilesOnly(){
    return this._httpClient.get<Products>(`https://api.everrest.educata.dev/shop/products/category/2?page_size=38`)
  }

  getLaptopsOnly(){
    return this._httpClient.get<Products>(`https://api.everrest.educata.dev/shop/products/category/1?page_size=38`)
  }
}
