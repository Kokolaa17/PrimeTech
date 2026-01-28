import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { APIConnection } from '../../../Services/apiconnection';

@Component({
  selector: 'app-home-section-one',
  imports: [],
  templateUrl: './home-section-one.html',
  styleUrl: './home-section-one.scss',
})
export class HomeSectionOne {
  private readonly _http = inject(APIConnection);

  constructor() {
    this.changeShowingImage()
  }

  allBrands = toSignal(
    this._http.getBrands(),
    { initialValue: [] }
  );

  // banner images for welcome section
  public welcomeSectionImages: string[] = [
    '/images/welcomeBG1.avif',
    '/images/welcomeBG2.avif',
    '/images/welcomeBG3.avif',
  ];
  showingImageIndex = signal(0);

  changeShowingImage() {
    setInterval(() => {
      this.showingImageIndex.update(value => (value + 1) % 3);
    }, 5000);
  }
}
