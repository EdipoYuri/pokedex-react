const url = 'https://pokeapi.co/api/v2';

export const getPokemon = async (filter: string, value: string) => {
  try{
    const response = await fetch(`${url}/${filter}/${value}`);
    const json = await response.json();
    return json;
  }catch(error){
    console.error(error);
  }
}

export const getPokemonRange = async (initialRange: number, finalRange: number) => {
  try{
    const response = await fetch(`${url}/pokemon?offset=${initialRange}&limit=${finalRange}`);
    const json = await response.json();
    return json.results;
  }catch(error){
    console.error(error);
  }
}