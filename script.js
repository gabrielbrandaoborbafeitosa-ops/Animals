const input = document.getElementById("input");
input.addEventListener("input", () => {
  input.value = input.value.toUpperCase();
});
let animal = document.getElementById("input").value;
let mudarpsom = document.getElementById('txtsom');
function enter() {
    animal = document.getElementById("input").value;
    //verificar e imitar inicio
if (animal == 'CACHORRO') {
mudarpsom.innerText = 'au au'
} else if (animal == 'GATO') {
    mudarpsom.innerText = 'miau'
} else if (animal == 'TARTARUGA') {
    mudarpsom.innerText = 'Tartaruga não faz som.'
} else if(animal == 'PEIXE') {
    mudarpsom.innerText = 'Peixe não faz som.'
} else if(animal == 'CARANGUEJO') {
    mudarpsom.innerText = 'Caranguejo não faz som.'
} else if (animal == 'PINTO' || animal == 'PINTINHO') {
    mudarpsom.innerText = 'piu piu'
} else if (animal == 'DINOSSAURO') {
    mudarpsom.innerText = 'Dinossauro não faz som.'
} else if(animal == 'GALINHA' || animal == 'GALO') {
    mudarpsom.innerText = 'có có cocorocó'
} else if(animal == 'PÁSSARO' || animal == "PASSARO" || animal == 'PASSARINHO' || animal == 'BEM-TE-VI' || animal == 'BEM TE VI') {
    mudarpsom.innerText = 'piu'
} else if(animal == 'PATO') {
mudarpsom.innerText = 'quack'
} else if(animal == 'VACA') {
    mudarpsom.innerText = 'muuuuuuuuuuuuuuuu'
} else {
    mudarpsom.innerText = 'Erro: Animal não encontrado. Exemplos de animais suportados: GALO, GATO e CACHORRO.'
}
    //verificar e imitar fim
}
input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    enter();
  }
});
