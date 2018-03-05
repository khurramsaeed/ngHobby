import { Component, OnInit } from '@angular/core';
import {Hobby} from './hobby.model';
import {HobbyService} from '../hobby.service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css'],
  providers: [HobbyService]
})
export class HobbyComponent implements OnInit {
  hobbyArray: Hobby[];

  constructor(private hobbyService: HobbyService) {
  }

  ngOnInit() {
    // hent hobbies fra service til hobbyArray
    this.hobbyArray = this.hobbyService.hobbies;
  }

  deleteHobby(index: number) {
    // kald servicemetode, der sletter hobby på index nr ‘index’
    this.hobbyService.deleteHobby(index);
  }

  addHobby(newHobby: string) {
    // kald servicemetode, der tilføjer hobby (hvis felt ikke er tomt)
    this.hobbyService.addHobby(newHobby);
  }

  changeHobby(data: object, index: number) {
    // kald servicemetode, der ændrer hobby navn på index
    this.hobbyService.changeHobby(data, index);
  }

}
