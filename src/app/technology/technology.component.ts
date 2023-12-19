import { Component, OnInit } from '@angular/core';
import { DbServece } from '../db.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  technology: Array<any> = [];
  techId: any = null;
  techList: Array<number> = [0, 1, 2, 3];


  constructor(private DBS: DbServece) { }

  ngOnInit(): void {
    this.DBS.fetchTechnology()
    .subscribe( (data) => {
      this.technology = data;
      this.techId = data[0];
      setTimeout( () => this.activeTech(0), 100);
      });
  }

  updateTech(id: number){
    this.techId = id;
  }

  activeTech(index: number){
    for(let i = 0; i < this.techList.length; i++){
      if(this.techList[i] !== index){
        document.getElementById(`${i}`)?.classList.remove('active-tech'); 
      }
    }
    document.getElementById(`${index}`)?.classList.add('active-tech');
  }



}
