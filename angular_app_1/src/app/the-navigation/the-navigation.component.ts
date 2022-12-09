import { Component,OnInit, HostBinding, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-the-navigation',
  templateUrl: './the-navigation.component.html',
  styleUrls: ['./the-navigation.component.css']
})
export class TheNavigationComponent{
  /*
  isFixedNavbar: boolean =false;
  @HostBinding('class.navbar-opened') navbarOpened = false;
  constructor(
  ) { }
  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }*/
  /*
  showLinked: boolean = false;

  showLinks() {
    return this.showLinked;
  }

  click() {
    this.showLinked = !this.showLinked
  }*/
}
