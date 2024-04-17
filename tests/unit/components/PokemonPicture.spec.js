import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture";

describe("PokemonPicture component", () => {

    test('Debe de hacer un match con el snapshot', () => { 
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
     })

     test('Debe de mostrar la imagen oculta y el pokemon 100', () => { 
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })
     
        const img = wrapper.find('img')
        expect(img.exists()).toBeTruthy()
        expect(img.classes('hidden-pokemon')).toBeTruthy()     
        expect(img.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
      })

      test('Debe de mostrar el pokemon si showPokemo:true', () => { 
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })
        
        const img = wrapper.find('img')
        expect(img.exists()).toBeTruthy()
        expect(img.classes('fade-in')).toBeTruthy()

       })



});