import { Component, HostBinding } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

export interface CUE {
  id: string;
  date: Date;
  applicant: string;
  farms: string[];
  farmsHolders: string[];
  managmentUnit: string;
  state:string;
}

const ELEMENT_DATA: CUE[] = [
  {id:'1', date: new Date(),  applicant: 'Lourdes Maria', farms: ['J41595', 'J41592'], farmsHolders: ['14678287F', '4578964A'], managmentUnit:'', state:'FALLO'},
  {id:'2', date: new Date(),  applicant: 'Lourdes Maria', farms: ['A0075'], farmsHolders: [], managmentUnit:'', state:'OK'},
  {id:'3', date: new Date(),  applicant: 'Lourdes Maria', farms: ['J41595'], farmsHolders: [], managmentUnit:'', state:'PARTIAL'},
  {id:'4', date: new Date(),  applicant: 'Lourdes Maria', farms: ['A0075'], farmsHolders: [], managmentUnit:'', state:'PARTIAL'},
  {id:'5', date: new Date(),  applicant: 'Lourdes Maria', farms: ['J41595'], farmsHolders: [], managmentUnit:'', state:'OK'},
];


@Component({
  selector: 'app-cue-list',
  templateUrl: './cue-list.component.html',
  styleUrls: ['./cue-list.component.scss'],
})
export class CueListComponent {
  // @HostBinding('class') page = 'page';

  //displayedColumns: string[] = ['position'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //displayedColumns: string[] = ['id', 'date', 'applicant', 'farms', 'farmsHolder', 'managmentUnit', 'state', 'report'];
  displayedColumns: string[] = ['id', 'date', 'applicant', 'farms', 'farmsHolders', 'managmentUnit', 'state', 'report'];
  dataSource = ELEMENT_DATA;

  constructor (navService:NavService) {

    navService.update('Suivi des envois CUE')

  }

}
