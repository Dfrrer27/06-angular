import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  genre: any[] = [ 'Masculino','Femenino' ];

  constructor( private fb: FormBuilder, private _userService: UserService, private router: Router, private _snackBar: MatSnackBar ) { }

  Form = this.fb.group({
    user: ['', Validators.required],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    genre: ['', Validators.required],
  })

  ngOnInit(): void {
  }

  addUser(){
    console.log(this.Form)

    const user: User = {
      user: this.Form.value.user!,
      name: this.Form.value.name!,
      lastName: this.Form.value.lastName!,
      genre: this.Form.value.genre!
    }
    console.log(user);

    this._userService.addUser(user);
    this.router.navigate(['/dashboard/users'])

    this._snackBar.open('El usuario fue agregado con exito!!','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    }) 
  }

}
