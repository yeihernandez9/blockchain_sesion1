const Block = require('./block');
const Blockchain = require('./blockchain.js');

let myBlockchain = new Blockchain();
myBlockchain.addBlock(new Block(1, "20/09/2024", {amount: 10}));
myBlockchain.addBlock(new Block(2, "21/09/2024", {amount: 13}));
myBlockchain.addBlock(new Block(3, "22/09/2024", {amount: 3}));
myBlockchain.addBlock(new Block(4, "23/09/2024", {amount: 100}));
myBlockchain.addBlock(new Block(5, "24/09/2024", {amount: 20}));

console.log(JSON.stringify(myBlockchain, null, 4));
console.log('Is Blockchain valid?' + myBlockchain.isChainValid());

console.log(":::::::::::::::GET BLOCK:::::::::::::::::");
console.log(myBlockchain.getBlock(5));