import { Injectable } from '@angular/core';
import {Hobby} from './hobby/hobby.model';

@Injectable()
export class HobbyService {
  hobbies: Hobby[] = [
    {name: 'Dans'},
    {name: 'Løb'},
    {name: 'Svømning'}
  ];

  addHobby(hobby: string) {
    // tilføj ‘hobby’ til ‘hobbies’ array
    this.hobbies.push({name: hobby});
  }

  deleteHobby(index: number) {
    // slet hobby på index i ‘hobbies’ array
    this.hobbies.splice(index, 1);
  }

  changeHobby(data: object, index: number) {
    // sæt hobbies[index] til at pege på ‘data’
    this.hobbies[index].name = data.toString();
  }
}
