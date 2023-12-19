import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksImgGalleryComponent } from './book/books-img-gallery/books-img-gallery.component';
import { AuthorsImgGalleryComponent } from './author/authors-img-gallery/authors-img-gallery.component';

const routes: Routes = [
  { path: 'gallery-books', component: BooksImgGalleryComponent },
  { path: 'gallery-authors', component: AuthorsImgGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
