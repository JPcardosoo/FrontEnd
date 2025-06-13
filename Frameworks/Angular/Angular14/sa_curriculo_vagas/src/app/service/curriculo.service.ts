import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from 'src/app/models/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  private apiUrl = 'http://localhost:3005/curriculos';

  constructor(private http: HttpClient) {}

  getCurriculoByUsuarioId(usuarioId: number): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(`${this.apiUrl}?usuarioId=${usuarioId}`);
  }

  getCurriculoById(id: number): Observable<Curriculo> {
    return this.http.get<Curriculo>(`${this.apiUrl}/${id}`);
  }

  getAllCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  postCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    return this.http.post<Curriculo>(this.apiUrl, curriculo);
  }

  putCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    return this.http.put<Curriculo>(
      `${this.apiUrl}/${curriculo.id}`,
      curriculo
    );
  }

  deleteCurriculo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
