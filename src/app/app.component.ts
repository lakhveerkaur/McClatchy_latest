import { Component } from '@angular/core';
import { NewsStatusService } from './news-status.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private newsStatusService:NewsStatusService){}
  title = 'app';

}
