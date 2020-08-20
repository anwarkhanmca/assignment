import { Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "./field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { ApiService } from './services/api.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  title: string = 'Assignment Task';
  response: any;
  config: FieldConfig[] = [
    {
      type: 'heading',
      label: 'Job Info and Rates'
    },
    {
      type: "input",
      label: 'Job Title',
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Job Title Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: 'Job Level',
      inputType: "text",
      name: "job_level",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Job Level is Required"
        }
      ]
    },
    {
      type: "select",
      label: "Job Location",
      name: "job_location",
      slug: "job_location",
      datasource: {
        options: [
          { key: 'United States', value: 'US' },
          { key: 'United Kingdom', value: 'UK' },
          { key: 'Germany', value: 'DE' },
          { key: 'Canada', value: 'CA' },
          { key: 'India', value: 'IN' }
        ]
      }, 
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Job Location is Required"
        }
      ]
    },
    {
      type: "input",
      label: 'Bill Rate',
      inputType: "number",
      name: "bill_rate",
      slug: 'bill_rate',
      source: 'SYSTEM',
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Bill Rate is Required"
        }
      ]
    },
    {
      type: 'heading',
      label: 'Duration & Description',
      slug: 'duration_and_description'
    },
    {
      type: "date", 
      label: 'Start Date',
      name: 'start_date',
      slug: 'start_date',
      source: 'SYSTEM',
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Start Date is Required"
        }
      ]
    },
    {
      type: 'date',
      label: 'End Date',
      slug: 'end_date',
      name: 'end_date',
      source: 'SYSTEM',
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "End Date is Required"
        }
      ]
    },
    {
      type: 'textarea',
      label: 'Job Description',
      slug: 'job_description',
      name: 'job_description',
      source: 'SYSTEM',
      readonly: true,
      layout: 'full',
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Job Description is Required"
        }
      ]
    },
    {
      type: 'heading',
      label: 'Additional Information',
      slug: 'additional_information'
    },
    {
      type: 'textarea',
      label: 'Notes',
      slug: 'notes',
      name: 'notes',
      source: 'CUSTOM',
      readonly: true,
      layout: 'full',
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Notes Required"
        }
      ]
    },
    {
      type: "button",
      label: "Send"
    }
  ];

  constructor(private apiService: ApiService) {

  }

  submit(value: any) {
    this.apiService.sendData(value).subscribe(resp => {
      this.response = resp;     
    });
  }
}
