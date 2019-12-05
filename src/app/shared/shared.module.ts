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
import { CarouselComponent, CarouselItemElement } from './components/carousel/carousel.component';
import { CarouselItemDirective } from './components/carousel/carousel-item.directive';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardItemDirective } from './components/grid-list/directive/card-item.directive';
import { AnimatedPercentageBarComponent } from './components/animated-percentage-bar/animated-percentage-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    SidenavComponent,
    ButtonsComponent,
    TranslateComponent,
    CarouselItemElement,
    CarouselComponent,
    CarouselItemDirective,
    GridListComponent,
    CardItemDirective,
    AnimatedPercentageBarComponent,
  ],
  exports: [
    SidenavComponent,
    ButtonsComponent,
    TranslateComponent,
    CarouselItemElement,
    CarouselComponent,
    CarouselItemDirective,
    GridListComponent,
    CardItemDirective,
    AnimatedPercentageBarComponent,
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
