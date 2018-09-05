import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { LoginRegisterService } from './service/login-register.service';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
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
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _LoginRegisterService: LoginRegisterService,
        private _authService: AuthService,
        private _biLoginService: LoginService,
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
        if (user){
            this.loginForm.value.email = user.email;
            this.loginForm.value.email = user.id;
        }
        this._biLoginService.signAndRegistrationAuth('\'' + this.loginForm.value.email + '\'' + ',' + '\'' + this.loginForm.value.password + '\'').subscribe(res => {
            // console.log(res[0]);
            if (res[0].verified === 'True') {
                this.router.navigateByUrl('/apps/dashboards/analytics');
            }
        });
        // this._biLoginService.postUser(this.loginForm.value.email).subscribe(res => {
            // console.log(JSON.parse(res[0].profile));            
        // });

    }

    signInWithGoogle(): void {
        this._authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInWithFB(): void {
        this._authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signInWithLinkedIn(): void {
        this._authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
        this._authService.signOut();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // this.signOut();
        this._authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            if (this.loggedIn) {                
                this.signInWithBI(user);
            }
        });

        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
}
