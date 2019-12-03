import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavComponent,
    ButtonsComponent,
  ],
  exports: [
    SidenavComponent,
    ButtonsComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
  ]
})
export class SharedModule { }
