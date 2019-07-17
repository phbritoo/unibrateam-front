import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-adicionar-empresa',
  templateUrl: './adicionar-empresa.component.html',
  styleUrls: ['./adicionar-empresa.component.css']
})
export class AdicionarEmpresaComponent implements OnInit {
  // validacao de email
emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);

// botao de limpar
nome = '';
endereco = '';
numero = '';
cidade = '';
bairro = '';
cep = '';
uf = '';
unideade = '';
andar = '';

modalTitle: string;
labelLogin: string;
labelClose: string;

constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AdicionarEmpresaComponent>) {
  this.modalTitle = data.title;
  this.labelLogin = data.labelLogin;
  this.labelClose = data.labelClose;
  console.log(data)
}

ngOnInit() {
}

// botão de voltar
onNoClick(): void {
  this.dialogRef.close();
}

}
