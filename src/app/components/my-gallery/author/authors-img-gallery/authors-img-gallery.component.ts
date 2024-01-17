import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-authors-img-gallery',
  templateUrl: './authors-img-gallery.component.html',
  styleUrls: ['./authors-img-gallery.component.css'],
})
export class AuthorsImgGalleryComponent implements OnInit {
  constructor() {}

  mouseX: number = 0;
  mouseY: number = 0;
  mouseMove$: Observable<{ x: number; y: number }> | undefined;

  ngOnInit(): void {
    const mapContainer = document.getElementById('mapContainer');

    if (mapContainer) {
      this.mouseMove$ = fromEvent<MouseEvent>(mapContainer, 'mousemove').pipe(
        map((event) => this.getMouseCoordinates(event))
      );

      this.mouseMove$.subscribe((coords) => {
        this.mouseX = coords.x;
        this.mouseY = coords.y;
      });
    }
  }

  private getMouseCoordinates(event: MouseEvent): { x: number; y: number } {
    const mapContainer = document.getElementById('mapContainer');

    if (mapContainer) {
      const boundingBox = mapContainer.getBoundingClientRect();
      const offsetX = event.clientX - boundingBox.left;
      const offsetY = event.clientY - boundingBox.top;

      return { x: offsetX, y: offsetY };
    }

    return { x: 0, y: 0 };
  }
}
