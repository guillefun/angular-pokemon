import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../shared/services/pokedex.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  constructor(private pokedexService: PokedexService) {}

  MAX_POKE = 649;
  MIN_POKE = 1;

  pokemonName: string = 'Loading...';
  pokemonNumber: any = '';
  pokemonImage: any;

  form: any;
  input: any;
  buttonPrev: any;
  buttonNext: any;

  searchPokemon: any = 1;
  timeout: any;

  pokedexForm = new FormGroup({
    search: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
    this.renderPokemon(this.searchPokemon);
  }

  renderPokemon(pokemon: string, event: any = {}) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (event.keyCode != 13) {
        this.pokedexService.getPokemon(pokemon).subscribe((res) => {
          if (res) {
            console.log(res);
            this.pokemonName = res.name;
            this.pokemonNumber = res.id;
            this.pokemonImage =
              res['sprites']['versions']['generation-v']['black-white'][
                'animated'
              ]['front_default'];
            this.searchPokemon = res.id;
          } else {
            this.pokemonName = 'Not found :c';
            this.pokemonNumber = '';
          }
        });
      }
    }, 1000);
  }

  nextPokemon() {
    if (this.searchPokemon < this.MAX_POKE) {
      this.searchPokemon = this.searchPokemon + 1;
      this.renderPokemon(this.searchPokemon);
    }
  }

  prevPokemon() {
    if (this.searchPokemon > this.MIN_POKE) {
      this.searchPokemon = this.searchPokemon - 1;
      this.renderPokemon(this.searchPokemon);
    }
  }
}
