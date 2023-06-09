import { Component } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

export interface Message {
  code:string;
  meaning: string;
  description:string;
}


const ELEMENT_DATA: Message[] = [
  {
    code: '3',
    meaning: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsam.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore molestiae maxime aliquam cum, ut dolorum!'
  },
  {
    code: '3',
    meaning: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsam.'
  },
  {
    code: '7',
    meaning: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ipsam.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui accusantium asperiores consequuntur rem nobis.'
  },
  {
    code: '11',
    meaning: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore molestiae maxime aliquam cum, ut dolorum!'
  }
]


@Component({
  selector: 'app-cue-detail',
  templateUrl: './cue-detail.component.html',
  styleUrls: ['./cue-detail.component.scss']
})
export class CueDetailComponent {

  displayedColumns:string[] = ['code', 'meaning', 'description'];
  dataSource = ELEMENT_DATA;

  constructor(navService:NavService) {
    navService.update('Rapport CUE n°3','/')
  }

}
