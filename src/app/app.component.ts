import { createAttribute, createComponent } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Formulario } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario';
  pergunta = null;
  respCerta = null;
  respErradas = [];
  alter1 = null;
  alter2 = null;
  perguntas=[];
  num = 1;
  salvar(){
    this.respErradas.push(this.alter1);
    this.respErradas.push(this.alter2);
    const perg = new Formulario(this.pergunta,this.respCerta,this.respErradas);
    this.perguntas.push(perg);
  }
  cancelar(){
    this.pergunta = null;
    this.respCerta = null;
    this.alter1 = null;
    this.alter2 = null;
  }
  addAlter(){
    var newAlter = null;
    let f = document.querySelector("#inputs");
    let a = document.createElement('div');
    let check = document.createElement('input');
    let i = document.createElement('input');
    let x = document.createElement('label');
    check["type"]="radio";
    check["name"]="alternativas";
    x["textContent"]=" alternativa "+this.num;
    a["className"]="form-group";
    i["className"]="form-control";
    i["name"]="newAlter";
    a.appendChild(check);
    a.appendChild(x);
    a.appendChild(i);
    f.appendChild(a);
    this.num+=1;
    //console.log(f);
  }
}
