import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artwork } from 'src/app/modal/artwork.model';

@Component({
  selector: 'app-artwork-edit',
  templateUrl: './artwork-edit.component.html',
  styleUrls: ['./artwork-edit.component.css']
})
export class ArtworkEditComponent implements OnInit {
  @Input()
  exibitionArtworks: Artwork[] = []
  @Input()
  nonExibitionArtworks: Artwork[] = [];
  @Output()
  addArtwork: EventEmitter<Artwork> = new EventEmitter();
  @Output()
  removeArtwork: EventEmitter<Artwork> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onAddClicked(artwork: Artwork):void {
    this.addArtwork.emit(artwork)

  }
  onRemoveClicked(artwork: Artwork):void {
    this.removeArtwork.emit(artwork) 
  }

}
