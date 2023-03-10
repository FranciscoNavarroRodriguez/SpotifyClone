import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit{

  tracks: Observable<any> = new Observable<any>
  constructor(private searchService: SearchService){}


  ngOnInit(): void {

  }

  obtenerData(evento: string){
    
    this.tracks = this.searchService.obtenerTracks(evento)
  }

}
