import ManagerModel from '../Models/ManagerModel.js'

export const createManager = async (req, res, next) => {
  try {
    const newManager = new ManagerModel(req.body)
    await newManager.save()
    res.status(200).json(newManager)
  } catch (error) {
    console.log(error)
  }
}

export const updateManager = async (req, res, next) => {
  try {
    const updatedManager = await ManagerModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    res.status(200).json(updatedManager)
  } catch (error) {
    console.log(error)
  }
}

export const deleteManager = async (req, res, next) => {
  try {
    await ManagerModel.findByIdAndDelete(req.params.id)
    res.status(200).json('Manager deleted')
  } catch (error) {
    console.log(error)
  }
}

export const getAllManagers = async (req, res, next) => {
  try {
    const managers = await ManagerModel.find()
    if (!managers) return console.log('No hay managers disponibles')
    res.status(200).json(managers)
  } catch (error) {

  }
}
