const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login')
}

exports.register = async function(req, res){
    try {
        const login = new Login(req.body)
        await login.register()
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors)
            await req.session.save();
            return res.redirect('index'); // estava tentando com 'back' porem não estava funcionando, e com index, funcionou
            return
        }

        req.flash('success', 'Seu usuário foi criado com sucesso')
            await req.session.save();
            return res.redirect('index'); // estava tentando com 'back' porem não estava funcionando, e com index, funcionou
    }catch(e){
        console.log(e)
        return res.render('404')
    }
    
}