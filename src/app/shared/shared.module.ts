import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { RouterModule } from '@angular/router';
import { TranslateComponent } from './components/translate/translate.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardItemDirective } from './components/grid-list/directive/card-item.directive';
import { AnimatedPercentageBarComponent } from './components/animated-percentage-bar/animated-percentage-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CardContainerComponent } from './components/card-container/card-container.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    SidenavComponent,
    ButtonsComponent,
    TranslateComponent,
    GridListComponent,
    CardItemDirective,
    AnimatedPercentageBarComponent,
    CardContainerComponent,
  ],
  exports: [
    SidenavComponent,
    ButtonsComponent,
    TranslateComponent,
    GridListComponent,
    CardItemDirective,
    AnimatedPercentageBarComponent,
    CardContainerComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTooltipModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory, // exported factory function needed for AoT compilation
          deps: [HttpClient]
      }
    }),
  ]
})
export class SharedModule { }
