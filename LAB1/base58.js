import { binary_to_base58, base58_to_binary} from "base58-js";

const ferit = "FERIT";
const feritASCIIarr = [];


for(let i = 0; i < ferit.length; i++){
    feritASCIIarr.push(ferit.charCodeAt(i));
}

console.log(feritASCIIarr);
const str = binary_to_base58(feritASCIIarr);
console.log(str);

const bin = base58_to_binary(str);
console.log(bin);

const decrypted = [];
for(let i = 0; i < bin.length; i++){
    console.log(String.fromCharCode(bin[i]));
}





