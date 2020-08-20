import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-select",
  template: `
    <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
      <mat-select [placeholder]="field.label" [formControlName]="field.name">
        <mat-option *ngFor="let item of field.datasource.options" [value]="item.value">{{item.key}}</mat-option>
      </mat-select>
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </mat-form-field>
  `
})
export class SelectComponent {
  field: FieldConfig;
  group: FormGroup;
}
