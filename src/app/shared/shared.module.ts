import { RouterModule ,Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { SelectComponent } from './component/select/select.component';
import { FooterComponent } from './component/footer/footer.component';
import { ScrollToTopComponent } from './component/scroll-to-top/scroll-to-top.component';
import {  } from './component/scroll-to-top/scroll-to-top.component';
import { PriceFilterComponent } from './component/price-filter/price-filter.component';
import { MatSliderModule } from '@angular/material/slider';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FooterComponent,
    ScrollToTopComponent,
    PriceFilterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatSliderModule

  ],
  exports:[
    HeaderComponent,SpinnerComponent,SelectComponent,FooterComponent,PriceFilterComponent
  ]
})
export class SharedModule { }
