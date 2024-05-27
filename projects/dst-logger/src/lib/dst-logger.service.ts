import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DstLoggerService {

  constructor() { }

  log(message: string, color: string = "black", fontSize: number = 15) {
    console.log(`%c ${message}`, `color: ${color}; font-size: ${fontSize}px`);
  }
}
