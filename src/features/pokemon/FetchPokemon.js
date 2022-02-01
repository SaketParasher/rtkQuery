
import React from 'react';
import { useGetPokemonByNameQuery } from '../../services/pokemon';

const FetchPokemon = ({name,pollingInterval}) => {
    const { data, error , isLoading} = useGetPokemonByNameQuery(name,{pollingInterval});
    console.log("DATA :- ",data);

    return <div>
        {error ?(<>OH no, there was an error</>) : isLoading ? (<>Loading...</>) : data ? (
            <>
                <h3>{data.species.name}</h3>
                <img src={data.sprites.front_shiny} alt={data.species.name}/>
            </>
        ):null}
    </div>;
};

export default FetchPokemon;
