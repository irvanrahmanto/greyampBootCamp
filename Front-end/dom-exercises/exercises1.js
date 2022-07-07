function removeOption() {
    const x = document.getElementById("irvanButton");
    x.remove(x.selectedIndex);
    alert("Removed");
}

function addOption() {
    // let newElm = document.getElementById("phone");
    // let option = document.createElement("option");
    // option.text = "samsung"
    // option.value = "samsung"
    // newElm.add(option);

    var ddl = document.getElementById("Select");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("txtText").value;
    ddl.options.add(option);
}