
const {foods} = require('../models')
module.exports ={
    

getAll: (req, res)=> {
    foods.findAll()
    .then((data)=>{
        res.send({
            msg: 'succes get all data ',
            status :200,
            data 
        })
    })
    .catch ((err) => {
        res.send({
            msg:'eror get all data ',
            status : 500,
            err
        })
    })
},
postData :(req, res)=> {
    let {body} = req;
    const newData = {
        ...body,
        image: req.image.url,
    };
    foods.create(newData)
    .then((data)=>{
        res.send({
            msg: 'succes get all data ',
            status :200,
            data 
        })
    })
    .catch ((err) => {
        res.send({
            msg:'eror get all data ',
            status : 500,
            err
        })
    })
},
editData :(req, res)=> {
    const {body} = req;
    const{id}= req.params;
    foods.update(body, {
        where: {id}
    })
    .then((data)=>{
        res.send({
            msg: 'succes get all data ',
            status :200,
            data 
        })
    })
    .catch ((err) => {
        res.send({
            msg:'eror get all data ',
            status : 500,
            err
        })
    })
},
delete:(req, res )=>{
    const {id} =req.params;
    foods.destroy({
        where: {id}
    })
    .then((data)=>{
        res.send({
            msg: 'succes delet ',
            status :200,
            data 
        })
    })
    .catch ((err) => {
        res.send({
            msg:'eror delete ',
            status : 500,
            err
        })
    })
}
}


