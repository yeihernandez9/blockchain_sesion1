
const Block = require('./block');

class Blockchain{

    constructor(){
        this.chain = [this.crateGenesisBlock()];
    }

    crateGenesisBlock( ) {
        return new Block(0,"20/08/2024", "Genesis Block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock)
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousHash = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;    
            }

            if(currentBlock.previousHash !== previousHash.has){
                return false
            }
        }
        return true;
    }

    getBlock(index){
        if(index < 0 || index >= this.chain.length){
            return false;
        }
      return this.chain[index];
    }
}

module.exports = Blockchain;