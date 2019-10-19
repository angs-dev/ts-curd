const connect  = require('../db');
const client = connect.getConnection();
client.connect();
const jwt = require('jsonwebtoken');
const passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('bearer');
opts.secretOrKey = 'secret';

passport.use(new JwtStrategy(opts, function(jwt_payload,done) {
  getProjects(jwt_payload.data.username, function(err, user) {
      if (err) {
          return done(err, false);
      }
      if (user) {
          return done(null, user);
      } else {
          return done(null, false);
      }
  });
}));


var getProjects = (name,callback)=>{
    const get_projects = `select * from auth where username ='${name}'`;  
    client.query(get_projects,function(error,results,fields){  
    callback(error,results);
});
}

  const auth = function (req, res) {
    client.query("select * from auth  where username='"+req.body.username+"' limit 1",function (error,results,fields){

        if(error)
        {
            console.log('invalid user');
        }else
        {
         
            if(results.length === 0)
            {
                res.send('invalid user');
            }else
            {
                var pwd=req.body.password;
                client.query("select * from auth where username='"+req.body.username+"' and password='"+pwd+"' limit 1",function (err,result,field){
                    if(err)
                    {
                        res.json({
                            success: false,
                            message: "Invalid user"
                          }); 
                    }else
                    {
      
                        const token = jwt.sign({data: results[0]}, opts.secretOrKey, {
                            expiresIn: '7d' // 1 week
                          });
                  
                          res.json({
                            success: true,
                            token: token,
                            user: result[0]
                          });                 
                    }
                
                });
            }
            
        }
      });
  };

  
  module.exports = {
    auth
  }
