import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthGuardService } from './service/auth.service';
import {MatDialog} from '@angular/material';
@Component({
    selector: 'app-login-register',
    templateUrl: './login-register.component.html',
    styleUrls: ['./login-register.component.scss'],
    providers: [AuthService, LoginService]
})
export class LoginRegisterComponent implements OnInit {
    loginForm: FormGroup;
    private user: SocialUser;
    private loggedIn: boolean;
    private isUser = false;
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
        private _authGuardService: AuthGuardService,
        private _biLoginService: LoginService,
        public dialog: MatDialog,
        private router: Router
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
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


    signInWithBI(user?: SocialUser): void {
        // console.log(this.loginForm.value);
        if (user) {
            this.loginForm.value.email = user.email;
            this.loginForm.value.password = user.id;
        }
        this._biLoginService.signAndRegistrationAuth('\'' + this.loginForm.value.email + '\'' + ',' + '\'' + this.loginForm.value.password + '\'').subscribe(res => {

            if (res[0].verified === 'True') {
                localStorage.removeItem('user');
                localStorage.setItem('user', res[0].message);
                if (this._authGuardService.login()) {
                    this.router.navigateByUrl('/apps/dashboards/analytics');
                } else {
                    this._authGuardService.logout();
                }
            }else {
                this.isUser = true;
            }

        });
        // this._biLoginService.postUser(this.loginForm.value.email).subscribe(res => {
        // console.log(JSON.parse(res[0].profile));            
        // });

    }

    signInWithGoogle(): void {
        this._authService.signIn(GoogleLoginProvider.PROVIDER_ID).then( user => {
            this.signInWithBI(user);
        });
    }

    signInWithFB(): void {
        this._authService.signIn(FacebookLoginProvider.PROVIDER_ID).then( user => {
            this.signInWithBI(user);
        });
    }


    openDialog(): void {
        const dialogRef = this.dialog.open(DialogContent);
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }


    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {        
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
}

@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: 'dialog-content.html',
  })
  // tslint:disable-next-line:component-class-suffix
  export class DialogContent {

  }
