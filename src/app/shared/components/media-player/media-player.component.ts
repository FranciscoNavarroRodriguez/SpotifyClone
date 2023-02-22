import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  suscription: Subscription = new Subscription
  state: string = 'paused'
  

  constructor(public multimediaService: MultimediaService){}

  ngOnInit(): void {
    this.suscription = this.multimediaService.playerStatus$.subscribe({
      next: (value) => {
        this.state = value
      }
    })
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe()
  }


  handlePosition(event: MouseEvent): void{
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x
    const percentageFromX = (clickX * 100) / width
    this.multimediaService.seekAudio(percentageFromX)
  }

}
