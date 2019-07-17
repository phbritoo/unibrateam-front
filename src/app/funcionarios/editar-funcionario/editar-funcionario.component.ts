import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {
// validacao de email
emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);
// botao de limpar
func_nome = '';
func_tel = '';
func_liquido = '';
func_bruto = '';
func_desconto = '';
func_cpf = '';

labelClose: string;
modalTitle: string;
labelEditar: string;

constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditarFuncionarioComponent>) {
  this.labelClose = data.labelClose;
  this.labelEditar = data.labelEditar;
  this.modalTitle = data.title;
  console.log(data);
}

ngOnInit() {
}

}

