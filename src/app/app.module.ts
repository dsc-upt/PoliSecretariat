import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './pages/add/add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { AllComponent } from './pages/all/all.component';
import {MatTableModule} from "@angular/material/table";
import {StudentCardComponent} from "./pages/all/components/student-card/student-card.component";
import {MatCardModule} from "@angular/material/card";
import { StudentTableComponent } from './pages/all/components/student-table/student-table.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { HomeComponent } from './pages/home/home.component';
import { routingComponents } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AllComponent,
    StudentCardComponent,
    StudentTableComponent,
    ToolbarComponent,
    HomeComponent,
    routingComponents
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatCardModule,
        MatTabsModule,
        MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
