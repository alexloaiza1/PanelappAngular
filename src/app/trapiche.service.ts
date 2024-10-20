import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';


export interface TrapicheDto {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class TrapicheService {

private apiUrl ='https://localhost:7061/api/Trapiche';

  constructor(private http: HttpClient) { }

  crearTrapiche(trapiche: TrapicheDto): Observable<TrapicheDto> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<TrapicheDto>(this.apiUrl, trapiche, { headers });
  }





}



