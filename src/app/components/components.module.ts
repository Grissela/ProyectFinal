import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableproductosComponent } from './tableproductos/tableproductos.component';
import { NewproductoComponent } from './newproducto/newproducto.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TableproductosComponent,
    NewproductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TableproductosComponent,
    NewproductoComponent
  ],
})
export class ComponentsModule { }
