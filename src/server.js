const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const Block = require('./block');

const app = express();
const port = 3000;

const myBlockchain = new Blockchain();

app.use(bodyParser.json());

//Api para obtener la cadena completa
app.get('/chain',(req, res) => {
    res.json(myBlockchain.chain);
});

//Api para agregar nuevos bloques a la cadena
app.post('/addBlock',(req, res)=>{
    const newBlock = new Block(
        myBlockchain.chain.length,
        new Date().toISOString(),
        req.body.data
    );

    myBlockchain.addBlock(newBlock);
    res.json(newBlock);
})


//Api para obtener un bloque en especifico
app.get('/getBlock/:index',(req,res) =>{
    const index = parseInt(req.params.index,10);
    const block = myBlockchain.getBlock(index);
    if(block){
        res.json(block);
    }else{
        res.status(404).send('Block not found');
    }
});


//Api para validar la cadena
app.get('/isChainBlock', (req,res)=>{
    const isValid = myBlockchain.isChainValid();
    res.json({isValid});
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});