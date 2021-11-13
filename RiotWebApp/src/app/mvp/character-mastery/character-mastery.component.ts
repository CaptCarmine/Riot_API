import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/app/_objects/champion';
import { RiotAPIService } from 'src/app/_services/riot-api.service';

@Component({
  selector: 'app-character-mastery',
  templateUrl: './character-mastery.component.html',
  styleUrls: ['./character-mastery.component.scss']
})
export class CharacterMasteryComponent implements OnInit {

  characters: Champion[];

  constructor(
    private riotapiserv: RiotAPIService
  ) { }

  ngOnInit(): void {
    this.riotapiserv.getMasteryData('')
      .subscribe(champs => this.characters = champs);
  }

}
