import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()

  trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  audio: HTMLAudioElement = new Audio()
  timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('')
  timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('')
  playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  playerPorcentage$: BehaviorSubject<number> = new BehaviorSubject(0)

  constructor() { 
    this.trackInfo$.subscribe({
      next: (value) => {
        value? this.setAudio(value): ''
      }
    })

    this.listenAllEvent()
  }

  private listenAllEvent(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)
  }

  private setPlayerStatus = (state: any) => {

    switch(state.type){
      case 'play':
        this.playerStatus$.next('play')
        break;
      case 'playing':
        this.playerStatus$.next('playing')
        break;
      case 'ended':
        this.playerStatus$.next('ended')
        break;
      default:
        this.playerStatus$.next('paused')
        break;
        
    }
  }

  private calculateTime = () => {
    const { duration, currentTime } = this.audio
    this.setTimeElapsed(currentTime)
    this.setTimeRemaining(currentTime, duration)
    this.setPorcentage(currentTime, duration)
  }

  setPorcentage(currentTime: number, duration: number): void {
    let porcentage = (currentTime * 100) / duration
    this.playerPorcentage$.next(porcentage)
  }

  setTimeElapsed(currentTime: number): void{
    let seconds = Math.floor(currentTime % 60)
    let minutes = Math.floor((currentTime / 60) % 60)

    const displaySeconds = (seconds < 10)? `0${seconds}`: seconds
    const displayMinutes = (minutes < 10)? `0${minutes}`: minutes
    const AllDisplay = `${displayMinutes}:${displaySeconds}`
    this.timeElapsed$.next(AllDisplay)
  }

  setTimeRemaining(currentTime: number, duration: number): void{

    let timeLeft = duration - currentTime

    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor((timeLeft / 60) % 60)

    const displaySeconds = (seconds < 10)? `0${seconds}`: seconds
    const displayMinutes = (minutes < 10)? `0${minutes}`: minutes
    const AllDisplay = duration? `${displayMinutes}:${displaySeconds}` : '00:00'
    this.timeRemaining$.next(AllDisplay)
  }

  public setAudio(track: TrackModel): void{
    
    this.audio.src = track.url
    this.audio.play();
  }

  public togglePlayer(): void{
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage: number): void{
    const {duration} = this.audio
    const percentageFromSecond = (percentage * duration) / 100
    this.audio.currentTime = percentageFromSecond
  }


}
