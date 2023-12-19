import { Component, OnInit } from '@angular/core';
import { DbServece } from '../db.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {
  crew: Array<any> = [];
  crewMember: any = null;
  membersList: Array<any> = [0, 1, 2, 3];
  
  constructor(private DBS: DbServece) { }

  ngOnInit(): void {
    this.DBS.fetchCrew()
      .subscribe( (data) => {
        this.crew = data;
        this.crewMember = data[0];
        setTimeout( () => this.activeCrewMember(0), 100);
      });
      
  }

  updateCrewMember(id: any) {
    this.crewMember = id;
  }

  activeCrewMember(index: number){
    for(let i = 0; i < this.membersList.length; i++){
      if(this.membersList[i] !== index){
        document.getElementById(`${i}`)?.classList.remove('active-member'); 
      }
    }
    document.getElementById(`${index}`)?.classList.add('active-member');
  }


}
