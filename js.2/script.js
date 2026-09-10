let divContainer = document.querySelector("#div1");
let H3element = document.createElement("h3")

divContainer.style.backgroundColor = "yellow";

H3element.textContent = "Jesus me salvou";
divContainer.appendChild(H3element);

divContainer.setAttribute("class", "gabriel");
divContainer.setAttribute("id", "teste");

divContainer.setAttribute("gabriel", "true");
divContainer.setAttribute("teste", "futebol")

console.log(divContainer.getAttribute("teste"))
console.log(divContainer.getAttribute("class"))
console.log(divContainer.getAttribute("id"))
console.log(divContainer.getAttribute("gabriel"))

document.body.style.backgroundColor = "lightblue";

function buttonclique(){
    alert ('Butão clicado')
}


function jesus(){
    alert('Jesusssss')
}

let botão = document.querySelector("#botão2")

function showMessage(){
    console.log('Botão funciona');
    alert('Deus');
}

botão.addEventListener('click', showMessage)

let santo = document.querySelector("#spirt")

function showMessage2(){
    console.log('Deu bom');
    alert('Santo!!');
}
santo.addEventListener('click', showMessage2)

//-----------------------------------------------------------------------------------------
let inputs = document.querySelector('#valor1', '#valor2', '#valor3', '#valor4')
let laranja = document.getSelection("#divStyle")

document.getElementById('envio').remove();

divStyle.style.backgroundColor = "gold";

const Neymar2 = document.querySelector('#valor3');
const Cr7 = document.querySelector('#valor2')
const Lewa = document.querySelector('#valor4')

Neymar2.removeAttribute('placeholder')
Cr7.removeAttribute('placeholder')
Lewa.removeAttribute('placeholder')
Neymar2.value = 'Neymar';
Cr7.value = 'Cr7';
Lewa.value = 'Lewa';

inputs.setAttribute("value", "Messi")



let listaNome = [];

listaNome[0] = "João";
listaNome[1] = "Evellyn";
listaNome[2] = 'Gabriel';
listaNome[8] = 'Bia';
listaNome[9] = 'Ana';

listaNome.push('Sara');

let removido = listaNome.pop();

console.log(removido)

listaNome[20]= 'Tatiana'

function filtrarA(nome){
    if (nome.endsWith('a')) {
        return true
    }
    else {
        return false
    }
}

let listafiltroA = listaNome.filter(filtrarA)


let uppercase = listaNome.map(nome => nome.toUpperCase());
console.log(uppercase);

let semnada = listaNome.forEach(nome => console.log())

listaNome.sort()

console.log(semnada);
console.log(listafiltroA)
console.log(listaNome)
console.log(listaNome[0])



let listaNomefruta = ['banana', 'maça', 'uva', 'uva' , 'abacaxi'];
listaNomefruta[6]= 'Goiaba'
listaNomefruta[7]='pera'
listaNomefruta[26]= 'caja'
listaNomefruta.push('caju');
listaNomefruta.push('cccc');

function filtrarfruta(fruta) {
    if (fruta.startsWith('c')) {
        return true;
    }
    else{
        return false;
    }
}


let filtrofruta = listaNomefruta.filter(filtrarfruta);

//let filtrofruta = listaNomefruta.filter();
console.log(filtrofruta)

console.log(listaNomefruta)




const pessoa = {
    nome : 'Gabriel',
    idade : 18,
    profissão : 'Jovem aprendiz',
    faculdade : true, 
    namo : [{
            nome : 'ana',
            idade : '17',
            escola : true,
            gosto : true
        },
        
        {
            nome : 'Sara',
            idade : '17',
            escola : true,
            gosto : false
        },
        {
            nome : 'Evellyn',
            idade : '16',
            escola : true,
            gosto : true
        }]
}

console.log(pessoa.nome)

console.log(pessoa.namo)

//for (let i = 0; i  listaNomefruta.length; i++){
   //console.log(listaNomefruta[i])
//}

for (const parzinho of Object.entries(pessoa)){
    console.log(parzinho[0], parzinho[1])
}