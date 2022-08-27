import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {}

  onCadastro(cadastro: {
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    sexo: string;
    birth: string;
  }) {
    console.log(cadastro);
    this.http.post('http://localhost:3000/cadastros', cadastro)
    .subscribe((res) => {
      console.log(res);
    });
  }
}
