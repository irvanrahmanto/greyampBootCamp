import fetch from "node-fetch";

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
  .then((data) => {
    let array = [];
    for (let i = 0; i < data.stats.length; i++) {
      array.push(data.stats[i].stat.name);
      // console.log(array);
      pokemonStats(array);
    }
  });

// function for printing in the html
const pokemonStats = (pokemonStatsInfo) => {
  const allStats = document.getElementById("poke-screen-id");
  allStats.value = `Stats: ${pokemonStatsInfo}`;
};
