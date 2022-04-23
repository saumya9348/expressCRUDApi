//for db uses the func gonna send a pomice to handle that we are adding this middleware
// npm i express-async-handler
const asynHandeller = require("express-async-handler"); 
// import goal model 
const Goal= require("../model/goalsM");

const getGoals = async(req,res)=>{
    
        const goals = await Goal.find();
        // let xx = await goals.json();
        console.log(`ur data is ${goals}`);
        res.json({message:goals});

}

const setGoals = async (req,res)=>{
    if(!req.body.name){
        res.status(400)
        throw new Error("Please add a text")
    }else{
        const setGoal = await Goal.create(
            {
                name : req.body.name,
                age  : req.body.age,
                phno : req.body.phno,
                text : req.body.text,
            }
        );
        res.json({message:"Saved Succesfully",data:setGoal});
    }
}

const updateGoals = async (req,res)=>{

    if(!req.params.id){
        throw new Error("Please send id")
    }else{

        const updateID = await Goal.findById(req.params.id);
        if(!updateID){
            res.status(400);
            throw new Error("Id not found")
        }
        let formData = {
            name : req.body.name,
            age  : req.body.age,
            phno : req.body.phno,
            text : req.body.text,
        }
        console.log(req.body.name);
        const updateGoal = await Goal.findByIdAndUpdate(req.params.id,formData);

        res.status(200).json({message:"Updated sucessfully",id:req.params.id,updatedData:updateGoal});

    }

}

const deleteGoals = async (req,res)=>{
    const deleteID = Goal.findById(req.params.id);
    if(!deleteID){
        res.status(200);
        throw new Error("Deleted Id is invalid")
    }else{

    await deleteID.remove();
    res.json({message:`Yours goal id ${req.params.id} removed sucessfully`});

    }
}

module.exports = { getGoals , setGoals , updateGoals , deleteGoals } ;