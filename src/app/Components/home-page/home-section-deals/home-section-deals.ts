import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { APIConnection } from '../../../Services/apiconnection';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Products } from '../../../Interfaces/products';


@Component({
  selector: 'app-home-section-deals',
  imports: [],
  templateUrl: './home-section-deals.html',
  styleUrl: './home-section-deals.scss',
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeSectionDeals {

  private readonly _http = inject(APIConnection);

  flashDeals = toSignal(
    this._http.getAllProducts().pipe(
      map((res : Products) => res.products.slice(0, 21))
    ),
    { initialValue: [] }
  )
};