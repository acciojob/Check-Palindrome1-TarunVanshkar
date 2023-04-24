// complete the given function

function palindrome(str){
	str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); 
    let n=str.length;
    for(let i=0; i<n; i++)
    {
        if(str[i]!=str[n-1-i])
        {
            return false;
        }
    }
    return true;
}
module.exports = palindrome
