function Hyuoka(){

    document.getElementById("hide1").style.display = "none"
    document.getElementById("hide2").style.display = "block"

    document.getElementById("Conten2").classList.add("anime-1")
    document.getElementById("Content-2").classList.add("anime-2")

    document.querySelectorAll(".Content")[0].classList.remove("anime_back_1")
    document.querySelectorAll(".Content")[1].classList.remove("anime_back_2")

}

function Spirited(){

    document.getElementById("hide2").style.display = "none"
    document.getElementById("hide1").style.display = "block"

    document.querySelectorAll(".Content")[0].classList.add("anime_back_1")
    document.querySelectorAll(".Content")[1].classList.add("anime_back_2")

    document.getElementById("Conten2").classList.remove("anime-1")
    document.getElementById("Content-2").classList.remove("anime-2")

}
function V_S(){

    document.getElementById("hide3").style.display = "none"
    document.getElementById("hide1").style.display = "block"

    document.querySelectorAll(".Content")[0].classList.add("anime-1")
    document.querySelectorAll(".Content")[1].classList.add("anime-2")

    document.getElementById("Conten3").classList.remove("anime_back_1")
    document.getElementById("Content-3").classList.remove("anime_back_2")
}

function Slient(){

    document.getElementById("hide1").style.display = "none"
    document.getElementById("hide3").style.display = "block"

    
    document.getElementById("Conten3").classList.add("anime_back_1")
    document.getElementById("Content-3").classList.add("anime_back_2")

    document.querySelectorAll(".Content")[0].classList.remove("anime_back_1")
    document.querySelectorAll(".Content")[1].classList.remove("anime_back_2")
}