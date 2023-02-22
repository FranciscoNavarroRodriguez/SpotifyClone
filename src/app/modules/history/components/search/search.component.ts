import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() callbackData: EventEmitter<any> = new EventEmitter()

  src: string = ''

  constructor(){}

  callSearch(evento: string): void{
    if(evento.length >= 3){
      console.log(evento)
      this.callbackData.emit(evento)
    }
    
  }

}
