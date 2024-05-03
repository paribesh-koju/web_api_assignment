//Make a function (logic)

const userModel = require('../models/usermodels')

//Creating user function
const createUser = async(req, res) => {
    // Get data form the user (Fname, lname, email, password)
    console.log(req.body)
    // #Destructuring
    const {name, phone, email} = req.body;
    // Validation
    if(!name || !phone || !email){
        return res.json({
            "success " : false,
            "message" : "Please enter all field !!....."
        })
    }
        // try - Catch (Error handling)
    try{
 // if not : send the response and stop the process 
    // if proper data 
    // check existing user 
    const existingUser = await userModel.findOne({
        phone : phone
    })
    if(existingUser){
        return res.json({
            "success" : false,
            "message" : "User Already Exist!..."
        })
    }
        // if yes : send the response and stop the process
        // if not : save in the database 
    const newUser = new userModel({
        //fields : Values received from user
        name : name,
        phone : phone,
        email : email
    })
    //Actually save the database
    await newUser.save()
    
    // send the success response 
    res.json({
        "success" : true,
        "message" : "User Create Successfully!.."
    })
    }catch(error){
        console.log(error)
        res.json({
            "success" : false,
            "message" : "Internal Server Error"
        })
    }
       
}

//Login
//Update profile 
//Change password

//Exporting
module.exports = {
    createUser
}