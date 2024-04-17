<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>Que Pokemon es este?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" :correctAnswer="correctAnswer" :incorrectAnswer="incorrectAnswer" @selection-pokemon="checkAnswer" />
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame" >Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

/* console.log(getPokemonOptions()) */
export default {
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      correctAnswer: null,
      incorrectAnswer: null,
    };
  },
  methods: {
    async mixPokemonsArray() {
      this.pokemonArr = await getPokemonOptions();

      const random = Math.floor(Math.random() * this.pokemonArr.length);
      this.pokemon = this.pokemonArr[random];
    },

    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;
      this.correctAnswer = this.pokemon.id;
      this.incorrectAnswer = pokemonId;
      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name} es este Pokemon!`;
      } else {
        this.message = `Incorrecto, era ${this.pokemon.name}!`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonsArray();
    },
  },
  mounted() {
    this.mixPokemonsArray();
  },
};
</script>

<style></style>
