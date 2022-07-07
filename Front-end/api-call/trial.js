// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("NETWORK RESPONSE ERROR");
//         }
//     })
//     .then(data => {
//         console.log(data);
//         // displayCocktail(data)
//     })
//     .catch((error) => console.error("FETCH ERROR:", error));

// // api url
// const api_url =
//     "https://jsonplaceholder.typicode.com/users";

// // Defining async function
// async function getapi(url) {

//     // Storing response
//     const response = await fetch(url);

//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         hideloader();
//     }
//     show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }

// // Function to define innerHTML for HTML table
// function show(data) {
//     let tab =
//         `<tr>
//           <th>Name</th>
//           <th>Office</th>
//           <th>Position</th>
//           <th>Salary</th>
//          </tr>`;

//     // Loop to access all rows 
//     for (let r of data.list) {
//         tab += `<tr> 
//     <td>${r.name} </td>
//     <td>${r.office}</td>
//     <td>${r.position}</td> 
//     <td>${r.salary}</td>          
// </tr>`;
//     }
//     // Setting innerHTML as tab variable
//     document.getElementById("employees").innerHTML = tab;
// }