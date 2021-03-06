import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Doacao } from '../doacao.model';
import { DoacaoService } from '../doacao.service';

@Component({
  selector: 'app-lista-doacao',
  templateUrl: './lista-doacao.component.html',
  styleUrls: ['./lista-doacao.component.css']
})
export class ListaDoacaoComponent implements OnInit, OnDestroy {
  doacoes: Doacao[] = [];
  private doacoesSubscription: Subscription;

  constructor(public doacaoService: DoacaoService) { }

  ngOnInit(): void {
    this.doacaoService.getDoacoes();
    this.doacoesSubscription = this.doacaoService
       .getListaDeDoacoesAtualizadaObservable()
       .subscribe((doacoes: Doacao[]) => {
         this.doacoes = doacoes;
       });
  }

  onDelete (id: string): void {
    this.doacaoService.removerDoacao(id);
  }
  ngOnDestroy(): void {
    this.doacoesSubscription.unsubscribe();
  }

}
