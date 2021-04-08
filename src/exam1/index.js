function roman(value) {
    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for(let i = 0; i<value.length; i++){
                const cur = sym[value[i]] ;
        const next = sym[value[i+1]];
        if(cur < next){
            result += next - cur; // IV -> 5 - 1 = 4
        }
        else{
            result += cur;
        }
    }
    
    return result ;
    
}
// console.log(roman("III"));
module.exports = {
    roman: roman,
};
