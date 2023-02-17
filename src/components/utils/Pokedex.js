import axios from 'axios';

const MIN = 1;
const MAX = 898;

// returns array of objects containing the name and image URL of each pokemon
const getRandomPokemon = async (quantity) => {
	const maxOffset = MAX - quantity;
	const offset = Math.floor(Math.random() * maxOffset);
	const response = await axios.get(
		`https://pokeapi.co/api/v2/pokemon?limit=${quantity}&offset=${offset}`
	);
	const pokemonList = response.data.results;

	// extract name and image URL of each pokemon (array index [6] accesses pokemon ID)
	const randomPokemon = pokemonList.map((pokemon) => {
		return {
			name: pokemon.name,
			imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				pokemon.url.split('/')[6]
			}.png`,
		};
	});
	console.log(randomPokemon);
	return randomPokemon;
};
