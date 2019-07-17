import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { DeletarClienteComponent } from './deletar-cliente/deletar-cliente.component';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit{
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = [
    'nome',
    'cpf',
    'email',
    'dataNasc',
    'tel',
    'status',
    'acao'
  ];

  @ViewChild(MatPaginator)paginator: MatPaginator;
  @ViewChild(MatSort)sort: MatSort;

  clientes: Cliente[];

  // Modal Cadastrar
  constructor(private service: ClientesService, public dialog: MatDialog) {}


  ngOnInit() {
    this.service.getClientes().subscribe(
      (data) => {
        this.dataSource.data = data || []});

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // //filtro
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
      dialogConfig.width = '500px';
      dialogConfig.data = {
        id: 1,
        title: 'Cadastrar Cliente',
        labelCadastrar: "Cadastrar",
        labelClose: "X"
      };

      const dialogRef = this.dialog.open(AdicionarClienteComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log('Fechando o Dialog');
        console.log(result);
      });
    }

    closeAdd(): void {
      const dialogConfig = new MatDialogConfig();
      const dialogRef = this.dialog.open(AdicionarClienteComponent, dialogConfig);
      dialogRef.close();
    }
    // FIM DO MODAL CADASTRAR

  // Modal Editar
  openEdit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.data = {
      id: 1,
      title: 'Alterar Cliente',
      labelEditar: "Alterar",
      labelClose: "X"
    };

    const dialogRef = this.dialog.open(EditarClienteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Fechando o Dialog');
      console.log(result);
    });
  }

  closeEdit(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(EditarClienteComponent, dialogConfig);
    dialogRef.close();
  }

  // FIM DO MODAL Editar

  //  Modal Delete
   openDelete(cliente) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.data = {
      id: 1,
      title: 'Deseja excluir esse cliente?',
      labelDeletar: "Deletar",
      labelClose: "X"
    };

    const dialogRef = this.dialog.open(DeletarClienteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Fechando o Dialog');
      console.log(result);
    });
  }

  closeDelete(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(DeletarClienteComponent, dialogConfig);
    dialogRef.close();
  }

  // FIM DO MODAL delete
}
