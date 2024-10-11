import {Subject} from 'rxjs';

export class LibrosService
{
  private libros = ['On The Road', 'Howl','Starting From San Francisco', 'The Dharma Bums'];
  public librosSubject = new Subject();

  agregarLibros(libroNombre : string)
  {
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }

  eliminarLibro(nombreLibro : string)
  {
    this.libros = this.libros.filter(x => x !== nombreLibro);
    this.librosSubject.next();
  }

  obtenerLibros()
  {
    return [...this.libros];
  }
}

