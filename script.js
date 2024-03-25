const palindromeBtn = document.getElementById("check-btn")
const inputText = document.getElementById("text-input")
const resultInput = document.getElementById("result")

function cleanInputString(srt) {
    const regex = /[+-\s]/g;
    return srt.replace(regex,"");
}
const paliCheck = (input) => {
    let cleanInput = cleanInputString(input); 
   let  casedInput = cleanInput.toLowerCase();
   let arrayedInput = casedInput.split("");
   let reversedArray = arrayedInput.reverse();

   if (arrayedInput === reversedArray){
    return true ;
   } else {
    return false ; 
   }
};

palindromeBtn?.addEventListener( 'click', () => {
    if (inputText.value == "") {
        alert("pleace input a value");
    }else if (paliCheck(inputText.value)){
     resultInput.innerText = `${inputText.value} is a palindrome ` 
    } else { resultInput.innerText = `${inputText.value} is not a palindrome ` 
    };
});