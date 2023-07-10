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
    pnf:(req,res)=>{
        res.render('pnf.ejs')
    }
}

module.exports = userController