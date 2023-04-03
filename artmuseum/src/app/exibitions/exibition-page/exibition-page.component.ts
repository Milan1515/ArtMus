import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artwork } from 'src/app/modal/artwork.model';
import { Exibition } from 'src/app/modal/exibition.model';
import { ExibitionsService } from 'src/app/service/exibitions.service';

@Component({
  selector: 'app-exibition-page',
  templateUrl: './exibition-page.component.html',
  styleUrls: ['./exibition-page.component.css']
})
export class ExibitionPageComponent implements OnInit {
 exibitionId: number = 0;
 exibition: Exibition = new Exibition();
 edit: boolean = false;
 exibitionArtworks: Artwork[] = [];
 allArtworks: Artwork[] = [];
 filteredArtworks: Artwork[] = [];
  constructor(private service: ExibitionsService,  private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    this.exibitionId = params['id']
   this.getExibitions();
   this.getExibitionArtworks();
   this.getAllArtworks();
    })
  }
  getExibitions() {
    this.service.getOne(this.exibitionId).subscribe({
      next: (exibition: Exibition) => {
        this.exibition = exibition
      },
      error: (err: any) => console.log(err)
    })
  }

  onEditClicked(): void {
    this.edit = !this.edit;
  }

  getExibitionArtworks(): void {
    this.service.getExibitionArtworks(this.exibitionId).subscribe({
      next: (artworks: Artwork[]) => {
        this.exibitionArtworks = artworks
      },
      error: (err: any) => console.log(err)
    })
  }
  getAllArtworks(): void {
    this.service.getAllArtworks().subscribe({
      next: (artworks: Artwork[]) => {
        this.allArtworks = artworks
        this.filterArtworks();
        console.log(this.filteredArtworks)
      },
      error: (err: any) => console.log(err)
    })
  }

  filterArtworks(): void {
    this.filteredArtworks = this.allArtworks.filter((art: Artwork) => art.exibition_id == -1)
  }

  onAddArtwork(artwork: Artwork): void {
    artwork.exibition_id = this.exibitionId
    this.service.updateExibitionArtwork(artwork).subscribe({
      next: (artwork: Artwork) => {
        this.getAllArtworks();
        this.getExibitionArtworks();
      },
      error: (err: any) => console.log(err)
    })
  }
  onRemoveArtwork(artwork: Artwork): void {
    this.service.removeExibitionArtwork(artwork).subscribe({
      next: (artwork: Artwork) => {
        this.getAllArtworks();
        this.getExibitionArtworks();
      },
      error: (err: any) => console.log(err)
    })
  }
}
