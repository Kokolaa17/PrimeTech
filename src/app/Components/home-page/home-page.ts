import { Component} from '@angular/core';
import { HomeSectionOne } from "./home-section-one/home-section-one";
import { HomeSectionTwo } from "./home-section-two/home-section-two";

@Component({
  selector: 'app-home-page',
  imports: [HomeSectionOne, HomeSectionTwo],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss'],
})
export class HomePage {
}
