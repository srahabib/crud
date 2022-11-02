const axios = require('axios');


exports.update_candy = (req, res) =>{
    axios.get('http://localhost:3000/api/candys', { params : { id : req.query.id }})
        .then(function(candydata){
            res.render("update_candy", { candy : candydata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}