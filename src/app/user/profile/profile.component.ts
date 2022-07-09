import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Toastr, TOSTER_TOKEN} from "../../common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  private firstName!: FormControl<string | null>;
  private lastName!: FormControl<string | null>;

  constructor(private authService: AuthService,
              private router: Router,
              @Inject(TOSTER_TOKEN) private toastr: Toastr,
             ) {}

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName,
      [Validators.required,
        Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName,
      [Validators.required,
        Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({firstName: this.firstName, lastName: this.lastName});
  }

  handleSave(value: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(value.firstName, value.lastName).subscribe(() => {
          this.toastr.success('Profile saved')
          this.router.navigate(['events'])
        }
      );
    }
  }

  handleCancel() {
    this.router.navigate(['events']);
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateMessage(field: string, error: string) {
    if (field === 'firstName')
      return !this.validateFirstName() && this.profileForm?.controls?.[field]?.errors?.[error]
    else
      return !this.validateLastName() && this.profileForm?.controls?.[field]?.errors?.[error]

  }

  handleSignout() {
    this.authService.signOut()
    this.router.navigate(['/events'])
  }
}
