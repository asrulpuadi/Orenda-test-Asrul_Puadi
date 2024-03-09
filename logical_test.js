const isPalindrome = (str) => {
    let reverse = str.split("").reverse().join("")

    if(str == reverse){
        return {
            input:str,
            output:true,
            explanation:`${str} reads as ${reverse} from left to right and right to left`
        }
    }else{
        return {
            input:str,
            output:false,
            explanation:`From left to right, it reads ${str}. From right to left, it becomes ${reverse}. Therefore it is not a palindrome`
        } 

    }
}

const result = isPalindrome("121")
console.log(result.input);
console.log(result.output);
console.log(result.explanation);