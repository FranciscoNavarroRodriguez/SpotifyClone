import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';


@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.scss']
})

export class PlayListBodyComponent {

  @Input() tracks: TrackModel[] = []
  optionsSort: {property: string | null, order: string} = {property: null, order: 'asc'}

  changeSort(property: string): void{

    const {order} = this.optionsSort
    this.optionsSort = {
      property,
      order: order === 'asc'? 'desc': 'asc'
    }


    // this.optionsSort.property = property
    // this.optionsSort.order === 'asc'? this.optionsSort.order = 'desc': this.optionsSort.order = 'asc'

  //   if(this.optionsSort.order == 'asc'){
  //     this.optionsSort.order = 'desc'
  //     return
  //   }
  //   if(this.optionsSort.order == 'desc'){
  //     this.optionsSort.order = 'asc'
  //     return
  // }

  }

}
