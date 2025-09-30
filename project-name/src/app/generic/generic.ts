import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ANIMALS, Emoji, FRUITS, FOODS, VEHICLES } from './models/emoji.model';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.html',
  styleUrls: ['./generic.css']
})
export class Generic implements OnInit {

  //Crea un vettore di tipo Emoji e lo inizializza
  genVect : Emoji[]= [{name:"", emoji:""}]; 

  //Riceve l'oggetto ActivatedRoute come dependency injection
  constructor(private route: ActivatedRoute) {
    //Gestisce i cambi di route con l'observable paramMap
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  
  ngOnInit(): void {
  }

  //Ogni volta che viene invocata la route tracks/:id, 
  //l'observable paramMap richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (uri_param); //Stampo su console
    //this.service.getTrack() 
    if (uri_param == 'fruits') this.genVect = FRUITS;
    if (uri_param == 'animals') this.genVect = ANIMALS;
    if (uri_param == 'foods') this.genVect = FOODS; // aggiunto
    if (uri_param == 'vehicles') this.genVect = VEHICLES; // aggiunto

  }

}