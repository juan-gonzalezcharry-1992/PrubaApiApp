import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search-box.component.html'
})

export class SearchBoxComponent {
  @ViewChild('Texto')
  public ValorInput!: ElementRef<HTMLInputElement>;
  constructor() { }

  Buscar(NuevasBusqueda: string) {
    console.log({ NuevasBusqueda })
  }
}
