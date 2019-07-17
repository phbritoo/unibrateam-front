import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialogConfig, MatDialog} from '@angular/material';
import { AdicionarFuncionarioComponent } from './adicionar-funcionario/adicionar-funcionario.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { DeletarFuncionarioComponent } from './deletar-funcionario/deletar-funcionario.component';
import { Funcionario } from './funcionario';
import { FuncionariosService } from './funcionarios.service';
@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'bruto', 'liquido', 'desconto', 'acao'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  funcionarios: Funcionario[];
  constructor(private service: FuncionariosService, public dialog: MatDialog) {}

   ngOnInit() {
    this.service.getFuncionarios().subscribe(
      (data) => {
        this.dataSource.data = data || []})

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    openAdd() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '590px';
      dialogConfig.data = {
        id: 1,
        title: 'Cadastrar Funcionario',
        labelCadastrar: 'Cadastrar',
        labelClose: 'X'
      };
      const dialogRef = this.dialog.open(AdicionarFuncionarioComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog was closed');
        console.log(result);
      });
    }

    closeAdd(): void {
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(AdicionarFuncionarioComponent, dialogConfig);
      dialogRef.close();
    }

    openEdit() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '590px';
      dialogConfig.data = {
        id: 2,
        title: 'Alterar Funcionario',
        labelEditar: 'Alterar',
        labelClose: 'X'
      };
      const dialogRef = this.dialog.open(EditarFuncionarioComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog was closed');
        console.log(result);
      });
    }

    closeEdit(): void {
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(EditarFuncionarioComponent, dialogConfig);
      dialogRef.close();
    }

    openDelete() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '500px';
      dialogConfig.data = {
        id: 3,
        title: 'Deseja excluir Funcionario?',
        labelDeletar: 'Deletar',
        labelClose: 'X'
      };
      const dialogRef = this.dialog.open(DeletarFuncionarioComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog was closed');
        console.log(result);
      });
    }
    closeDelete(): void {
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(DeletarFuncionarioComponent, dialogConfig);
      dialogRef.close();
    }

}





