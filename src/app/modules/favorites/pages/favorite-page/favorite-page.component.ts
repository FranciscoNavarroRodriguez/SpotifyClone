import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as data from '../../../../data/tracks.json';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent {

  tracks: TrackModel[] = data?.data

}
