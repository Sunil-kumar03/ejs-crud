//import the model in controller
const User = require('../model/userModel')
/*in mvc architecture view contains the frontend and we have to establish the connection between view and controller
 which is done by with res.render after the establish connectivity we will send and receive the response */
const userController={
    index:(req,res)=>{
        res.render('index.ejs')  /*it is used to render(display) the view.and help us to receive the request + data and sending response to the view */
    },
    new:(req,res)=>{
        res.render('create.ejs')
    },
    edit:(req,res)=>{
        res.render('edit.ejs')
    },
    //we create data a new controller to handler incoming data from front end
    //api controller -> which handles post request
    newUser:async (req,res)=>{
        try {
            const newUser = req.body // receive data from front end

            //email exist or not
            const extEmail = await User.findOne({email:newUser.email})
            if (extEmail)
                return res.status(401).json({msg:`${newUser.email} already exists.`})

            //mobile exist  or not
            const extMobile = await User.findOne({mobile:newUser.mobile})
                if(extMobile)
                    return res.status(401).json({msg:`${newUser.mobile}already exists`})

            await User.create(newUser) // to create new user data

            return res.status(200).json({msg:"User created successfully",newUser})
        } catch (err) {
            console.log(err) // exception handling
        }
    },
    readUser:async (req,res)=>{
        try {
            /*
                200 => status ok
                400 => bad request
                401 => unauthorized
                404 => path not found
                505 => server not found
             */
            let users = await User.find()
                res.status(200).json({length: users.length,users})
        } catch (err) {
           //500 => internal server error
           return res.status(500).json({msg:err.message}) 
        }
    },
    pnf:(req,res)=>{
        res.render('pnf.ejs')
    }
}

module.exports = userController