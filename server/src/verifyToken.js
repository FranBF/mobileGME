import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) return console.log('No existe el token')
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return console.log(err)
    req.user = user
    next()
  })
}
