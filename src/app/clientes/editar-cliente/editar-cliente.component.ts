import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent{
  // validacao de email
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

 // botao de limpar
 cli_nome = '';
 cli_tel = '';
 cli_email = '';
 cli_dataNasc = '';
 cli_status = '';
 cli_cpf = '';

  //Open Modal
  modalTitle: string;
  labelEditar: string;
  labelClose: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.labelEditar = data.labelEditar;
    this.labelClose = data.labelClose;
    console.log(data);
  }
}
