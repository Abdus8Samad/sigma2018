const express = require('express'),
app = express(),
morgan = require('morgan'),
path = require('path'),
PORT = process.env.PORT || 8080;
require('dotenv/config');

app.use(express.static(path.join(__dirname,'')));
app.set('view engine','ejs');
app.use(morgan('dev'));
// app.use(cookieParser());
// app.use(expressSession({
//     secret:'My secret !!',
//     resave:true,
//     saveUninitialized:true,
//     cookie:{
//         httpOnly:true,
//         sameSite:'strict'
//     }
// }))
// app.use(flash());
// app.use((req,res,next) =>{
//     req.user = req.cookies['user']
//     res.locals.error = req.flash('error')
//     res.locals.success = req.flash('success')
//     next();
// })

const indexRoutes = require('./routes/index');
app.use('/',indexRoutes);

app.listen(PORT,() => console.log(`Server Listening at port ${PORT}`));