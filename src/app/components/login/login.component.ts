import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  loading = false;

  constructor( private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router ) { }

  Form = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  })

  // view = this.Form.valueChanges.subscribe(values =>  console.log({values}));

  ngOnInit(): void {
  }
  
  login() {
    const user = this.Form.value.user;
    const password = this.Form.value.password;
    
    if(user == 'dferrer' && password == '4505811'){
      //Redireccionamos al dashboard
      this.fakeLoading();
      this.Form.reset();
    } else {
      // Mostramos mensaje de error
      this.errorMessage();
      this.Form.reset();
    }
    
  }
  
  errorMessage() { 
    this._snackBar.open('El usuario o contraseña ingresado son invalidos','',{
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    }) 
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      //Redireccionamos al dashboard
      this.router.navigate(['dashboard']);
    }, 1500);
  }  
}
