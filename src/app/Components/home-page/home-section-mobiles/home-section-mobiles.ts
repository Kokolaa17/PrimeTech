import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { APIConnection } from '../../../Services/apiconnection';
import { Products } from '../../../Interfaces/products';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-section-mobiles',
  imports: [],
  templateUrl: './home-section-mobiles.html',
  styleUrl: './home-section-mobiles.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeSectionMobiles {
  private readonly _http = inject(APIConnection);

  mobiles = toSignal(
    this._http.getMobilesOnly().pipe(
      map((data : Products) => data.products.slice(0, 21)),
    ),
    { initialValue : [] }
  )
}
