import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { MainNavModule } from '../main-nav/main-nav.module';

// import { MatDividerModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    MainNavModule,

  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule {
}
