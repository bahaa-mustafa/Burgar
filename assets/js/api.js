
const nav_active = document.querySelector(".nav_links")
const btns = document.querySelector(".btns")
const xhr = new XMLHttpRequest();

// let words = ['bacon', 'corn', 'potato', 'fish', 'cake', 'salad', 'chicken', 'chocolate', 'beef', 'pasta', 'pizza'];


nav_active.addEventListener("click", function (e) {

    if (e.target.tagName == "A") {
        resetActive(".nav_links a")
        e.target.classList.add("active")
    } else {
        console.log("error in select anchor tag");
    }
})

btns.addEventListener("click", function (e) {
    if (e.target.tagName == "BUTTON") {
        resetActive(".btns button")
        e.target.classList.add("active")

        getData(e.target.innerHTML.toLowerCase())
    }
})

function resetActive(item) {
    let btns = document.querySelectorAll(item)
    btns.forEach(function (element) {
        element.classList.remove("active")
    })
}


function getData(food) {    

    const api = `https://forkify-api.herokuapp.com/api/search?q=${food}`;

    xhr.open("GET", api);
    xhr.send();

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4) {
            // console.log(JSON.parse(xhr.response));
            display([])

            if (xhr.status == 200) {
                
                display(JSON.parse(xhr.response).recipes, food)
            }
            else {
                console.log("error with status");

            }
        }
    })

}

function display(list, target="pizza") {
    let cards = '';
    for (let i = 0; i < list.length; i++) {
        cards += `<div class="card d-flex flex-column px-5 col-sm-3 col-xl-2">
                <img src="${list[i].image_url}">
                <h3>${list[i].title.split(" & ").splice(0, 2).join("_&").split(" and ").splice(0, 2).join("_and_").split("-").splice(0, 2).join(" ").split(" ").splice(0, 2).join(" ").split("_&").splice(0, 2).join(" & ").split("_and_").splice(0, 2).join(" and ").split(" ").splice(0, 3).join(" ")}</h3>
        </div>`;
    }
    document.getElementById("cards").innerHTML = cards
    document.querySelector(".head_card h3").innerHTML = `${target} menu`
}

getData("pizza")