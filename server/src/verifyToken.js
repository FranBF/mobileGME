import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) return console.log('Token no valido')
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return console.log(err)
    req.user = user
    next()
  })
}
