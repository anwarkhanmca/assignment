import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,  
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
