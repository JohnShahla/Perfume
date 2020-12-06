



const jwt = require('jsonwebtoken');




const myPlaintextPassword = `s0/\/\P4$$w0rDasfd`;


module.exports = (req,res,next) => {
    console.log(req.get('Authorization'));
    const authHeader = req.get('Authorization');
    if(!authHeader){
        const error = new Error('Not Authenticated');
        error.statusCode(401);
        throw error;
    }
    const token = req.get('Authorization').split(" ")[1];
    try {
        decodedToken = jwt.verify(token,myPlaintextPassword)
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken){
        const error = new Error('Not Authorized');
        error.statusCode =401;
        throw error;
    }
    req.userID = decodedToken.userID;
    console.log('__________');
    next();
}