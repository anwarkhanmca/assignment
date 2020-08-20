export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  slug?: string;
  inputType?: string;
  datasource?: {
    options?: { key: string, value: string }[]
  };
  type: string;
  value?: any;
  source?: string;
  validations?: Validator[];
  readonly?: boolean;
  layout?: string;
  rows?: number;
  cols?: number;
}
