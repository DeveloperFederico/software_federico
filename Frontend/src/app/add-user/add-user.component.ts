import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../user.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: 'add-user.component.html',
  styleUrls: ['add-user.component.css']
})

export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      complete_name: ['', Validators.required],
      funcions: ['', Validators.required],
     
    });
  }

  

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.userService.adduser(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}
