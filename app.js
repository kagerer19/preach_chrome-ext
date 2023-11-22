let myLoadouts = [];
const input_el = document.getElementById("input-el");
const input_btn = document.getElementById("input-btn");
const ul_el = document.getElementById("ul-el");

localStorage.setItem("Loadout", JSON.stringify(myLoadouts));

let loadout = JSON.parse(localStorage.getItem("Loadout"));

console.log(loadout);
input_btn.addEventListener("click", function () {
    myLoadouts.push(input_el.value);
    input_el.value = "";
    renderLeads();
});

function renderLeads(key, value) {
    let listItems = "";
    for (let i = 0; i < myLoadouts.length; i++) {
        listItems += `
        <li>
                <a href=${myLoadouts[i]} target=_blank>
                    ${myLoadouts[i]}
                </a>
        </li>`;
    ul_el.innerHTML = listItems;
    }
}

// 1. Turn the myLoadouts string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string