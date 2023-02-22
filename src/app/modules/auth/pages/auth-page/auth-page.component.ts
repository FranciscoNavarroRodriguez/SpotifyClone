import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit{

  formLogin: FormGroup = new FormGroup({})
  msgError: boolean = false

  constructor(private _fb: FormBuilder, private authService: AuthService, private cookieService: CookieService, private router: Router){}

  
  ngOnInit(): void {
    
    this.formLogin = this._fb.group(
      {
        email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
      }
    )
  }

  // sendLogin(): void{
  //   const { email, password} = this.formLogin.value
  //   this.authService.sendCredentials(email, password).subscribe({
  //     //Cuando la peticion post es exitosa (email y password correctos)
  //     next: (response) => {
  //       const { tokenSession } = response
  //       console.log(`Sesion iniciada correctamente`, tokenSession)
  //       this.cookieService.set('token', tokenSession, 4, '/')
  //       this.router.navigate(['/tracks'])
  //     },
  //     //Cuando la peticion post da error (email o password incorrectos)
  //     error: (error) => {
  //       console.log(`Error en el inicio de sesion:`, error.status);
  //       this.msgError = true
  //     }
  //   })
  // }

  sendLogin(): void{
    const { email, password } = this.formLogin.value

    if(email === 'test@test.com' && password === '12345678' ){
      this.cookieService.set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', 4, '/')
      this.router.navigate(['/tracks'])
    } else {
      console.log(email,password)
      this.msgError = true
    }
  }

}
