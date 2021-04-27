import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './../content/content.component';
import { CadastroClientesComponent } from './../cadastro-clientes/cadastro-clientes.component';
import { CadastroConcluidoComponent } from '../cadastro-concluido/cadastro-concluido.component';
import { HomeLogadaComponent } from '../home-logada/home-logada.component';
import { AuthGuard } from 'auth.guard';
import { AcessoNegadoComponent } from '../acesso-negado/acesso-negado.component';
import { LoginComponent } from '../login/login.component';
import { PainelInvestirComponent } from '../painel-investir/painel-investir.component';
import { InvestirComponent } from '../investir/investir.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'cadastro-concluido', component: CadastroConcluidoComponent },
  { path: 'home-logada', component: HomeLogadaComponent, canActivate: [AuthGuard] },
  { path: 'acesso-negado', component: AcessoNegadoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'painel-investir', component: PainelInvestirComponent},
  { path: 'investimentos', component: InvestirComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
