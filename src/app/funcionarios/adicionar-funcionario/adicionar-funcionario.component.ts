import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-adicionar-funcionario',
  templateUrl: './adicionar-funcionario.component.html',
  styleUrls: ['./adicionar-funcionario.component.css']
})
export class AdicionarFuncionarioComponent implements OnInit {
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
labelCadastrar: string;

constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AdicionarFuncionarioComponent>) {
  this.labelClose = data.labelClose;
  this.labelCadastrar = data.labelCadastrar;
  this.modalTitle = data.title;
  console.log(data);
}

ngOnInit() {
}


}
