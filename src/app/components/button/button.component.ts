import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-button",
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <button type="submit" mat-raised-button color="primary">{{field.label}}</button>
    </div>
  `
})
export class ButtonComponent {
  field: FieldConfig;
  group: FormGroup;
}
