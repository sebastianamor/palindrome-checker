const palindromeBtn = document.getElementById("check-btn")
const iText = document.getElementById("text-input")
const resultInput = document.getElementById("result")

function cleanInputString(srt) {
    const regex = /[_,():\/;\.{}+-\s]/g;
    return srt.replace(regex,'');
};

function arraysAreEqual(array1,array2){
    if (array1.length != array2.length) {
        return false;
    }
    for (let i = 0; i< array1.length; i++) {
        if (array1[i] !== array2[i]){
            return false;
        }
    } 
    return true;
}

const paliCheck = (input) => {
   let cleanInput = cleanInputString(input); 
   let  casedInput = cleanInput.toLowerCase();
   let arrayedInput = casedInput.split("");
   let reversedArray = arrayedInput.toReversed();

   if (arraysAreEqual(arrayedInput,reversedArray)){
    return true;
   } else {
    return false;
   }
   }

palindromeBtn?.addEventListener('click', ()=>{
    if (iText.value == "") {
        alert("please input a value");
    }else if (paliCheck(iText.value)){
     resultInput.innerText = `${iText.value} is a palindrome ` 
    } else { resultInput.innerText = `${iText.value} is not a palindrome ` 
    }
}); 