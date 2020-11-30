import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ChoiceComponent } from './content/choice/choice.component';
import { HeaderComponent } from './content/header/header.component';
import { UsersComponent } from './content/users/users.component';
import { LogsComponent } from './content/logs/logs.component';
import { InputComponent } from './content/input/input.component';
import { OutputComponent } from './content/output/output.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ChoiceComponent,
    HeaderComponent,
    UsersComponent,
    LogsComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
