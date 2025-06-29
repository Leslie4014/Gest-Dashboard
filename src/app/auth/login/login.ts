import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { LoginRequest } from '../../shared/schemas/login-request.schema';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm!:FormGroup //investigar como hacer uno
  submitted=false

  constructor(private authService: AuthService, private fb: FormBuilder){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    });
  }
  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true
    if (this.loginForm.invalid){
      return;
    }

    let loginData: LoginRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.loggearse(loginData);
  }

  loggearse(data: LoginRequest){
    console.log(data)
    this.authService.login(data).subscribe({
      next: () =>{
        console.log('Login exitoso')
      },
      error: (err) =>{
        console.log('Error al iniciar sesion', err)
      }
    });
  }

}
