var lengthOfLastWord = function(s) {
    let count=0

    for (let i=s.length-1;i>=0;i--){
        if (s[i]!==' ') {
            for (let j=i;j>=0;j--) {
                if (s[j]!==' ') {
                    count++
                } else return count
            }return count
        }
    }
}
