import fetch from "node-fetch";

async function getData() {
  // Print the JSON
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await response.json();
  console.log(data);

  //   Print the HTML
  //   const response = await fetch("https://github.com/");
  //   const body = await response.text();
  //   console.log(body);
}

getData();
