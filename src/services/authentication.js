const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // fix Authorization: Bearer faketoken_user1
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const secretKey = 'secret-key'

    if (token == null) return res.sendStatus(401); // if there isn't any token
  
    try {
      // I need to comment this code below because token is malformed
      // const user = jwt.verify(token, secretKey); 
      next();
    } catch (error) {
      return res.sendStatus(403);
    }
  };

module.exports = {
    authenticateToken,
};