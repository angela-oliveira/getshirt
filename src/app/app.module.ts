import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {PedidoModule} from './pedido/pedido.module';
import {LayoutModule} from './layout/layout.module';
import { HeaderComponent } from './components/header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';
import {ClienteModule} from './cliente/cliente.module';
import {MatTabsModule} from '@angular/material/tabs';
import {FirestoreModule} from './firestore/firestore.module';
import {EmpresaModule} from './empresa/empresa.module';
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],

  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    PedidoModule,
    LayoutModule,
    MatSidenavModule,
    FlexLayoutModule,
    HttpClientModule,
    ClienteModule,
    MatTabsModule,
    FirestoreModule,
    EmpresaModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
