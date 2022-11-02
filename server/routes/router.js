const express = require('express');
const route = express.Router();

const axios = require('axios');
const services = require('../services/render');

const controller = require('../controller/controller')

route.get('/',(req,res)=>{
    axios.get('http://localhost:3000/api/candys')
    .then(function(response){
        res.render('index',{candys:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
})

route.get('/add-candy',(req,res)=>{
res.render("add_candy");
})

/**
*  @description for update candy
*  @method GET /update-candy
*/
route.get('/update-candy', services.update_candy)

// route.get('/update-candy',(req,res)=>{
//     axios.get('http://localhost:3000/api/candys',{params:{id:req.query.id}})
//      .then(function(candydata){
//         res.render('update_candy',{candy: candydata.data});

//      })
//      .catch(err=>{
//         res.send(err)
//      })
    
// })

//API

route.post('/api/candys',controller.create);
route.get('/api/candys',controller.find);
route.put('/api/candys/:id',controller.update);
route.delete('/api/candys/:id',controller.delete);

module.exports = route

