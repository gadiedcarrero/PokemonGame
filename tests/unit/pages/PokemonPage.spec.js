import PokemonPage from "@/pages/PokemonPage.vue";
import { shallowMount, mount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonPage component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de llamar mixPokemonArray al montar", () => {
    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      "mixPokemonsArray"
    );
    const wrapper = shallowMount(PokemonPage);
    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  test("debe de hacer match con el snapshot cuando cargan los pokemons", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          correctAnswer: null,
          selectedAnswer: null,
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de mostrar los componentes de PokemonPicture y PokemonOptions", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          correctAnswer: pokemons[0].id,
          selectedAnswer: pokemons[1].id,
        };
      },
    });

    const picture = wrapper.find("pokemon-picture-stub");
    const options = wrapper.find("pokemon-options-stub");

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();
    expect(picture.attributes("pokemonid")).toBe("1");
    expect(options.attributes("pokemons")).toBeTruthy();
  });

    test("pruebas con checkAnswer", async() => {
        const wrapper = shallowMount(PokemonPage, {
        data() {
            return {
            pokemonArr: pokemons,
            pokemon: pokemons[0],
            showPokemon: false,
            showAnswer: false,
            message: "",
            correctAnswer: pokemons[0].id,
            selectedAnswer: pokemons[1].id,
            };
        },
        });

        console.log(wrapper.vm)
        await wrapper.vm.checkAnswer(pokemons[0].id);
        expect(wrapper.find("h2").exists()).toBeTruthy();
        expect(wrapper.vm.message).toBe(`Correcto, ${ pokemons[0].name } es este Pokemon!`)
        await wrapper.vm.checkAnswer(pokemons[2].id);
        expect(wrapper.vm.message).toBe(`Incorrecto, era ${pokemons[0].name}!`)
     

    });




});
