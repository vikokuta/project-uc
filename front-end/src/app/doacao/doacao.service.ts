import { Injectable } from '@angular/core';
import { Doacao } from './doacao.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DoacaoService {
  private doacoes: Doacao[] = [];
  private listaDoacoesAtualizada = new Subject<Doacao[]>();
/*
  getDoacoes(): Doacao[] {
    return [...this.doacoes];
  }

  adicionarDoacao(item: string, descricao: string, dataDoacao: Date) {
    const doacao: Doacao = {
      item: item,
      descricao: descricao,
      dataDoacao: dataDoacao,
    };
    this.doacoes.push(doacao);
    this.listaDoacoesAtualizada.next([...this.doacoes]);
  }
*/
  getListaDeDoacoesAtualizadaObservable() {
    return this.listaDoacoesAtualizada.asObservable();
  }


  constructor(private httpClient: HttpClient) {}

  getDoacoes(): Doacao[] {
    this.httpClient
      .get<{ mensagem: string; doacoes: Doacao[] }>(
        'http://demo2735368.mockable.io/donations'
      )
      .subscribe((dados) => {
        this.doacoes = dados.doacoes;
        this.listaDoacoesAtualizada.next([...this.doacoes]);
        console.log(dados);
      });
      return [...this.doacoes];
  }

  adicionarDoacao(item: string, descricao: string, dataDoacao: Date) {
    const doacao: Doacao = {
      item: item,
      descricao: descricao,
      dataDoacao: dataDoacao,
    };
    this.httpClient
      .post<{ mensagem: string }>('http://localhost:3000/donations', doacao)
      .subscribe((dados) => {
        console.log(dados.mensagem);
        this.doacoes.push(doacao);
        this.listaDoacoesAtualizada.next([...this.doacoes]);
      });
  } 
  
    getListaDoacoesAtualizadaObservable() {
    return this.listaDoacoesAtualizada.asObservable();
  }
}
