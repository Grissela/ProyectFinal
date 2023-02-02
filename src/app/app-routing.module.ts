import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewproductoComponent } from './components/newproducto/newproducto.component';
import { TableproductosComponent } from './components/tableproductos/tableproductos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegisterComponent } from './pages/register/register.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PermisosGuard } from './guard/permisos.guard';
import { ModalComponent } from './pages/modal/modal.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent,...canActivate(() => redirectLoggedInTo(['/']))},
  {path:'productos', component:ProductosComponent},
  {path:'tableprod', component:TableproductosComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'nuevoprod', component:NewproductoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) }, 
  {path:'detalle/:nombre', component:DetalleComponent},
  {path:'pedidos', component:PedidosComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'register', component:RegisterComponent},
  {path:'modal', component:ModalComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
