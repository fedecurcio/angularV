import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component'
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './Libros/libros.component'
import { LibroComponent } from './Libro/libro.component'
import { LibrosService } from './Services/libros.service'
import { InicioComponent } from './inicio.component'
import { AppRoutingModule} from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent, UsuarioComponent, LibrosComponent, LibroComponent, InicioComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
