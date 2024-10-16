import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { InicioComponent } from './inicio.component'
import { LibrosComponent } from './Libros/libros.component'

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'libros', component: LibrosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
