import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-date",
  template: `
    <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
      <input matInput [matDatepicker]="picker" (focus)="picker.open()" [formControlName]="field.name" [placeholder]="field.label">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
      <mat-hint></mat-hint>
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </mat-form-field>
  `
})
export class DateComponent {
  field: FieldConfig;
  group: FormGroup;
}
