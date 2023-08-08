import UserModel from '../Models/UserModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createUser = async (req, res, next) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    const newUser = new UserModel({ ...req.body, password: hashedPassword })
    await newUser.save()
    res.status(200).json(newUser)
  } catch (error) {
    console.log(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username })
    if (!user) return console.log('No existe el usuario')
    if (user._doc.firstTime === 0) {
      await UserModel.findByIdAndUpdate(user._doc._id, { $set: { firstTime: 1 } }, { new: true })
    } else {
      await UserModel.findByIdAndUpdate(user._doc._id, { $set: { firstTime: 2 } }, { new: true })
    }
    const isCorrect = bcrypt.compareSync(req.body.password, user.password)
    if (!isCorrect) return console.log('Las credenciales no son correctas')
    const token = jwt.sign({ id: user._id }, process.env.JWT)
    const { password, ...other } = user._doc
    console.log('User token: ' + token)
    res.cookie('access_token', token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true
    }).status(200).json(other)
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10)
    const user = await UserModel.findByIdAndUpdate(req.params.id, { $set: { password: hash } }, { new: true })
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    await UserModel.findByIdAndRemove(req.params.id)
    res.status(200).send('User deleted')
  } catch (error) {
    console.log(error)
  }
}

export const getCurrentUserInfo = async (req, res, next) => {
  try {
    const user = UserModel.findById(req.params.id)
    if (!user) return console.log('user does not exist')
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
}
