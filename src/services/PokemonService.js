import { AppState } from "../AppState"
import Pokemon from "../models/Pokemon"
import { logger } from "../utils/Logger"
import { pokeApi } from "./AxiosService"

class PokemonService{
async findPokemon(){
  const res = await pokeApi.get('pokemon')
  logger.log(res.data)
  AppState.pokemon = res.data.results
  AppState.next = res.data.next
  AppState.previous = res.data.previous

}

async setActive(pokemonName){
  const res = await pokeApi.get('pokemon/' + pokemonName)
  logger.log(res.data)
  AppState.activePokemon =  new Pokemon(res.data)
}

async changePage(string){
  if(string === 'next'){
    const res = await pokeApi.get(AppState.next)
    AppState.pokemon = res.data.results
  AppState.next = res.data.next
  AppState.previous = res.data.previous
  } else {
    const res = await pokeApi.get(AppState.previous)
    AppState.pokemon = res.data.results
  AppState.next = res.data.next
  AppState.previous = res.data.previous

  }
}
}


export const pokemonService = new PokemonService()
