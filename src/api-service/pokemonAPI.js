import * as axiosModule from 'axios'
const axios = axiosModule.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: {
        "Access-Control-Allow-Origin": true
    },
  });


export default class PokemonAPI {

    async getPokemonLimit() {
        return await axios.get(`/pokemon/`)
            .then(res => {
                if (res.status !== 200) {
                    return {error: true, responseStatus: res.status};
                }

                return res.data.count;
            })
            .catch(error => {
                throw new Error(`Error appear - code ${error}`)
            })
    }

    async getAllPokemons(limit) {
        return await axios.get(`/pokemon/?offset=&limit=${limit}/`)
            .then(async res => {
                if (res.status !== 200) {
                    return {error: true, responseStatus: res.status};
                }

                let pokemons = await res.data.results.map(async pokemon => await axiosModule.get(pokemon.url)
                    .then(pokemonResp => {
                        return this._transformPokemonToHaveOnlyMainData(pokemonResp.data);
                    }));

                return Promise.all(pokemons);
            })
            .catch(error => {
                console.log(error);
                throw new Error(`Error appear - code ${error}`)
            })
    }

    async getPokemonsInRange(offset = 0, limit = 20) {
        return await axios.get(`/pokemon/?offset=${offset}&limit=${limit}/`)
            .then(async res => {
                if (res.status !== 200) {
                    return {error: true, responseStatus: res.status};
                }

                let pokemons = await res.data.results.map(async pokemon => await axiosModule.get(pokemon.url)
                    .then(pokemonResp => {
                        return this._transformPokemonData(pokemonResp.data);
                    }));

                return Promise.all(pokemons);
            })
            .catch(error => {
                throw new Error(`Error appear - code ${error}`)
            })
    }

    getPokemonByID = async (id) => {
        return await axios.get(`/pokemon/${id}/`)
            .then(res => {
                if (res.status !== 200) {
                    return {error: true, responseStatus: res.status};
                }

                return this._transformPokemonData(res.data);
            })
            .catch(error => {
                throw new Error(`Error appear - code ${error}`)
            })
    }    
    
    async getPokemonByName(name) {
        return await axios.get(`/pokemon/${name}/`)
            .then(res => {
                if (res.status !== 200) {
                    return {error: true, responseStatus: res.status};
                }

                return this._transformPokemonData(res.data);
            })
            .catch(error => {
                throw new Error(`Error appear - code ${error}`)
            });
    }
    

    _transformPokemonData = (data) => {
        return {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            stats: data.stats,
            abilities: data.abilities,
            isDefault: data.is_default,
            sprites: data.sprites,
            image: data.sprites.other["official-artwork"].front_default,
            moves: data.moves
        }
    }

    _transformPokemonDataDescription = (data) => {
        const validEffectDesc = data.effect_entries.find(variant => {
                if (variant.language.name == "en") {
                    return variant.effect;
                }
            });

        return {
            description: validEffectDesc.effect,
            shortDescription: validEffectDesc.short_effect
        }
    }

    _transformPokemonToHaveOnlyMainData = (data) => {
        return {
            id: data.id,
            name: data.name,
        }
    }
}