var Candydb = require('../model/model');

exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const candy = new Candydb({
        name : req.body.name,
        quantity : req.body.quantity,

    })

    // save user in the database
    candy
        .save(candy)
        .then(data => {
            //res.send(data)
            res.redirect('/add-candy');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all candy or a single candy
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Candydb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Candydb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}


// Update a new candy by id 
exports.update =(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }

  const id = req.params.id;
  Candydb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
  .then(data =>{
    if(!data){
        res.status(404).send({})
    }else{
        res.send(data)
    }
  })
  .catch(err=>{
    res.status(500).send({message:'Error updating '})
  })
}

exports.delete = (req, res)=>{
    const id = req.params.id;

    Candydb.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });

}