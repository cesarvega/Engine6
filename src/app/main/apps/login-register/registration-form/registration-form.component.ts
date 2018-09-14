import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FieldConfig2 } from '../../dynamic-profile/field.interface';
import { Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider, AuthService, SocialUser } from 'angularx-social-login';
import { RegistrationFormService } from './registration-form.service';
import { Info } from './info-model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  providers: [RegistrationFormService]
})
export class RegistrationFormComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  private counter = 0;
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
          name: 'pattern',
          validator: Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          message: 'please enter a valid email address'
        },
        {
          name: 'required',
          validator: Validators.required,
          message: 'please enter an email address'
        }
      ]
    },
    {
      labelValue: 'password *',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-text',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter your password',
      type: 'input',
      label: 'Password *',
      name: 'Password *',
      value: '',
      inputType: 'password',
      validations: [     
        {
          name: 'min',
          validator:  Validators.minLength(6),
          message: 'please enter 6 characters minimun'
        }
      ]
    },
    {
      labelValue: 'confirm password *',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-text',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter your confirm password',
      type: 'input',
      label: 'confirm password *',
      name: 'confirm password *',
      value: '',
      inputType: 'password',
      validations: [     
        {
          name: 'required',
          validator: Validators.required,
          message: 'password not matching'
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
          validator: Validators.required,
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
          validator: Validators.required,
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
      labelValue: 'Select preferred payment method *',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-input-radio',
      options: [
        'Paypal',
        'Check'
      ],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: '',
      type: 'radiobutton',
      label: 'Select preferred payment method *',
      name: 'Select preferred payment method *',
      value: '',
      inputType: 'bi-input-radio',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'please select payment method is required'
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
      // tslint:disable-next-line:max-line-length
      options: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire (Ivory Coast)', 'Croatia (Hrvatska)', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea (North)', 'Korea (South)', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand (Aotearoa)', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'S. Georgia S. Sandwich Isls.', 'Saint Kitts Nevis', 'Saint Lucia', 'Vincent the Grenadines', 'Samoa', 'San Marino', 'Sao Tome Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovak Republic', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City (Holy See)', 'Venezuela', 'Viet Nam', 'Virgin (British)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Zaire', 'Zambia', 'Zimbabwe', 'Zimbabwe' ],
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
      // tslint:disable-next-line:max-line-length
      options: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated states of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Lousiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
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
      label: 'Cellphone *',
      name: 'Cellphone *',
      value: '',
      inputType: 'text',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'cellphone number is required'
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
    private _loginService: LoginService,
    private _route: Router,
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

  countChange(event): void {
    this._info = new Info();
    this._info.email = event['Email *'] ? event['Email *'] : this.user.email;
    this._info.password = event['Password *'];
    const socialId = (this.user) ? this.user.id.toString() : '';
    this._info.password = this._info.password + '|' + socialId;
    this._info.firstName = event['First name *'] ? event['First name *'] : this.user.firstName;
    this._info.middleName = event['Middle name'];
    this._info.lastName = event['Last name *'] ? event['Last name *'] : this.user.lastName;
    this._info.gender = event['Gender *'];
    this._info.payment = event['Select preferred payment method *'];
    this._info.dateBirth = event['Date of birth *'];
    this._info.countryRes = event['Select country of residency *'];
    this._info.mailStreetAdd1 = event['Mailing street address *'];
    this._info.mailStreetAdd2 = event['Mailing street/#apto/unit'];
    this._info.state = event['Select State/Province *'];
    this._info.zip = event['Zip Code *'];
    this._info.cell = event['Cellphone *'];
    this._info.profession = event['Specify your profession or occupation'];
    this._info.confirm = 'true';

    this._RegistrationFormService.postInfo(this._info).subscribe(result => {
      localStorage.setItem('user', result.message);
    });


    this._loginService.postUser(JSON.stringify(this._info)).subscribe(result => {
      console.log(result);
      // localStorage.setItem('user', result.toString());
      localStorage.setItem('isLoggedIn', 'true');
      this._route.navigateByUrl('/apps/surveys');

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
    this.fieldOBJ[0].item[3].value = user.firstName;
    this.fieldOBJ[0].item[5].value = user.lastName;
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
