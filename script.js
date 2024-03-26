const palindromeBtn = document.getElementById("check-btn")
const iText = document.getElementById("text-input")
const resultInput = document.getElementById("result")

function cleanInputString(srt) {
    const regex = /[+-\s]/g;
    return srt.replace(regex,'');
}
const paliCheck = (input) => {
    let cleanInput = cleanInputString(input); 
   let  casedInput = cleanInput.toLowerCase();
   let arrayedInput = casedInput.split("");
   let reversedArray = arrayedInput.reverse();

   if (arrayedInput === reversedArray ){
    return true ;
   } else {
    return false ; 
   }
}; 

palindromeBtn?.addEventListener('click', () => {
    if (iText.value == "") {
        alert("pleace input a value");
    }else if (paliCheck(iText.value)){
     resultInput.innerText = `${iText.value} is a palindrome ` 
    } else { resultInput.innerText = `${iText.value} is not a palindrome ` 
    }
}); 