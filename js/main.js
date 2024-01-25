var inp = document.querySelector('input');
var h1 = document.querySelector("h1");
var numRan = Math.floor(Math.random() * 10)
var count = 1

function fn() {
    count = count + 1
    var val = inp.value;
    if (count <= 3) {
        if (numRan > val) {
            h1.textContent = "raqami katta"
        }
        else if (numRan < val) {
            h1.textContent = "raqami kichik"
        } else if (numRan == val) {
            h1.textContent = "MALADES"
        } 
    }else {
        h1.textContent = "topa olmadin  javob (" + numRan + ")edi"
    }

    inp.value = '';
    inp.focus();
    
}
