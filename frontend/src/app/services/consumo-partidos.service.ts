import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ConsumoVotosInterface} from '../sabana/components/captura-datos/interface/consumo-votos.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsumoPartidosService {

  private baseUrl = '../../assets/db/precidencia.json';

  constructor(
    private http:HttpClient
  ) { }


  public obtenerPartidos():Observable<ConsumoVotosInterface>{

    return this.http.get<ConsumoVotosInterface>(this.baseUrl);

  }

}
