var elTitle = document.querySelector('.title');
var elForm = document.querySelector('form');
var elSelect = document.querySelector('.select');



elForm.addEventListener('submit', function (btn) {
    btn.preventDefault()
    var inp1 = document.querySelector('.inp1').value * 1
    var inp2 = document.querySelector('.inp2').value * 1
    var result;

    if (elSelect.value == '+') {
        result = inp1 + inp2 
    } else if (elSelect.value == '-') {
        result = inp1 - inp2
    } else if (elSelect.value == '/') {
        result = inp1 / inp2
    } else if (elSelect.value == '*') {
        result = inp1 * inp2
    } else {
        h1.textContent = "raqam emas"
    }

    elTitle.textContent = result
})
