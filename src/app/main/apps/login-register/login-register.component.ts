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
import { trigger, transition, useAnimation, state, style} from '@angular/animations';
import { shake } from 'ng-animate';
@Component({
    selector: 'app-login-register',
    templateUrl: './login-register.component.html',
    styleUrls: ['./login-register.component.scss'],
    providers: [AuthService, LoginService],
    animations: [
        trigger('bounce',
         [   transition('nobounce => bounce',  useAnimation(shake)),
             transition('bounce => nobounce',  useAnimation(shake, {
            params: { timing: 0.2, delay: 0 }
         })),
        ])
      ],
})

export class LoginRegisterComponent implements OnInit {
    loginForm: FormGroup;
    private user: SocialUser;
    private loggedIn: boolean;
    public isUser = false;
    public harlemShake = true;
    private myTiming = 0;
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
        this.harlemShake = false;
        // console.log(this.loginForm.value);
        if (user) {
            this.loginForm.value.email = user.email;
            this.loginForm.value.password = user.id;
        }
        this._biLoginService.signAndRegistrationAuth('\'' + this.loginForm.value.email + '\'' + ',' + '\'' + this.loginForm.value.password + '\'').subscribe(res => {

            if (res[0].verified === 'True') {
                localStorage.removeItem('user');
                localStorage.setItem('user', res[0].message);
                const  ocupattion: any = JSON.parse(res[0].message);
                localStorage.setItem('userName', this.loginForm.value.email);
                ocupattion.forEach(element => {
                    if (element.question === 'Specify your profession or occupation') {                        
                        localStorage.setItem('profession', element.answer);
                    }
                });
                if (this._authGuardService.login()) {
                    this.router.navigateByUrl('/apps/dashboards/analytics');
                } else {
                    this._authGuardService.logout();
                }
            }else {
                this.harlemShake = true;
                this.myTiming = 1;
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


  interface FsDocument extends HTMLDocument {
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    msExitFullscreen?: () => void;
    mozCancelFullScreen?: () => void;
  }
  interface FsDocumentElement extends HTMLElement {
    msRequestFullscreen?: () => void;
    mozRequestFullScreen?: () => void;
  }

@Component({
    selector: 'full-screen'
  })
  // tslint:disable-next-line:component-class-suffix
  export class FullScreen implements OnInit {
    ngOnInit(): void {
        this.setFullScreen(true);
    }

    isFullScreen(): boolean {
        const fsDoc = <FsDocument> document;
      
        return !!(fsDoc.fullscreenElement || fsDoc.mozFullScreenElement || fsDoc.webkitFullscreenElement || fsDoc.msFullscreenElement);
      }

      toggleFullScreen(): void {
        const fsDoc = <FsDocument> document;
      
        if (!this.isFullScreen()) {
          const fsDocElem = <FsDocumentElement> document.documentElement;
      
          if (fsDocElem.requestFullscreen) {
            fsDocElem.requestFullscreen();
          }
          else if (fsDocElem.msRequestFullscreen) {
            fsDocElem.msRequestFullscreen();
               }
          else if (fsDocElem.mozRequestFullScreen) {
            fsDocElem.mozRequestFullScreen();
               }
          else if (fsDocElem.webkitRequestFullscreen) {
            fsDocElem.webkitRequestFullscreen();
               }
        }
        else if (fsDoc.exitFullscreen) {
          fsDoc.exitFullscreen();
             }
        else if (fsDoc.msExitFullscreen) {
          fsDoc.msExitFullscreen();
             }
        else if (fsDoc.mozCancelFullScreen) {
          fsDoc.mozCancelFullScreen();
             }
        else if (fsDoc.webkitExitFullscreen) {
          fsDoc.webkitExitFullscreen();
             }
      }

      setFullScreen(full: boolean): void {
        if (full !== this.isFullScreen()) {
          this.toggleFullScreen();
        }
      }
    
  }
