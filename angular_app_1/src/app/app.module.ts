import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TheNavigationComponent } from './the-navigation/the-navigation.component';
import { TheSectionComponent } from './the-section/the-section.component';
import { TheFooterComponent } from './the-footer/the-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TheNavigationComponent,
    TheSectionComponent,
    TheFooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
