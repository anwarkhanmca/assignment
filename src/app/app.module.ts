import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./components/input/input.component";
import { ButtonComponent } from "./components/button/button.component";
import { SelectComponent } from "./components/select/select.component";
import { DateComponent } from "./components/date/date.component";
import { TextareaComponent } from './components/textarea/textarea.component';
import { DynamicFieldDirective } from "./components/dynamic-field/dynamic-field.directive";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { GroupHeadingComponent } from './components/group-heading/group-heading.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    TextareaComponent,
    GroupHeadingComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    TextareaComponent,
    GroupHeadingComponent
  ]
})
export class AppModule {}
