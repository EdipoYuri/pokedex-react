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