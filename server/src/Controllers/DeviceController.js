import DeviceModel from '../Models/DeviceModel.js'

export const createDevice = async (req, res, next) => {
  try {
    const newDevice = new DeviceModel(req.body)
    await newDevice.save()
    res.status(200).json(newDevice)
  } catch (error) {
    console.log(error)
  }
}

export const updateDevice = async (req, res, next) => {
  try {
    const updatedDevice = await DeviceModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    res.status(200).json(updatedDevice)
  } catch (error) {
    console.log(error)
  }
}

export const deleteDevice = async (req, res, next) => {
  try {
    await DeviceModel.findByIdAndRemove(req.params.id)
    res.status(200).json('Device deleted')
  } catch (error) {
    console.log(error)
  }
}

export const getAllDevices = async (req, res, next) => {
  try {
    const devices = await DeviceModel.find()
    res.status(200).json(devices)
  } catch (error) {
    console.log(error)
  }
}

export const getOneDevice = async (req, res, next) => {
  try {
    const device = await DeviceModel.findById(req.params.id)
    res.status(200).json(device)
  } catch (error) {
    console.log(error)
  }
}
