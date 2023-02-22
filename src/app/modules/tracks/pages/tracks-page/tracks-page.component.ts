import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})
export class TracksPageComponent implements OnInit, OnDestroy{
  

  mocksTracks: Array<TrackModel> = []
  suscription: Subscription = new Subscription

  constructor(private trackService: TrackService){}
  
  ngOnInit(): void {

    //? OFFLINE
    this.suscription = this.trackService.dataTracks$.subscribe({
      next: (value) => {
        this.mocksTracks = value
      }
    })

    //? USANDO API
    // this.trackService.getTracks().subscribe({
    //   next: (value: TrackModel[]) => {
    //     this.mocksTracks = value
    //   }
    // })
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }


}
