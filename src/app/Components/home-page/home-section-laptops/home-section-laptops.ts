import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Inject } from '@angular/core';
import { APIConnection } from '../../../Services/apiconnection';
import { toSignal } from '@angular/core/rxjs-interop';
import { Products } from '../../../Interfaces/products';
import { map } from 'rxjs';

@Component({
  selector: 'app-home-section-laptops',
  imports: [],
  templateUrl: './home-section-laptops.html',
  styleUrl: './home-section-laptops.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeSectionLaptops {
  private readonly _http = inject(APIConnection);

  laptops = toSignal(
    this._http.getLaptopsOnly().pipe(
      map((data : Products) => data.products.slice(0, 21)),
    ),
    { initialValue : [] }
  )
}
