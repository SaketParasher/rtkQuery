
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath:'pokemonApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://pokeapi.co/api/v2/'}),
    endpoints : (builder) => ({
        getPokemonByName : builder.query({
            query : (name) => `pokemon/${name}`
        })
    })
})

// Export hooks for usages in functional components, which are auto generated based on defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi; 