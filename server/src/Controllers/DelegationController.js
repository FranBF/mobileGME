import { DelegationModel } from '../Models/DelegationModel.js'

export const createDelegation = async (req, res, next) => {
  try {
    const delegation = new DelegationModel(req.body)
    await delegation.save()
    res.status(200).json(delegation)
  } catch (error) {
    console.log(error)
  }
}

export const getAllDelegations = async (req, res, next) => {
  try {
    const delegations = await DelegationModel.find()
    res.status(200).json(delegations)
  } catch (error) {
    console.log(error)
  }
}
