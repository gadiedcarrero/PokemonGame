<template>
  <div class="pokemon-container">
    <img v-if="!showPokemon" class="hidden-pokemon" :src="imgSrc" alt="pokemon" />
    <img v-else class="fade-in" :src="imgSrc" alt="pokemon" />
  </div>
</template>

<script>
export default {
  name: "PokemonPage",
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  data() {
    return {};
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  height: 200px;
  position: absolute;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
