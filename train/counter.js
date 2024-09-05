
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")



let count = 0;

function increments() {
    count += 1
    countEl.textContent = count

}

function decreases(){
    count -= 1
    countEl.textContent = count
}


function data(){
    let countstr =  count + " - " 
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}


function clearAll() {
    saveEl.textContent = "Previous entries: ";
}










