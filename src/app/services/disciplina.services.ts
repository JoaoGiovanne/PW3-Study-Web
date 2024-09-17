import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../models/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private URL: string = 'http://localhost:8080/disciplina';
  
  constructor(private httpClient: HttpClient) {}

  buscarDisciplina(): Observable<Disciplina[]>{
    return this.httpClient.get<Disciplina[]>(this.URL)
  }

  excluirDisciplina(): Observable<Disciplina[]>{
    return this.httpClient.delete<Disciplina[]>(this.URL)
  }
  
  inserirDisciplina(disciplina: Disciplina): Observable<Disciplina>{
    return this.httpClient.post<Disciplina>(this.URL, disciplina)
  }

  atualizarDisciplina(disciplina: Disciplina): Observable<Disciplina>{
    return this.httpClient.put<Disciplina>(this.URL, disciplina)
  }
}
