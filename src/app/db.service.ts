import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbServece {
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  fetchPlanet(): Observable<any[]> {
    return this.http.get<any[]>(`https://space-travel-52a8f-default-rtdb.europe-west1.firebasedatabase.app/destinations.json`)
      .pipe(
        catchError( error => {
          this.errorMessage = error.message;
          return throwError(error);
        }),
        map((planets) => {
          let planetArray: any[] = [];
          Object.entries(planets).forEach(([key, value]) => {
            planetArray.push(value);
          })
          return planetArray;
        }))

  }

  fetchCrew(): Observable<any[]> {
    return this.http.get<any[]>(`https://space-travel-52a8f-default-rtdb.europe-west1.firebasedatabase.app/crew.json`)
      .pipe(
        catchError( error => {
          this.errorMessage = error.message;
          return throwError(error);
        }),
        map((planets) => {
          let crewArray: any[] = [];
          Object.entries(planets).forEach(([key, value]) => {
            crewArray.push(value);
          })
          return crewArray;
        }))

  }


  fetchTechnology(): Observable<any[]> {
    return this.http.get<any[]>(`https://space-travel-52a8f-default-rtdb.europe-west1.firebasedatabase.app/technology.json`)
      .pipe(
        catchError( error => {
          this.errorMessage = error.message;
          return throwError(error);
        }),
        map((technology) => {
          let techArray: any[] = [];
          Object.entries(technology).forEach(([key, value]) => {
            techArray.push(value);
          })
          return techArray;
        }))

  }

}




