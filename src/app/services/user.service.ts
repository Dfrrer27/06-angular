import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  listUsers: User[] = [
    {user: 'JFulano', name: 'John', lastName: 'Perez', genre: 'Masculino'},
    {user: 'Sultano', name: 'Standford', lastName: 'Ferrer', genre: 'Masculino'},
    {user: 'MMirror', name: 'Mariana', lastName: 'Flores', genre: 'Femenino'},
    {user: 'Frella', name: 'Fiorella', lastName: 'Fernandez', genre: 'Femenino'},
    {user: 'Bgonzales', name: 'Brian', lastName: 'Gonzales', genre: 'Masculino'},
    {user: 'LuRivera', name: 'Luciana', lastName: 'Rivera', genre: 'Femenino'},
    {user: 'RRamos', name: 'Renzo', lastName: 'Ramos', genre: 'Masculino'},
    {user: 'Steer', name: 'Stella', lastName: 'Espinoza', genre: 'Femenino'},
    {user: 'Gberto', name: 'Alberto', lastName: 'Garcia', genre: 'Masculino'},
    {user: 'Rmero', name: 'Rosmery', lastName: 'Romero', genre: 'Femenino'},
  ];

  constructor() { }

  getUser(){
    return this.listUsers.slice();
  }

  deleteUser(index: number){
    this.listUsers.splice(index, 1);
  }

  addUser(user: User){
    this.listUsers.unshift(user);
  }

}
