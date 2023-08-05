import EntryModel from '../Models/EntryModel.js'

export const createEntry = async (req, res, next) => {
  try {
    const newEntry = new EntryModel({ ...req.body, createdBy: req.user.id })
    await newEntry.save()
    res.status(200).json(newEntry)
  } catch (error) {
    console.log(error)
  }
}

export const updateEntry = async (req, res, next) => {
  try {
    const updatedEntry = await EntryModel.findByIdAndUpdate(req.params.id, { $set: req.body, updatedBy: req.user.id }, { new: true })
    res.status(200).json(updatedEntry)
  } catch (error) {
    console.log(error)
  }
}

export const deleteEntry = async (req, res, next) => {
  try {
    await EntryModel.findByIdAndRemove(req.params.id)
    res.status(200).json('Entry deleted')
  } catch (error) {
    console.log(error)
  }
}

export const getAllEntries = async (req, res, next) => {
  try {
    const entries = await EntryModel.find()
    res.status(200).json(entries)
  } catch (error) {
    console.log(error)
  }
}

export const getEntry = async (req, res, next) => {
  try {
    const entry = await EntryModel.findById(req.params.id)
    res.status(200).json(entry)
  } catch (error) {
    console.log(error)
  }
}
