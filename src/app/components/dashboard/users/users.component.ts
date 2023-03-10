import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers: User[] = [];

  displayedColumns: string[] = ['user', 'name', 'lastName', 'genre', 'actions'];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private _userService: UserService, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(index: number) {
    console.log(index);
    
    this._userService.deleteUser(index);
    this.loadUsers();

    this._snackBar.open('El usuario fue eliminado con exito','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    }) 
  }

  loadUsers(){
    this.listUsers = this._userService.getUser();
    this.dataSource = new MatTableDataSource(this.listUsers);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
