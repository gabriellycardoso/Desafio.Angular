import { NgIfContext } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { CriarConta } from '../models/criar-conta.model';
import { SalvarService } from '../services/salvar.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
form!: FormGroup
usuariosGeral!: CriarConta[]
usuarioId!: number
verificarEditar: boolean = false

  constructor(private formBuilder: FormBuilder,
    private salvarClienteService: SalvarService){ 
    }

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        nome: new FormControl (''),
        email: new FormControl (''),
        telefone: new FormControl ('')
        
      }); this.lerDadosUsuario ()
    }
    lerDadosUsuario(){
      this.salvarClienteService.lerClientes().subscribe({
        next: (clientes: CriarConta[]) => {this.usuariosGeral= clientes
          console.log(clientes);
        },
        error: () => {
          console.log("erro")
        }
      })
    }
    excluirDadosUsuario(usuarioId: number) {
      this.salvarClienteService.excluirCliente(usuarioId).subscribe({
        next: () =>  {this.lerDadosUsuario ()
          console.log("Certo!Você excluiu");
        },
        error: () => {
          console.log("erro")
        }
       
      });
    }
    salvarDadosUsuario() {
      const id = (this.usuariosGeral[(this.usuariosGeral.length) - 1].id)+1
    const nome = this.form.controls['nome'].value
    const email = this.form.controls['email'].value
    const telefone = this.form.controls['telefone'].value
    
    const usuario: CriarConta = { 
      id:id,
      nome:nome, 
      email:email, 
      telefone:telefone 
    }
    console.log(usuario)
    this.salvarClienteService.salvarCliente(usuario).subscribe({
      next:()=>{
        console.log('salvou');
        this.lerDadosUsuario()
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'success',
          timer: 5000,
          title: 'Você foi Cadastrado'
        })
      },
      error:()=>{
        console.log('erro salvarUsuario');
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'error',
          timer: 5000,
          title: 'Erro ao se Cadastrar'
        })
      }
    })
  }
  editarDadosUsuario(){
    const id = (this.usuariosGeral[(this.usuariosGeral.length) - 1].id)+1
      const nome = this.form.controls['nome'].value
      const email = this.form.controls['email'].value
      const telefone = this.form.controls['telefone'].value
    
      const usuario:CriarConta = { 
        id:id,
        nome:nome, 
        email:email, 
        telefone:telefone 
      }
      this.salvarClienteService.editarUsuario(usuario).subscribe({
        next:()=>{
          console.log('deu certo');
          this.lerDadosUsuario
        },
        error:()=>{
          console.log('erro editar');
          
        }
      })
     }
  
     EditarCliente1(){
      const id = this.usuarioId
      const nome = this.form.controls["nome"].value;
      const email = this.form.controls["email"].value;
      const telefone = this.form.controls["telefone"].value;
  
      const usuario: CriarConta = {id:id, nome:nome, email:email, telefone:telefone}
  
      this.salvarClienteService.editarUsuario(usuario).subscribe({
        next: () => {
        console.log("editou");
          
          this.lerDadosUsuario()
        },
        error: () => {
          console.log("erro");
          
        }
      })
      this.verificarEditar = false
      this.form.reset()
    }
  
    EditarCliente2(itemUsuario: CriarConta){
      this.usuarioId = itemUsuario.id
      this.form.controls["nome"].setValue(itemUsuario.nome)
      this.form.controls["email"].setValue(itemUsuario.email)
      this.form.controls["telefone"].setValue(itemUsuario.telefone)
      this.verificarEditar = true
           Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            icon: 'info',
            timer: 6000,
            title: 'Você esta editando'
  })
    }
}


