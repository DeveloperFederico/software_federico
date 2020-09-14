import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserModel } from '../UserModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: UserModel[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAlluser().subscribe(data=>{
      this.users = data;
    });
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  }

  deleteUser(user: UserModel){
    
    this.userService.deleteuser(user.id).subscribe(data=>{
      console.log(data);
      this.getAllUsers();
    });
  }

  updateUser(user: UserModel){
    localStorage.removeItem("userId");
    localStorage.setItem("userId", user.id);
    this.router.navigate(['edit-user']);
  }

}
