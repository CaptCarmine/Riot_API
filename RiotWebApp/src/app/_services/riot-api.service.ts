import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Champion } from '../_objects/champion';

@Injectable({
  providedIn: 'root'
})
export class RiotAPIService {

  constructor(private http: HttpClient) { }

  // TODO:
  // add a function to get the summor id
  // add a function to get the character asset data from datadragon

  // typing up front everything makes your downstream life easier
  getMasteryData(summonerId: string): Observable<Champion[]> {
    // temp: remove when a fucntion to get the summoner ID is added
    summonerId = 'UZuJbRRGs3TDLS8P0p2dGOSJZQFbGkZ8c4hZAXGts2x10kI';

    return this.http.get<any[]>(`https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${
      summonerId}?api_key=${environment.apiKey}`, { observe: 'response' }).pipe(
      // "map" the response into a new output; only return the meat of the response
      map(res => res.body),

      // handle errors gracefully
      catchError(err => {
        console.error(`Status: ${err.status}.  Error message: ${err.statusText}`)
        return of([])
      })
    )
  }
}
