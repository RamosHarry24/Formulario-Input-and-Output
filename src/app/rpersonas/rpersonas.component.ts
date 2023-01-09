import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-rpersonas',
  templateUrl: './rpersonas.component.html',
  styleUrls: ['./rpersonas.component.css']
})

export class RpersonasComponent {

@Input() btnColor !: string;
@Output() newItenEvent = new EventEmitter<string>();
  
  onEnviar(nombre: string,dni: string,estado: string){
    let objUser = {
      "nombre":nombre,
      "dni":dni,
      "estado_civil":estado
    }
    this.newItenEvent.emit(JSON.stringify(objUser));
  }

}
