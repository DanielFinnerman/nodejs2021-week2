// Controller

//http://localhost:3000/cat
//http://localhost:3000/cat/1
//http://localhost:3000/cat/2
'use strict';
const catModel = require('../models/catModel');

const {cats} = catModel;

const cat_list_get = (req, res) => {
    res.json(cats);
};

const cat_get = (req, res) => {
    const id = req.params.id;
    const cat = cats.filter((cat) => cat.id == id).pop();
    res.json(cat);
};


const cat_create_post = (req, res) => {
    console.log('text data:', req.body);
    console.log('file data:', req.file);
    res.send('from this endpoint you can create cat post');
}

module.exports = {
    cat_list_get,
    cat_get,
    cat_create_post,
};