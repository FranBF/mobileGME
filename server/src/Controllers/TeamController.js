import TeamModel from '../Models/TeamModel.js'

export const createTeam = async (req, res, next) => {
  try {
    const newTeam = new TeamModel(req.body)
    await newTeam.save()
    res.status(200).json(newTeam)
  } catch (error) {
    console.log(error)
  }
}

export const getAllTeams = async (req, res, next) => {
  try {
    const teams = await TeamModel.find()
    res.status(200).json(teams)
  } catch (error) {
    console.log(error)
  }
}
