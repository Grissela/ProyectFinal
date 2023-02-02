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
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PermisosGuard } from './guard/permisos.guard';

const routes: Routes = [
  {path:'',component:HomeComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:'login',component:LoginComponent},
  {path:'productos', component:ProductosComponent},
  {path:'tableprod', component:TableproductosComponent},
  {path:'nuevoprod', component:NewproductoComponent}, 
  {path:'detalle/:nombre', component:DetalleComponent},
  {path:'pedidos', component:PedidosComponent, canActivate:[PermisosGuard]},
  {path:'register', component:RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
