import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-deletar-cliente',
  templateUrl: './deletar-cliente.component.html',
  styleUrls: ['./deletar-cliente.component.css']
})
export class DeletarClienteComponent{




  //Open Modal
  modalTitle: string;
  labelDeletar: string;
  labelClose: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.labelDeletar = data.labelDeletar;
    this.labelClose = data.labelClose;
    console.log(data);
  }


  onConfirmDelete(){}

  onDeclineDelete(){

  }
}
