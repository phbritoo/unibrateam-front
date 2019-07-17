import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent implements OnInit{
  productForm: FormGroup;
  isLoadingResults = false;

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
  labelCadastrar: string;
  labelClose: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router,
   private service: ClientesService, private formBuilder: FormBuilder) {
    this.modalTitle = data.title;
    this.labelCadastrar = data.labelCadastrar;
    this.labelClose = data.labelClose;
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({

    'cli_nome' : [null, Validators.required],
    'cli_cpf' : [null, [Validators.required, Validators.minLength(11)]],
    'cli_email' : [null, Validators.required],
    'cli_dataNasc' : [null, Validators.required],
    'cli_tel' : [null, Validators.required],
    'cli_status' : [null, Validators.required],
    });
  }

  addCliente(form: NgForm) {
    this.isLoadingResults = true;
    // this.service.addCliente(form).subscribe();
    console.log('chegou!');

  }
}
