import pokemonApi from "@/api/pokemonApi";


describe('pokemonApi', () => { 

    test('axios debe estar configurado con la URL base de la API de Pokemon', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
        
    })

 })