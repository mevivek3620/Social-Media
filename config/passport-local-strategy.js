const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy; 

const User = require('../models/user');

// done is a passport function which takes two args err and user
// 

passport.use(new LocalStrategy({
        usernameField:'email'
    },function(email,password,done){
        // find a auser and check its password
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('Error in finding user',err);
                return done(err);
            }
            if(!user || user.password != password){
                console.log('Invalid password');
                return done(null,false);
            }
            return done(null,user);
        })
    }
))

// Serializing the user to decide which key is to be kept in cookie
passport.serializeUser(function(user,done){
    done(null,user.id);
})

// deserializing the user from key in the  cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in deserializing',err)
            return done(err);
        }
        return done(null,user);
    })
});

passport.isLoggedIn= function(req,res,next){
    if(req.isAuthenticated()){return next();}
    // if user is not signed in
    return res.redirect('/users/sign-in')
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        // req.user constains the current signedin user fro session cookie
        // sending the req.user to locals to use in views
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;