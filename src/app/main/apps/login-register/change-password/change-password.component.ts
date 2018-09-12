import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  loginForm: FormGroup;
  private user: SocialUser;
  private loggedIn: boolean;
  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
      private _fuseConfigService: FuseConfigService,
      private _formBuilder: FormBuilder,
      private _authService: AuthService,
      private router: Router) {
      // Configure the layout
      this._fuseConfigService.config = {
          layout: {
              navbar: {
                  hidden: false
              },
              toolbar: {
                  hidden: false
              },
              footer: {
                  hidden: true
              },
              sidepanel: {
                  hidden: true
              }
          }
      };
  }


  resetPassword(): void {
    // Validation settings
    if (this.loginForm.value['newPassword'].length < 6) {
      this.loginForm.controls['newPassword'].setErrors({ 'required': true });
    }
    if (this.loginForm.value['oldPassword'] === '123456') {
      this.loginForm.controls['oldPassword'].setErrors({ 'wrongdpassword': true });
    }
    if (this.loginForm.value['newPassword'] !== this.loginForm.value['confirmPassword']) {
      this.loginForm.controls['confirmPassword'].setErrors({ 'required': true });
    }
    if (this.loginForm.value['newPassword'] === this.loginForm.value['oldPassword']) {
      this.loginForm.controls['newPassword'].setErrors({ 'same': true });
      this.loginForm.controls['oldPassword'].setErrors({ 'same': true });
    }

    this.router.navigateByUrl('/apps/login/successful-password-reset');
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
      this._authService.authState.subscribe((user) => {
          this.user = user;
          this.loggedIn = (user != null);
      });
      
      this.loginForm = this._formBuilder.group({
          email: [{value: 'cvega@brandinstitute.com', disabled: true}, [Validators.required, Validators.email]],
          oldPassword: ['', Validators.required],
          newPassword: ['', Validators.required],
          confirmPassword: ['', Validators.required]
      });
  }
}
