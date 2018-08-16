import { Component, OnInit } from '@angular/core';
import { FieldConfig, FieldGroupConfig } from '../dynamic-profile/field.interface';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {


  regConfig1: FieldConfig[]  = [
    {   
        type: 'radiobutton',
  
        label: 'VEHICLE TYPE',
  
        name: 'vehicleType',
  
        options: ['Regular size car', 'Small SUV / Station Wagon', 'Large SUV / Minivan'],
  
        value: 'RegularSizeCar'
    },
    {
        type: 'radiobutton',
  
        label: 'DETAIL PACKAGES',
  
        name: 'detail',
  
        options: ['Interior', 'Exterior', 'Full'],
  
        value: 'Interior'
    },
    { 
        type: 'input',
  
        inputType: 'text',
  
        label: 'Time',
  
        name: 'serviceTime',
        validations: [
          {
          name: 'required',
          validator: Validators.required,
          message: 'Service time is required'
          }
        ]
        
    },
    { 
        type: 'input',
  
        inputType: 'text',
  
        label: 'Price',
  
        name: 'servicePrice',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Service price is required'
          }
       ]
        
    },
    { 
        type: 'input',
  
        inputType: 'text',
  
        label: 'description',
  
        name: 'serviceDescription',
        validations: [
                      {
                        name: 'required',
                         validator: Validators.required,
                        message: 'Service description is required'
                      }
                  ]
        
    },      
    {
        type: 'checkbox',
  
        label: 'Leather Treatment',
  
        name: 'leatherTreatment',
    
        value: 'false'
    },
    {
        type: 'input',
  
        inputType: 'text',
  
        label: 'Description',
  
        name: 'descriptionTreatment',
    
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Service description required'
          }
        ]
    },
    {
        type: 'input',
  
        inputType: 'text',
  
        label: 'Time',
  
        name: 'timeTreatment',
    
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Service time required'
          }
       ]
    },
    {
        type: 'input',
  
        inputType: 'text',
  
        label: 'Price',
  
        name: 'priceTreatment',
    
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Service price required'
          }
        ]
    },
         
         {
          type: 'checkbox',
  
          label: 'Odor Elimination',
  
          name: 'odorElimination',
    
          value: 'false'
           },
         {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Description',
  
          name: 'descriptionTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service description required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Time',
  
          name: 'timeTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service time required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Price',
  
          name: 'priceTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service price required'
                        }
                    ]
           },
        
        
         {
          type: 'checkbox',
  
          label: 'Machine Polish',
  
          name: 'machinePolish',
    
          value: 'false'
           },
         {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Description',
  
          name: 'descriptionTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service description required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Time',
  
          name: 'timeTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service time required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Price',
  
          name: 'priceTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service price required'
                        }
                    ]
           },
         
       
         {
          type: 'checkbox',
  
          label: 'Headlight Restoration',
  
          name: 'headlightRestoration',
    
          value: 'false'
           },
         {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Description',
  
          name: 'descriptionTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service description required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Time',
  
          name: 'timeTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service time required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Price',
  
          name: 'priceTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service price required'
                        }
                    ]
           },
         
        
         {
          type: 'checkbox',
  
          label: 'Interior Shampoo',
  
          name: 'interiorShampoo',
    
          value: 'false'
           },
         {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Description',
  
          name: 'descriptionTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service description required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Time',
  
          name: 'timeTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service time required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Price',
  
          name: 'priceTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service price required'
                        }
                    ]
           },
         
         
         {
          type: 'checkbox',
  
          label: 'Paint Sealant',
  
          name: 'paintSealant',
    
          value: 'false'
           },
         {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Description',
  
          name: 'descriptionTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service description required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Time',
  
          name: 'timeTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service time required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Price',
  
          name: 'priceTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service price required'
                        }
                    ]
           },
         
        
         {
          type: 'checkbox',
  
          label: 'Premium Hand Wax',
  
          name: 'premiumHandWax',
    
          value: 'false'
           },
         {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Description',
  
          name: 'descriptionTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service description required'
                        }
                    ]
           },
         {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Time',
  
          name: 'timeTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service time required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Price',
  
          name: 'priceTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service price required'
                        }
                    ]
           },
         
  
         {
          type: 'checkbox',
  
          label: 'Pet Hair Removal',
  
          name: 'Pet Hair Removal',
    
          value: 'false'
           },
         {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Description',
  
          name: 'descriptionTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service description required'
                        }
                    ]
           },
         {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Time',
  
          name: 'timeTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service time required'
                        }
                    ]
           },
        {
          type: 'input',
  
          inputType: 'text',
  
          label: 'Price',
  
          name: 'priceTreatment',
    
          validations: [
                        {
                          name: 'required',
                          validator: Validators.required,
                          message: 'Service price required'
                        }
                    ]
           }
  
         
        
       
   
    
  ];
    
  regConfig2: FieldConfig[] = [
    
      
       
             {
              label: 'First name',
              type: 'input',
              inputType: 'text',
              name: 'firstName',
            
              validations: [
                {
                  name: 'required',
                  validator: Validators.required,
                  message: 'First name Required'
                },
                {
                  name: 'pattern',
                  validator: Validators.pattern('^[a-zA-Z]+$'),
                  message: 'Accept only text'
                }
              ]
             },
             {
              label: 'Last Name',
              type: 'input',
              inputType: 'text',
              name: 'lastName',
           
              validations: [
                {
                  name: 'required',
                  validator: Validators.required,
                  message: 'Last Name Required'
                },
                {
                  name: 'pattern',
                  validator: Validators.pattern('^[a-zA-Z]+$'),
                  message: 'Accept only text'
                }
              ]
             },
             {
              label: 'Phone number',
              type: 'input',
              inputType: 'text',
              name: 'phone',
           
              validations: [
                {
                  name: 'required',
                  validator: Validators.required,
                  message: 'Phone number Required'
                }
                
              ]
             },
             {
              label: 'Email addres',
              type: 'input',
              inputType: 'email',
              name: 'email',
            
              validations: [
                {
                  name: 'required',
                  validator: Validators.required,
                  message: 'Email Required'
                }
              ]
             },       
         
             {
              label: 'Year',
              type: 'input',
              inputType: 'text',
              name: 'year'
            
               
             },
             {
              label: 'Make',
              type: 'input',
              inputType: 'text',
              name: 'make',
          
              validations: [
                {
                  name: 'required',
                  validator: Validators.required,
                  message: 'make Required'
                }
              ]
             },
             {
              label: 'Model',
              type: 'input',
              inputType: 'text',
              name: 'model',
             
              validations: [
                {
                  name: 'required',
                  validator: Validators.required,
                  message: 'Model Required'
                }
              ]
             },
             {
              label: 'Color',
              type: 'input',
              inputType: 'text',
              name: 'color',
            
              validations: [
                {
                  name: 'required',
                  validator: Validators.required,
                  message: 'Color Required'
                }
              ]
             },
           
   
             {
              label: 'Address',
              type: 'input',
              inputType: 'text',
              name: 'address',
            
              validations: [
                {
                  name: 'required',
                  validator: Validators.required,
                  message: 'Address Required'
                }
                ]
             },
             {
              type: 'input',
              inputType: 'text',
              name: 'apt'
            
             },
             {
              label: 'City',
              type: 'input',
              inputType: 'text',
              name: 'City',
          
              validations: [
                {
                  name: 'required',
                  validator: Validators.required,
                  message: 'City Required'
                }
                
              ]
             },
             {
               type: 'select',
              label: 'State',
              name: 'state',
              value: '',
              'options': ['Alabama', 'Alaska', 'Arizona', 'California', 'Florida']
             },
             {
              label: 'Zip',
              type: 'input',
              inputType: 'text',
              name: 'zip',
             
              validations: [
                {
                  name: 'required',
                  validator: Validators.required,
                  message: 'Zip Required'
                }
                
              ]
             }
      
  ];  
    
    regConfig3: FieldConfig[] = [
      {
          label: 'Date',
          type: 'input',
          inputType: 'text',
          name: 'date'
        },
        {
          label: 'Time',
          type: 'input',
          inputType: 'text',
          name: 'time'
        }
        
    ];
    
    regConfig4: FieldConfig[] = [
       {
         label: 'Payment details',
         type: 'radiobutton',
         value: 'Credit',
         name: 'payment',
         options: ['Credit', 'Cash']
       },
       {
         label: 'Card Number',
         type: 'input',
         inputType: 'text',
         name: 'cardNumber',
         
       },
       {
         label: 'CVV',
         type: 'input',
         inputType: 'text',
         name: 'cvv',
       
       },
       {
         label: 'Expiration Date',
         type: 'date',
         name: 'expiration',
       
         
       },
       {
         label: 'Billing ZIP Code',
         type: 'input',
         inputType: 'text',
         name: 'zipCode',
         
       },
       {
        type: 'button',
        label: 'Save'
      }
      ];
  
      tabConfig: FieldGroupConfig[] = 
    [
      {
        item: this.regConfig1,
        name: 'PACKAGE INFO'
      }
      ,
      {
        item: this.regConfig2,
        name: 'DEMOGRAPHICS'
      }
      ,
      {
        item: this.regConfig3,
        name: 'OCCUPATION'
      }
      ,
      {
        item: this.regConfig4,
        name: 'HOUSEHOLD'
      }
    ];
    ngOnInit(): void {
      setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 20);
    }
}
