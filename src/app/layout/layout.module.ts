import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";



@NgModule({
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatSidenavModule,

    ]
})
export class LayoutModule { }
