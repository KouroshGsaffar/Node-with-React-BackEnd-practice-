const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys=require('./config/keys')
const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken)=>{
    console.log(accessToken);
}));

app.get('/auth/google', passport.authenticate('google', {
    scope:['profile', 'email'],
}));
app.get('/auth/goolge/callback', passport.authenticate('google'));

const PORT=process.env.PORT || 8080;
app.listen(PORT);