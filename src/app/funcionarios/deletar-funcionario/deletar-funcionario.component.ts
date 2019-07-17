import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletar-funcionario',
  templateUrl: './deletar-funcionario.component.html',
  styleUrls: ['./deletar-funcionario.component.css']
})
export class DeletarFuncionarioComponent implements OnInit {

  labelClose: string;
  modalTitle: string;
  labelDeletar: string;

constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DeletarFuncionarioComponent>) {

  this.labelClose = data.labelClose;
  this.labelDeletar = data.labelDeletar;
  this.modalTitle = data.title;
  console.log(data);
}

ngOnInit() {
}

}
