import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FieldConfig2 } from '../../dynamic-profile/field.interface';
import { Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider, AuthService, SocialUser } from 'angularx-social-login';
import { RegistrationFormService } from './registration-form.service';
import { Info } from './info-model';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  providers: [RegistrationFormService]
})
export class RegistrationFormComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  public _info: Info;
  P_info_1: FieldConfig2[] = [
    {
      labelValue: 'Email *',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-text',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter your email Address',
      type: 'input',
      label: 'Email *',
      name: 'Email *',
      value: '',
      inputType: 'email',
      validations: [
        {
          name: 'required',
          validator: Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          message: 'please enter a valid email address'
        }
      ]
    },
    {
      labelValue: 'First name *',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-text',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter your First Name',
      type: 'input',
      label: 'First name *',
      name: 'First name *',
      value: '',
      inputType: 'text',
      validations: [
        {
          name: 'required',
          validator: Validators.minLength(3),
          message: 'please enter first name'
        }
      ]
    },
    {
      labelValue: 'Middle name',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-text',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter your Middle Name (Optional)',
      type: 'input',
      label: 'Middle name',
      name: 'Middle name',
      value: '',
      inputType: 'text'
    },
    {
      labelValue: 'Last name *',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-text',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter your Last Name',
      type: 'input',
      label: 'Last name *',
      name: 'Last name *',
      value: '',
      inputType: 'text',
      validations: [
        {
          name: 'required',
          validator: Validators.minLength(3),
          message: 'please enter last name'
        }
      ]
    },
    {
      labelValue: 'Gender *',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-radio',
      options: [
        'Female',
        'Male'
      ],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: '',
      type: 'radiobutton',
      label: 'Gender *',
      name: 'Gender *',
      value: '',
      inputType: 'bi-input-radio',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Select your Gender is required'
        }
      ]
    },
    {
      labelValue: 'Date of birth *',
      icon: '',
      defaultInputValue: '1999-06-15',
      componentType: 'bi-input-date',
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: '',
      type: 'date',
      label: 'Date of birth *',
      name: 'Date of birth *',
      value: '',
      inputType: 'date',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'please enter your date of birth is required'
        }
      ]
    },
    {
      labelValue: 'Select country of residency *',
      icon: 'sql',
      defaultInputValue: '',
      componentType: 'bi-select',
      options: ['Colombia', 'Spain', 'E.U'],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Select Country',
      type: 'select',
      label: 'Select country of residency *',
      name: 'Select country of residency *',
      value: '',
      inputType: 'bi-select',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Select your country of residency'
        }
      ]
    }, {
      labelValue: 'Mailing street address 1 *',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-text',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Address 1',
      type: 'input',
      label: 'Mailing street address *',
      name: 'Mailing street address *',
      value: '',
      inputType: 'text',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Please provide Mailing Address'
        }
      ]
    }, {
      labelValue: 'Mailing street address 2',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-text',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Address 2',
      type: 'input',
      label: 'Mailing street/#apto/unit',
      name: 'Mailing street/#apto/unit',
      value: '',
      inputType: 'text'
    }, {
      labelValue: 'Select State/Province *',
      icon: 'sql',
      defaultInputValue: '',
      componentType: 'bi-select-input',
      options: [
        'Catalunia',
        'Valle',
        'California'

      ],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'State/Province',
      type: 'select',
      label: 'Select State/Province *',
      name: 'Select State/Province *',
      value: '',
      inputType: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'please select your state/province of residency'
        }
      ]
    },
    {
      labelValue: 'Zip Code *',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-number',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'ZipCode',
      type: 'input',
      label: 'Zip Code *',
      name: 'Zip Code *',
      value: '',
      inputType: 'text',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'zip code is required'
        }
      ]
    },
    {
      labelValue: 'Cell Phone',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-text',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: 'U.S./Canada can be used to receive our survey texts',
      placeHolder: 'Enter your Cell Phone Number',
      type: 'input',
      label: 'Cell Phone *',
      name: 'Cell Phone *',
      value: '',
      inputType: 'text',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Service time is required'
        }
      ]
    },
    {
      labelValue: 'Specify your profession or occupation',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-dropdown',
      options: [
        'Not related to Health Care',
        'Physician/Doctor of Medicine (MD, DO)',
        'Physician Assistant (PA)',
        'Nurse',
        'Pharmacist',
        'Pharmacist Technician',
        'Dentist',
        'Optometrist',
        'Veterinarian',
        'Allied Health Care Profession or Occupation'
      ],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Select Profession/Occupation',
      type: 'select',
      label: 'Specify your profession or occupation',
      name: 'Specify your profession or occupation',
      value: '',
      inputType: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Profession is required'
        }
      ]
    }
  ];
  fieldData2 = [
    {
      item: this.P_info_1,
      name: ''
    }
  ];
  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   */
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _authService: AuthService,
    private _RegistrationFormService: RegistrationFormService
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
  fieldOBJ = this.fieldData2;

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  countChange(event): void {
    this._info = new Info();
    this._info.email =  (event['Email *'] ? event['Email *'] :  this.user.email),
    this._info.firstName = (event['First name *'] ? event['First name *'] : this.user.firstName);
    this._info.middleName = event['Middle name'];
    this._info.lastName = (event['Last name *'] ? event['Last name *'] : this.user.lastName);
    this._info.gender = event['Gender *'];
    this._info.dateBirth = event['Date of birth *'];
    this._info.countryRes = event['Select country of residency *'];
    this._info.mailStreetAdd1 = event['Mailing street address *'];
    this._info.mailStreetAdd2 = event['Mailing street/#apto/unit'];
    this._info.state = event['Select State/Province *'];
    this._info.zip = event['Zip Code *'];
    this._info.cell = event['Cell Phone *'];
    this._info.profession = event['Specify your profession or occupation'];
    this._info.confirm = 'true';
    this._RegistrationFormService.postInfo(this._info).subscribe(result => {
      console.log(result);      
     });
  }

  signInWithGoogle(): void {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      this.setFieldsWithSocialMedia(user);
    });

  }

  signInWithFB(): void {
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      this.setFieldsWithSocialMedia(user);
    });

  }

  signOut(): void {
    this._authService.signOut();
  }

  setFieldsWithSocialMedia(user): void {
    this.fieldOBJ[0].item[0].value = user.email;
    this.fieldOBJ[0].item[1].value = user.firstName;
    this.fieldOBJ[0].item[3].value = user.lastName;
  }
  /**
   * On init
   */
  ngOnInit(): void {
    // this.signOut();
    this._authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 20);
  }
}

        // {
        //   'names': 'Not related to Health Care',
        //   'values': 'NonHCP'
        // },
        // {
        //   'names': 'Physician/Doctor of Medicine (MD, DO)',
        //   'values': 'MD_PA_lic_Info'
        // },
        // {
        //   'names': 'Physician Assistant (PA)',
        //   'values': 'MD_PA_lic_Info'
        // },
        // {
        //   'names': 'Nurse',
        //   'values': 'Nurse_Lic_Info'
        // },
        // {
        //   'names': 'Pharmacist',
        //   'values': 'Pharm_Lic_Info'
        // },
        // {
        //   'names': 'Pharmacist Technician',
        //   'values': 'Pharm_Lic_Info'
        // },
        // {
        //   'names': 'Dentist',
        //   'values': 'OTHER_HCP'
        // },
        // {
        //   'names': 'Optometrist',
        //   'values': 'OTHER_HCP'
        // },
        // {
        //   'names': 'Veterinarian',
        //   'values': 'OTHER_HCP'
        // },
        // {
        //   'names': 'Allied Health Care Profession or Occupation',
        //   'values': 'OTHER_HCP'
        // }
        // ,
