const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require ('crypto');

const app = express();
app.use(bodyParser.json());


// Object to store all posts that are going to be posted 
const posts = {}


// handlers to send all posts that are created when a get request is intstantiated
app.get('/posts', (req, res)   => {
    res.send(posts);
});

// radnomly generate an id when someone creates a post
app.post('/posts', (req, res) =>{
    // this will give a ramndom id in hexadecimal form e.g (ldjbdklfgkhdfkdhfv)
    const id = randomBytes(4).toString('hex');
    
    const { title } = req.body;

    posts[id] = {
        id, title
    };


    res.status(201).send(posts[id]);
});


app.listen(4000, () => {
    console.log('listening on 4000');
    
});