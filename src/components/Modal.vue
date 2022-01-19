<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="activePokemon">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{activePokemon.name}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {{types}}
        {{activePokemon.weight}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  setup(){
    return {
       activePokemon: computed(() => AppState.activePokemon),
       types: computed(() => {
         let template = ''
         AppState.activePokemon?.types.forEach(t => template += t.type.name + ' ')
         return template
         })
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
