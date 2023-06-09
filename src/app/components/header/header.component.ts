import { Component, Input } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() displayBackBtn:boolean = false;

  constructor(public navService:NavService) {

  }

}
