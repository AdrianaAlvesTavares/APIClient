import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments';
import { Observable } from 'rxjs';
import { ICliente } from '../interface/ICliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  protected baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getClients(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(`${this.baseUrl}/clientes`);
  }

  Delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
  deleteCliente(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}/`);
}


}
