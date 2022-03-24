const e = require('express')
const jwt = require('jsonwebtoken')

module.exports ={
    checkLogin : ((req, res, jwt )=>{
        if (!baerer) {
            res.status(404).send({
                msg : "connect acces",
                status: 404,
                eror :"You must login "
            })
        }else {
            const tokken = baerer.spilit("")[1]
            try{
                const decodedtoken =jwt.verify(token, process.env.SECRET_KEY)
                req.decodedtoken=decodedtoken
                next()

            }catch(error){
                res.status(401).send ({
                    msg :" coonct acccest ",
                    status: 401,
                    error:"invalid "
                })
            }
        }
    })
}