<template>
  <div class="component" v-if="activePokemon">
   <img :src="activePokemon.img" alt="">
   <p>{{activePokemon.name}}</p>
   <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#activePokemon">DETAILS</button>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  setup(){
    return {
      activePokemon: computed(() => AppState.activePokemon)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
