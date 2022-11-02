import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public loggedIn = false;
  user: any;
  book = new Book();

  

  constructor(private actRoute: ActivatedRoute, private loginService: LoginserviceService) { }

  ngOnInit(): void {

    this.loggedIn = this.loginService.isLoggedIn();
    this.user = localStorage.getItem("user");
    console.log("this is dash" + this.user);
  }
  searchBook() {

    this.loginService.createBook(this.book).subscribe
      (
        data => {
          console.log("Registered successfully");
          alert("Registered successfully");
          window.location.href = "/dashboard";
        },
        error => {

          console.log("Error while creating user");
          alert("Could not register, please try again");
        }

      )

  }

}
