import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //atributos
  private apiUrl = 'http://localhost:3000/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) { }

  registrar(usuario:any):Observable<any>{
    // Prrimeiro busca se email do cadastroja existe
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(usuarios => {
        if(usuarios.length>0){ // Caso exista
          // Cria uma mensagem de erro para ser tratada no try/catch
          return throwError (()=> new Error("Usuário Já Cadastrado"));
        }else{ // Caso não exista
          // Cadastra o usuario no BD
          return this.http.post<any>(this.apiUrl, usuario);
        }
      })
    )
  }

  login(credenciais: any): Observable<boolean>{
    // Pega as credenciais do usuario (email e senha)
    return this.http.get<any[]>(
      // Verifica no BD se email e senha foram encontrados
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
        map(usuarios => {
          if(usuarios.length>0){ // Se foi encontrado
            // Armazena as info do usuario e a chave no localStorage
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuarios[0]));
            // Retorna que o acesso foi permitido
            return true;
          }else{ // Caso não encontrado
            // Fazer um erro
            // Retorno que meu usuario nao esta permitindo o acesso
            return false;
          }
        })
      )
  }

  logout(){
    localStorage.removeItem(this.CHAVE_AUTH); // Remove a chave de autenticação
    this.router.navigate(['/login']); // Redireciona para a página de Login
  }

  // Verificar se o usuario ja esta logado (CHAVE_AUTH)
  estaAutenticado():boolean {
    // Vou transformar uma variavel do Tipo Textoem Boolean
    return !!localStorage.getItem(this.CHAVE_AUTH); // Vai retornar true ou false
  }

  // Pegar asinfomações do usuario no localStorage
  getUsuarioLogado(): any {
    // Retorna as informações do usuario autenticado, que estao armazenadas no localStorage
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}');
  }
}
