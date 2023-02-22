import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import * as data from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL: string = environment.api

  constructor(private http: HttpClient) { }

  // obtenerTracks(term: string): Observable<any> {
  //   return this.http.get(`${this.URL}/tracks?src=${term}`, {
  //     headers: { authorization: 'Bearer TOKEN'}
  //   }).pipe(map((data: any) => data.data))
  // }

  obtenerTracks(term: string): Observable<any> {
    return of(data?.data)
  }



}
