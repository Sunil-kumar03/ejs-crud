//import the model in controller
const User = require('../model/userModel')

const userController={
    index:(req,res)=>{
        res.render('index.ejs')
    },
    new:(req,res)=>{
        res.render('create.ejs')
    },
    edit:(req,res)=>{
        res.render('edit.ejs')
    },
    //we create data a new controller to handler incoming data from front end
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
    pnf:(req,res)=>{
        res.render('pnf.ejs')
    }
}

module.exports = userController