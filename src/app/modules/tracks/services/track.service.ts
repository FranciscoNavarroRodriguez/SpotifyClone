import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/app/environments/environment';
import * as data from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL: string = environment.api

  dataTracks$: Observable<TrackModel[]> = new Observable<TrackModel[]>

  constructor(private http: HttpClient) {

    //? OFFLINE
    this.dataTracks$ = of(data?.data)
}

  //? USANDO API
  // getTracks():Observable<TrackModel[]>{
  //   return this.http.get<any>(`${this.URL}/tracks`, {
  //     headers: { authorization: 'Bearer TOKEN'}
  //   })
  //     .pipe(map((value) => {
  //       return value.data
  //     }),
  //   catchError((error) => {
  //     const { status, statusText } = error
  //     console.log('Ha habido un error:', [status, statusText])
  //     return of([])
  //   }))
  // }

}
