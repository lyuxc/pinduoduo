import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
// import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
// import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
// import { ImageSliderComponent } from './components/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
