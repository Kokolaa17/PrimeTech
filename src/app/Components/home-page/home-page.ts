import { Component} from '@angular/core';
import { HomeSectionOne } from "./home-section-one/home-section-one";
import { HomeSectionDeals } from "./home-section-deals/home-section-deals";
import { HomeSectionMobiles } from "./home-section-mobiles/home-section-mobiles";
import { HomeSectionLaptops } from "./home-section-laptops/home-section-laptops";
import { HomeSectionCommerical } from "./home-section-commerical/home-section-commerical";

@Component({
  selector: 'app-home-page',
  imports: [HomeSectionOne, HomeSectionDeals, HomeSectionCommerical, HomeSectionMobiles, HomeSectionLaptops, HomeSectionDeals, HomeSectionCommerical],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss'],
})
export class HomePage {
}
