import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})

export class UsuarioComponent
{
  usuarios = ['Pepe','Cacho','Lola'];
  usuarioNombre = 'Tito';
  visible = false;

  constructor(){
    setTimeout(() => {
      this.visible = true;
    },3000);
  }


  onAddUser(){
    this.usuarios.push(this.usuarioNombre);
  }
}
