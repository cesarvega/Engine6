export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
}

export interface FieldConfig2 {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
  labelValue: string;
  icon: string;
  defaultInputValue: string;
  componentType: string;
  disabled: string;
  componentId: string;
  sortOrder: string;
  tooltip: string;
  placeHolder: string;
}

export interface FieldGroupConfig {
  item?: FieldConfig[];
  name?: string;
  // inputType?: string;
  // options?: string[];
  // collections?: any;
  // type: string;
  // value?: any;
  // validations?: Validator[];
}
