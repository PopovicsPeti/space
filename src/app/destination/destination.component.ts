import { Component, Injectable, OnInit } from '@angular/core';
import { DbServece } from '../db.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})

export class DestinationComponent implements OnInit {
  planets: Array<any> = [];
  planetId: any = null;
  planetList: Array<number> = [0, 1, 2, 3];


  constructor(private DBS: DbServece) { }

  ngOnInit(): void {
    this.DBS.fetchPlanet()
    .subscribe( (data) => {
      this.planets = data;
      this.planetId = data[0];
      setTimeout( () => this.activePlanet(0), 100);
      });
  }

  updatePlanet(id: number){
    this.planetId = id;
  }

  activePlanet(index: number){
    for(let i = 0; i < this.planetList.length; i++){
      if(this.planetList[i] !== index){
        document.getElementById(`${i}`)?.classList.remove('active-planet'); 
      }
    }
    document.getElementById(`${index}`)?.classList.add('active-planet');
  }



}
