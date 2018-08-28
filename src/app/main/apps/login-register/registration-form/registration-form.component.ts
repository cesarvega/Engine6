import { Component, OnInit } from '@angular/core';
import { FieldConfig2 } from '../../dynamic-profile/field.interface';
import { Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider, AuthService } from 'angularx-social-login';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

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
      placeHolder: 'Enter your First Name',
      type: 'input',
      label: 'Email *',
      name: 'Email*',
      value: '',
      inputType: 'email',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Must enter first name'
        }
      ]
    },
    {
      labelValue: 'Email*',
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
          message: 'Must enter first name'
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
          message: 'Must enter last name'
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
      type: 'input',
      label: 'Date of birth *',
      name: 'Date of birth *',
      value: '',
      inputType: 'date',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Must enter your date of birth is required'
        }
      ]
    },
    {
      labelValue: 'Select country of residency *',
      icon: 'sql',
      defaultInputValue: '',
      componentType: 'bi-select',
      options: ['Colombia', 'Espania', 'E.U'],
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
      label: 'Mailing street address 1 *',
      name: 'Mailing street address 1 *',
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
      label: 'Mailing street address 2',
      name: 'Mailing street address 2',
      value: '',
      inputType: 'text',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Service time is required'
        }
      ]
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
          message: 'Select your state/province of residency'
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
      label: 'Cell Phone',
      name: 'Cell Phone',
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
      labelValue: 'Specify your profession or occupation in order to continue',
      icon: '',
      defaultInputValue: '',
      componentType: 'bi-dropdown',
      options: [
        {
          'names': 'Not related to Health Care',
          'values': 'NonHCP'
        },
        {
          'names': 'Physician/Doctor of Medicine (MD, DO)',
          'values': 'MD_PA_lic_Info'
        },
        {
          'names': 'Physician Assistant (PA)',
          'values': 'MD_PA_lic_Info'
        },
        {
          'names': 'Nurse',
          'values': 'Nurse_Lic_Info'
        },
        {
          'names': 'Pharmacist',
          'values': 'Pharm_Lic_Info'
        },
        {
          'names': 'Pharmacist Technician',
          'values': 'Pharm_Lic_Info'
        },
        {
          'names': 'Dentist',
          'values': 'OTHER_HCP'
        },
        {
          'names': 'Optometrist',
          'values': 'OTHER_HCP'
        },
        {
          'names': 'Veterinarian',
          'values': 'OTHER_HCP'
        },
        {
          'names': 'Allied Health Care Profession or Occupation',
          'values': 'OTHER_HCP'
        },
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
      label: 'Specify your profession or occupation in order to continue',
      name: 'Specify your profession or occupation in order to continue',
      value: '',
      inputType: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Profession is required'
        }
      ]
    },
    {
      labelValue: '',
      icon: 'question',
      defaultInputValue: 'Your profile information is used to match up with defined research specifications in order to determine which research studies you will be invited to participate. We need to collect some of your personal information to know who you are and where to send you the payment when the time arrives.',
      componentType: 'bi-help',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: '',
      type: 'input',
      label: '',
      name: '',
      value: '',
      inputType: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Service time is required'
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
    private _authService: AuthService
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
    console.log(event);

  }

  signInWithGoogle(): void {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  /**
   * On init
   */
  ngOnInit(): void {
    setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 20);
  }
}
