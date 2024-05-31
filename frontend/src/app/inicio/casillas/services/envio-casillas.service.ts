import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MenuVotonIterface } from '../interfaces/menu-voto.interface';

@Injectable({
  providedIn: 'root'
})
export class EnvioCasillasService {

  public _dataObservable:Subject<MenuVotonIterface> = new Subject<MenuVotonIterface>();

  constructor() { }

  public envioDato(dato:MenuVotonIterface){

    this._dataObservable.next(dato);

  }

  public escucharData(): Observable<MenuVotonIterface>{
    return this._dataObservable.asObservable();
  }

  


}
