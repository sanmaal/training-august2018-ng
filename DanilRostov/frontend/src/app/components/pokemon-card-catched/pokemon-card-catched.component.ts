import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonsService } from '../../services/pokemons.service';
import { AuthService } from '../../services/auth.service';
import { IMG_UR } from '../../constants/api';

@Component({
  selector: 'app-pokemon-card-catched',
  templateUrl: './pokemon-card-catched.component.html',
  styleUrls: ['./pokemon-card-catched.component.css']
})
export class PokemonCardCatchedComponent implements OnInit {
  @Input() pokemon;
  @Input() id;

  imageUrl;

  constructor(
    private pokemonsService: PokemonsService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.imageUrl = `${IMG_UR}/${this.id}.png`;
  }
}
