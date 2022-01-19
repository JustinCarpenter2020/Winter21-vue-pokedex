export default class Pokemon{
  constructor(data){
    this.name = data.name,
    this.id = data._id,
    this.img = data.img || data.sprites.other.dream_world.front_default,
    this.weight = data.weight,
    this.types = data.types
  }
}
