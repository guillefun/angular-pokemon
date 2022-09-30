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
  pokemonName: any = 'Loading...';
  pokemonNumber: any = '';
  pokemonImage: any;

  form: any;
  input: any;
  buttonPrev: any;
  buttonNext: any;

  searchPokemon: any = 15;

  pokedexForm = new FormGroup({
    shortId: new FormControl(null, [
      Validators.required,
      Validators.maxLength(22),
      Validators.minLength(22),
    ]),
  });

  ngOnInit(): void {

/*
    this.form.addEventListener('submit', (event: any) => {
      event.preventDefault();
      this.renderPokemon(this.input.value.toLowerCase());
    });

    this.buttonPrev.addEventListener('click', () => {
      if (this.searchPokemon > 1) {
        this.searchPokemon -= 1;
        this.renderPokemon(this.searchPokemon);
      }
    });

    this.buttonNext.addEventListener('click', () => {
      this.searchPokemon += 1;
      this.renderPokemon(this.searchPokemon);
    });*/

    this.renderPokemon(this.searchPokemon);
  }

  async renderPokemon(pokemon: string){

    //pokemonName.innerHTML = 'Loading...';
    //pokemonNumber.innerHTML = '';

    this.pokedexService.getPokemon(pokemon).subscribe((res)=>{
      if (res) {
       // pokemonImage.style.display = 'block';
       console.log(res)
        this.pokemonName = res.name;
        this.pokemonNumber = res.id;
        this.pokemonImage = res['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
       // input = '';
        this.searchPokemon = res.id;
      } else {
     //   pokemonImage.style.display = 'none';
     this.pokemonName = 'Not found :c';
     this.pokemonNumber = '';
      }
    })


  }
  /*
// elem ref
const searchBox = document.getElementById('search');

// streams
const keyup$ = fromEvent(searchBox, 'keyup')

// wait .5s between keyups to emit current value
keyup$.pipe(
  map((i: any) => i.currentTarget.value),
  debounceTime(500)
)
.subscribe((value) => {
  console.log('value is', value);
});*/


}
