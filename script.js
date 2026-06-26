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
} else if(animal == 'ORNITORRINCO') {
    alert('Animal raro!');
    mudarpsom.innerText = 'Raro: ornitorrinco'
} else if(animal == 'PANTERA') {
    alert('Animal raro!')
    mudarpsom.innerText = 'Raro: pantera'
} else if (animal == 'POU') {
    alert('Pou não é animal, mas vai ter o som! (Animal raro)')
    mudarpsom.innerText = 'nhá! (Raro: pou)'
} else if(animal == 'boi') {
    mudarpsom.innerText = 'moooooo'
} else if(animal == 'CORVO') {
    alert('Secreto número 1/4')
    mudarpsom.innerText = 'Secreto n1'
} else if(animal == 'TIGRE') {
    alert('Secreto número 2/4')
    mudarpsom.innerText = 'Secreto n2'
} else if(animal == 'T-REX') {
    alert('Secreto 3/4')
    mudarpsom.innerText = 'Secreto n3'
} else if(animal == 'CAVALO') {
    mudarpsom.innerText = 'Cavalo não faz som.'
} else if(animal == 'COELHO') {
    mudarpsom.innerText = 'Coelho não faz som.'
} else if(animal == 'PORCO') {
    mudarpsom.innerText = 'oinc'
} else if(animal == 'OVELHA') {
    mudarpsom.innerText = 'bééééééééé'
} else if(animal == 'ABELHA') {
    mudarpsom.innerText = 'bzzzzzzzzzzzzz'
} else if(animal == 'PANGOLIM') {
alert ('Secreto 4/4')
mudarpsom.innerText = 'Secreto n4'
}
else {
    mudarpsom.innerText = 'Erro: Animal não encontrado. Exemplos de animais suportados: GALO, GATO e CACHORRO.'
}
    //verificar e imitar fim
}
input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    enter();
  }
});
