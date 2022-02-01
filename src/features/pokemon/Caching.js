import React from 'react';
import { useGetPokemonByNameQuery } from '../../services/pokemon';

const Caching = ({name}) => {
    const { data, error, isLoading, isFetching, refetch } = useGetPokemonByNameQuery(name)
  return (
        <div style={{ float: 'left', textAlign: 'center' }}>
        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (
            <>
            <h3>{data.species.name}</h3>
            <div>
                <img src={data.sprites.front_shiny} alt={data.species.name} />
            </div>
            <div>
                <button onClick={refetch} disabled={isFetching}>
                {isFetching ? 'Fetching...' : 'Refetch'}
                </button>
            </div>
            </>
        ) : (
            'No Data'
        )}
        <hr/>
        </div>
  );
};

export default Caching;
