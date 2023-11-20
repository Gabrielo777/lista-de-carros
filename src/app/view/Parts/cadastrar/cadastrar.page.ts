import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'src/app/common/alert';
import { GoBackPage } from 'src/app/common/goBackPage';
import { Part } from 'src/app/model/entities/part';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
tipo: any;
genero: any;
lancamento: any;
distribuidora: any;
cadastro() {
throw new Error('Method not implemented.');
}
  registerForm!: FormGroup;
  user: any;
nome: any;

  constructor(private router: Router, private firebase: FirebaseService, private alert: Alert, private goBack: GoBackPage, private auth: AuthService, private builder: FormBuilder){
    this.user = this.auth.getUserLogged();
    this.registerForm = new FormGroup({
      nome: new FormControl(''),
      ano: new FormControl(''),
      montadora: new FormControl(''),
      tipocarro: new FormControl(''),
      tracao: new FormControl(''),
      imagem: new FormControl('')
    });
  }

  ngOnInit() {
    this.registerForm = this.builder.group({
      nome: ['', [Validators.required]],
      ano: ['', [Validators.required, Validators.minLength(2)]],
      montadora: ['', [Validators.required, Validators.minLength(2)]],
      tipocarro: ['', [Validators.required]],
      tracao: ['', [Validators.required]],
      imagem: ['', [Validators.required]]
    })
  }
  uploadFile(event: any) {
  const imagem = event.target.files;

  if (imagem && imagem.length > 0) {
    this.registerForm.patchValue({ imagem: imagem });
  }
}
   register(){
    if(this.registerForm.valid){
      const new_part: Part = new Part(
        this.registerForm.value.nome,
        this.registerForm.value.ano,
        this.registerForm.value.montadora
      );
      new_part.tipocarro = this.registerForm.value.tipocarro;
      new_part.tracao = this.registerForm.value.tracao;
      new_part.uid = this.user.uid;
  
      if(this.registerForm.value.imagem){
        this.firebase.uploadImage(this.registerForm.value.imagem, new_part)?.then(() =>{
          this.router.navigate(['/home']);
        });
      }else{
        this.firebase.registerPart(new_part).then(() => this.router.navigate(['/home'])).catch((error) => {
          console.log(error);
          this.alert.presentAlert('Erro', 'Erro ao salvar as partes!');
        });
      }
    }else{
      this.alert.presentAlert('Erro!', 'Todos os campos são obrigatórios!');
    }
  }
  goBackPage(){
    this.goBack.goBackPage();
  }
}
