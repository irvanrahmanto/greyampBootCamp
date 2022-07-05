function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let output = ''
            data.forEach(function (item) {
                output +=
                    `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td>${item.website}</td>
                        <td>${item.phone}</td>
                        <td>${item.address.street}</td>
                        <td>${item.address.suite}</td>
                        <td>${item.address.city}</td>
                        <td>${item.address.zipcode}</td>
                        <td>${item.address.geo.lat}</td>
                        <td>${item.address.geo.lng}</td>
                        <td>${item.company.name}</td>
                        <td>${item.company.catchPhrase}</td>
                        <td>${item.company.bs}</td>
                    </tr>
                `
            })
            document.getElementById('data').innerHTML = output
        })
        .catch((error) => {
            console.log(`Error Fetching the data : ${error}`)
            document.getElementById('country').innerHTML = 'Error Loading Data'
        })
}

fetchData()

// Delete function
function deleteRow() {
    document.getElementById("data").deleteRow(0);
    alert("Your data has been removed!");

    const del = document.getElementById("data").deleteRow(0);

    // del.remove(del.selectedIndex);
    // alert("Removed");
}