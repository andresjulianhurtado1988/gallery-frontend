import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { AuthorsComponent } from './author/authors/authors.component';
import { AuthorsCreateComponent } from './author/authors-create/authors-create.component';
import { BooksComponent } from './book/books/books.component';
import { BooksCreateComponent } from './book/books-create/books-create.component';
import { BooksAlertComponent } from './book/books-alert/books-alert.component';
import { BooksImgFormComponent } from './book/books-img-form/books-img-form.component';
import { BooksImgGalleryComponent } from './book/books-img-gallery/books-img-gallery.component';
import { AuthorsAlertComponent } from './author/authors-alert/authors-alert.component';
import { AuthorsImgGalleryComponent } from './author/authors-img-gallery/authors-img-gallery.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [
    BooksComponent,
    BooksCreateComponent,
    BooksAlertComponent,
    BooksImgFormComponent,
    BooksImgGalleryComponent,
    AuthorsComponent,
    AuthorsCreateComponent,
    AuthorsAlertComponent,
    AuthorsImgGalleryComponent,
  ],
  imports: [CommonModule, BookRoutingModule, MaterialModule],
})
export class BooksModule {}
