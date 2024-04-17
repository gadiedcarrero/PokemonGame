import PokemonOptions from "@/components/PokemonOptions";
import { shallowMount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
        correctAnswer: 1,
        selectedAnswer: 2
      },
    });
  });

  test("debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe mostrar las 4 opciones", () => {
    const liTags = wrapper.findAll("li");
    expect(liTags.length).toBe(4);
    expect(liTags[0].text()).toBe(pokemons[0].name);
    expect(liTags[1].text()).toBe(pokemons[1].name);
    expect(liTags[2].text()).toBe(pokemons[2].name);
    expect(liTags[3].text()).toBe(pokemons[3].name);
  });

  test('debe emitir "selectionPokemon" con sus respectivos parametros al hacer click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");
    li1.trigger("click");
    li2.trigger("click");
    li3.trigger("click");
    li4.trigger("click");
    
    expect(wrapper.emitted("selectionPokemon").length).toBe(4);
    expect(wrapper.emitted("selectionPokemon")).toEqual([
      [pokemons[0].id],
      [pokemons[1].id],
      [pokemons[2].id],
      [pokemons[3].id],
    ]);
  });

  test("debe comprobar que el primer li tenga la clase border-green", () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");
    expect(li1.classes("border-green")).toBeTruthy();
    expect(li2.classes("border-red")).toBeTruthy();
  });
});
