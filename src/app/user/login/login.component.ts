import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mouseoverLogin: any
  loginInvalid: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password).subscribe(
        (response) => {
          console.log(response);
          if (!response) {
            this.loginInvalid = true;
          } else {
            this.router.navigate(['/events'])
          }
        }
    )
  }

  cancel() {
    this.router.navigate(['events'])
  }
}
