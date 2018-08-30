import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialUser, AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [AuthService]
})
export class ContactUsComponent implements OnInit {
  loginForm: FormGroup;
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {
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
  contactUs(): void {
    console.log('contact us');
    this.router.navigateByUrl('/apps/login/thankyou');
  }
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: [{value: 'cvega@brandinstitute.com', disabled: true}, [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
}

