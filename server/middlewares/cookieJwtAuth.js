import jwt from 'jsonwebtoken'

export const cookieJwtAuth = (req, res, next)=>{
    const token = req.cookies.access_token;
    if (!token) {return res.status(401).json({ message: 'Unauthorized: No token provided' });};

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        const id = data.id;
        req.id  = id;

        next();
      } catch (err) {
        return res.status(401).send({ message: 'Unauthorized: Invalid token' });
      }
}