import { Component, signal } from '@angular/core';
import { SideMenu } from "./side-menu/side-menu/side-menu";

@Component({
  selector: 'app-nav-bar',
  imports: [SideMenu],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  isSideMenuOpen = signal(false);

  toggleSideMenu() {
    this.isSideMenuOpen.set(!this.isSideMenuOpen());
  }
}
