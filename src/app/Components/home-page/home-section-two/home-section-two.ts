import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, OnInit } from '@angular/core';
import { APIConnection } from '../../../Services/apiconnection';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { Products } from '../../../Interfaces/products';
import { Product } from '../../../Interfaces/product';

@Component({
  selector: 'app-home-section-two',
  imports: [],
  templateUrl: './home-section-two.html',
  styleUrl: './home-section-two.scss',
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeSectionTwo {

  private readonly _http = inject(APIConnection);
  
  constructor(){
    effect(() => {
      console.log(this.dealsCount());
    })
  }

  dealsCount = computed(() => this.flashDeals().length);

  flashDeals = toSignal(
    this._http.getAllProducts().pipe(
      map((res : Products) => res.products.slice(0, 18))
    ),
    { initialValue: [] }
  )
};