import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private pathBase = 'https://pokeapi.co';

  constructor(private http: HttpClient) { }

  getPokemon(pokemon: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pathBase}/api/v2/pokemon/${pokemon}`);
  }

}
