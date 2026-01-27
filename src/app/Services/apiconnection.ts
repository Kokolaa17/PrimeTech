import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIConnection {
  private readonly _httpClient = inject(HttpClient);

  getBrands(){
    return this._httpClient.get(`https://api.everrest.educata.dev/shop/products/brands`);
  }
}
