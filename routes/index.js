const express =require("express");
const { Error } = require("mongoose");
const router = express.Router();

const {employees} = require("../model/employes");

//get all employees read data from data base  by usin get response


router.get("/api/employee",(req,res)=>{
    
    employees.find({},(err,data)=>{
        if(!err){
             res.send(data)
        }else{
            console.log(err);
        }
        
    });
 
})

//get data of singale user by id  and by usin get response

router.get("/api/employee/:id",(req,res)=>{

    employees.findById(req.params.id,(err,data)=>{ //here params can get data from rouetr prameter  id 
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
});
 

//creating new user to add in database by using post req
router.post("/api/employee/add",(req,res)=>{
    const emp = new employees({       // creating new model to add new data

        name:req.body.name,
        lastname:req.body.lastname,
        designation:req.body.desig,
        email:req.body.email,
        phone:req.body.phone,
        salary:req.body.salary

    })
    emp.save((err,data)=>{
       res.status(200).json({code:200,message:'employees added successfully',addemployee:data})
    })
})

// uptading user data in usr data base by using put request
router.put("/api/employee/update/:id",(req,res)=>{
   const emp ={
    name:req.body.name,
    lastname:req.body.lastname,
    designation:req.body.desig,
    email:req.body.email,
    phone:req.body.phone,
    salary:req.body.salary
   };
   employees.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,data)=>{  //using findBYIdandUpdate passing parametr is doc id , field were to update, and call back function
    if(!err){
        res.status(200).json({code:200,message:'employees Updated successfully',Updateemployee:data})
    }else{
        console.log(err)
    }
   })
});

// delete the employee from
router.delete("/api/employee/delete/:id",(req,res)=>{

    employees.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err){
            res.status(200).json({code:200,message:'employees deleted successfully',deletedemployee:data})
        }else{
            console.log(err)
        }
    })

})
module.exports = router;