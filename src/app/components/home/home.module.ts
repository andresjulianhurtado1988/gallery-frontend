import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { BooksModule } from '../my-gallery/books.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, BooksModule, MaterialModule],
})
export class HomeModule {}
