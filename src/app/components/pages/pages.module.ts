import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class PagesModule {}
