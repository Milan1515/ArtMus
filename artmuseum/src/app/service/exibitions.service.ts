import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Artwork } from '../modal/artwork.model';
import { Exibition, ExibitionLocation } from '../modal/exibition.model';
const baseUrl = "http://localhost:3000/api/exibitions"
@Injectable({
  providedIn: 'root'
})
export class ExibitionsService {

  constructor(private http: HttpClient) { }

  getExibition():Observable<Exibition[]>{
   return this.http.get(baseUrl).pipe((map((data:any)=>{
    return data && data.map((elem: any) => new Exibition(elem)) || []
    })))
  }
  getOne(exibitionId: number): Observable<Exibition> {
    return this.http.get(`${baseUrl}/${exibitionId}`).pipe(map((data: any) => {
      return new Exibition(data)
    }))
  }

  getExibitionArtworks(exibitionId: number): Observable<Artwork[]> {
    return this.http.get(`${baseUrl}/${exibitionId}/artworks`).pipe(map((data: any) => {
      return data && data.map((elem: any) => new Artwork(elem)) || []
    }))
  }
  getAllArtworks(): Observable<Artwork[]> {

    let options = {
      params: new HttpParams()
      .set("sort", "author")
      .set("sortDirection", "asc")
    }
    return this.http.get("http://localhost:3000/api/artworks", options).pipe(map((data: any) => {
      return data && data.map((elem: any) => new Artwork(elem)) || []
    }))
  }
  updateExibitionArtwork(artwork: Artwork): Observable<Artwork> {
    return this.http.put(`${baseUrl}/${artwork.exibition_id}/artworks/${artwork._id}`, artwork
      ).pipe(map((data: any) => {
        return new Artwork(data);
    }))
  }

  removeExibitionArtwork(artwork: Artwork): Observable<Artwork> {
    return this.http.delete(
      `${baseUrl}/${artwork.exibition_id}/artworks/${artwork._id}`
      ).pipe(map((data: any) => {
        return new Artwork(data);
    }))
  }

  getLocations(): Observable<ExibitionLocation[]> {
    return this.http.get("http://localhost:3000/api/locations").pipe(map((data: any) => {
      return data && data.map((elem: any) => new ExibitionLocation(elem))|| []
    }))
  }

  createExibition(exibition: Exibition): Observable<Exibition> {
    return this.http.post(baseUrl, exibition).pipe(map((data: any) => {
      return new Exibition(data);
    }))
  }
}
