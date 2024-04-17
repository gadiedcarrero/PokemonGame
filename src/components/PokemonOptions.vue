<template>
  <div class="options-container">
    <ul class="optionsgroup">
      <li
        :class="{
          'border-red': pokemon.id === selectedAnswer && pokemon.id !== correctAnswer,
          'border-green': pokemon.id === correctAnswer,
        }"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selectionPokemon', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PokemonOptions",
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
    correctAnswer: {
      type: Number,
    },
    selectedAnswer: {
      type: Number,
    },
  },
  methods: {},
};
</script>

<style scoped>
.border-red {
  position: relative;
}

.border-red::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -1px;
  width: 100%;
  height:100%;
  border-radius: 5px;
  border: 2px solid red;
}

.border-green {
  position: relative;
}

.border-green::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -1px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 2px solid green;
}

/* Pokemon Options */
ul {
  list-style-type: none;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  unicode-bidi: normal;
  margin-top: 20px;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
