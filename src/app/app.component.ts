import { Component } from '@angular/core';
import { DstLoggerService } from 'projects/dst-logger/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dst-library';
  constructor(private dstLoggerService: DstLoggerService) {
    this.dstLoggerService.log("Dhruvil Talaviya", "Blue", 20)
  }
}
