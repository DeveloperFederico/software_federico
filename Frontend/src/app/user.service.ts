import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000/";

  getAlluser(){
    return this.http.get<UserModel[]>(this.baseurl + 'users');
  }

  getuserById(id: string){
    return this.http.get<UserModel>(this.baseurl + 'users' + '/' + id);
  }

  adduser(user: UserModel){
    return this.http.post(this.baseurl + 'users', user);
  }

  deleteuser(id: string){
    return this.http.delete(this.baseurl + 'users' + '/' + id);
  }

  updateuser(user: UserModel){
    return this.http.put(this.baseurl + 'users' + '/' + user.id, user);
  }
}
