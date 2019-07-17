import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './guards/auth-guard';
import { AdicionarClienteComponent } from './clientes/adicionar-cliente/adicionar-cliente.component';
import { AdicionarFuncionarioComponent } from './funcionarios/adicionar-funcionario/adicionar-funcionario.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AdicionarEmpresaComponent } from './empresas/adicionar-empresa/adicionar-empresa.component';
import { LoginComponent } from './login/login.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { MyDashChartComponent } from './my-dash-chart/my-dash-chart.component';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'cadastroCliente', component: AdicionarClienteComponent, canActivate: [AuthGuard] },
  {path: 'cadastroFuncionario', component: AdicionarFuncionarioComponent, canActivate: [AuthGuard]},
  {path: 'cadastroEmpresa', component: AdicionarEmpresaComponent, canActivate: [AuthGuard]},
  {path: 'listarFuncionarios', component: FuncionariosComponent, canActivate: [AuthGuard]},
  {path: 'listarEmpresas', component: EmpresasComponent, canActivate: [AuthGuard]},
  {path: 'listarClientes', component: ClientesComponent},
  {path: 'homePage', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'grafico', component: MyDashChartComponent, canActivate:[AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
