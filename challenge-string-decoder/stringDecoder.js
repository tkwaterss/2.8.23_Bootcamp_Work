const decoder = (code) => {
    let index = 0;
    code.split('');
    result = [];
    while (index < code.length) {
        index += (parseInt(code[index]) + 1);
        result.push(code[index]);
        index++;
    }
    return result.join('');
}
// if(renum.test(code[index])) {
//     console.log(code[index])
//     index += code[index] + 1;
//     result.push(code[index]);
//     index++;
// }

console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('3vdfn'))
console.log(decoder('2bna0p1mp2osl0e'))
console.log(decoder('0y4akjfe0s'))


// const decoder = str => {
//     let result = '';

//     for (let i = 0; i < str.length; i++){
//         console.log(str[i])
//         let currentValue = parseInt(str[i])
//         console.log(currentValue)
//         if(!isNaN(str[i])) {
//             console.log(i)
//             i += currentValue;
//             console.log('=====')
//             console.log(i)
//         } else {
//             result += str[i];
//         }
//     }

//     return result;
// }

// console.log(decoder('0h2xce5ngbrdy'))