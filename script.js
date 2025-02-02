let a = document.querySelector('#a')
let b = document.querySelector('#b')
let values = document.querySelector('#values')
let btn = document.querySelector('#btn')
let res = document.querySelector('#result')
let delbtn = document.querySelector('#delbtn')



btn.addEventListener('click', ()=> {
if (values.value == '+') {
    let aplus = Number(a.value)
let bplus = Number(b.value)
    res.textContent = `RESULT - ${aplus+bplus}`
} else if(values.value == '-') {
    let aminus = Number(a.value)
    let bminus= Number(b.value)
        res.textContent = `RESULT - ${aminus-bminus}`
} else if(values.value == '*') {
    let amulty = Number(a.value)
    let bmulty = Number(b.value)
        res.textContent = `RESULT - ${amulty * bmulty}`
} else if(values.value == '/') {
    let adivide = Number(a.value)
    let bdivide = Number(b.value)
        res.textContent = `RESULT - ${adivide/bdivide}`
}
})


delbtn.addEventListener('click', ()=> {
    a.value == 0;
})

