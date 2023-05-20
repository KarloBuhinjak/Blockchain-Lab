import NodeRSA from 'node-rsa';

const key = new NodeRSA({b: 1024});
const text = 'Hello World!';


var public_key = key.exportKey('public');
var private_key = key.exportKey('private');

// console.log("Public key: " + public_key +"/n");
// console.log("Private key: " + private_key +"/n");


let key_private = new NodeRSA(private_key);
let key_public = new NodeRSA(public_key);

var encryptedString = key_public.encrypt(text, 'base64');
var decryptedString = key_private.decrypt(encryptedString, 'utf8');


console.log(encryptedString);
console.log(decryptedString);


