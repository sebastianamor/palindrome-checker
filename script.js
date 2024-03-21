const palindromeBtn = document.getElementById("check-btn")
const inputText = document.getElementById("text-input")
const resultInput = document.getElementById("result")

palindromeBtn.addEventListener("click", ()=> {
    if (inputText.value == ""){
        alert('Please input value');
    }
})