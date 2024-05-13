import { RouterModule ,Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { SelectComponent } from './component/select/select.component';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[
    HeaderComponent,SpinnerComponent,SelectComponent,FooterComponent
  ]
})
export class SharedModule { }
