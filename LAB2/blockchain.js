
import SHA256 from 'crypto-js/sha256.js';
import crypto from 'crypto'
import Base58 from "base-58";

var date_time = new Date();




class Transaction {
    constructor(amount, sender, recipient) {
      this.amount = amount;
      this.sender = sender;
      this.recipient = recipient;
    }
  }
  
  class Block {
    constructor(timestamp, transactions, previousHash = '') {
      this.timestamp = date_time;
      this.transactions = transactions;
      this.previousHash = previousHash;
      this.hash = this.calculateHash();
    }
  
    calculateHash() {
      return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions)).toString();
    }
  }
  
  class Blockchain {
    constructor() {
      this.chain = [this.createGenesisBlock()];
    }
  
    createGenesisBlock() {
      return new Block('01/01/2022', [], '0');
    }
  
    getLatestBlock() {
      return this.chain[this.chain.length - 1];
    }
  
    addBlock(newBlock) {
      newBlock.previousHash = this.getLatestBlock().hash;
      newBlock.hash = newBlock.calculateHash();
      this.chain.push(newBlock);
    }
  }
  

  class Wallet {
    constructor() {
      const keyPair = generateKeyPair();
      this.privateKey = keyPair.privateKey;
      this.publicKey = keyPair.publicKey;
    }
  }
  

  function generateKeyPair() {
    const keyPair = {};
    const keys = crypto.generateKeyPairSync("rsa",{
        modulusLength:512,
        publicKeyEncoding:{type:"spki", format:"pem"},
        privateKeyEncoding:{type:"pkcs8", format:"pem"}
    });

    keyPair.privateKey=keys.privateKey;
    keyPair.publicKey=keys.publicKey;
    return keyPair;
  }
  

  const professorWallet = new Wallet();
  const studentWallet = new Wallet();
  const cryptoWhaleWallet = new Wallet();
  
 
  const myCoin = new Blockchain();
  
 
  const tx1 = new Transaction(100, professorWallet.publicKey, studentWallet.publicKey);
  const tx2 = new Transaction(50, studentWallet.publicKey, cryptoWhaleWallet.publicKey);
  const tx3 = new Transaction(75, cryptoWhaleWallet.publicKey, professorWallet.publicKey);
  

  const block1 = new Block(Date.now(), [tx1, tx2]);
  const block2 = new Block(Date.now(), [tx3]);
  
 
  myCoin.addBlock(block1);
  myCoin.addBlock(block2);
  
 
  console.log(JSON.stringify(myCoin, null, 4));

//   console.log(professorWallet.publicKey);
//   console.log(studentWallet.publicKey);