import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SimplecalculatorComponent } from './simplecalculator/simplecalculator.component';
import { DepositComponent } from './deposit/deposit.component';
import { AschaComponent } from './ascha/ascha.component';
import { PunithComponent } from './punith/punith.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CalculatorComponent,
    SimplecalculatorComponent,
    DepositComponent,
    AschaComponent,
    PunithComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
