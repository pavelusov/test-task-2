const express = require('express');
const path = require('path');
const fs = require('fs');
const indexPage = fs.createReadStream(__dirname + '/dist/index.html');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'dist', 'assets')));

app.use('/', (req, res)=>{
    indexPage.pipe(res);
});

app.listen(PORT, ()=>{
   console.log(`server running port ${PORT}`);
});