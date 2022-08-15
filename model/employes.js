const mongoose =require("mongoose")


//defing employ schema

const employees = mongoose.model("employee",{
    name:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    }
})

module.exports = {employees}