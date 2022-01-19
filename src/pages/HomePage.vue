<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4 bg-dark wild-zone text-center">
        <button class="btn btn-outline-danger mt-4 text-white rounded-pill" @click="findPokemon" v-if="pokemon.length <= 0">Find Pokemon</button>
        <div class="row">
          <div class="col-4"  v-for="(p, index) in pokemon" :key="index">
        <button class="btn btn-primary m-2 w-75" @click="setActive(p.name)">{{p.name}}</button>
          </div>
          <button class="btn btn-primary w-50" @click="changePage('next')" :class="{disabled: !next}">next</button>
          <button class="btn btn-primary w-50" @click="changePage('previous')" :class="{disabled: !previous}">previous</button>
        </div>
      </div>
      <div class="col-8 active-zone text-center">
        <h1 class="mt-4">
        <ActivePokemon />
        </h1>
      </div>
    </div>
     <Modal id="activePokemon" />
  </div>
</template>

<script>
import { logger } from "../utils/Logger"
import {pokemonService} from '../services/PokemonService'
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
 setup(){
   return{
     async findPokemon(){
       try {
         await pokemonService.findPokemon()
       } catch (error) {
         logger.error(error)
       }
     },
     async setActive(pokemonName){
       try {
         await pokemonService.setActive(pokemonName)
       } catch (error) {
         logger.error(error)
       }
     },
     async changePage(string){
       try {
         await pokemonService.changePage(string)
       } catch (error) {
         logger.error(error)
       }
     },
     pokemon: computed(() => AppState.pokemon),
     next: computed(() => AppState.next),
     previous: computed(() => AppState.previous)


   }
 }
}
</script>

<style scoped lang="scss">
.wild-zone{
  height: 100vh;
}
.active-zone{
  background-color: 	#f0f0f0;
}

</style>
