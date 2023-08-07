import { Button, TextInput, Select, SelectItem } from '@tremor/react'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export function NewEntry () {
  const navigate = useNavigate()
  const [dev, setDevice] = useState('')
  const [tm, setTeam] = useState('')
  const [mng, setMng] = useState('')
  const [stats, setStats] = useState('')
  const { displayDevices } = useSelector((state) => state.device)
  const { displayTeams } = useSelector((state) => state.team)
  const URL_PROD = process.env.URL_PROD
  const { displayManagers } = useSelector((state) => state.manager)

  const handleForm = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const device = dev
    const personGiven = formData.get('userAsignated')
    const deliverDate = formData.get('date')
    const status = stats
    const personManager = mng
    const team = tm
    try {
      await axios.post('https://api-mobilestock.onrender.com/api/entry', { device, personGiven, deliverDate, status, personManager, team }, {
        headers: {
          Authorization: 'Bearer access_token'
        },
        withCredentials: true
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <form onSubmit={handleForm} className='flex flex-col mt-12 justify-center items-center w-full'>
        <div className='flex lg:flex-row md:flex-col flex-col'>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Dispositivo:</label>
            <Select onValueChange={setDevice}>
              {displayDevices.map((d) => (
                <SelectItem className='z-99 hover:cursor-pointer bg-slate-100 hover:bg-gray-200' value={d.name} key={d._id}>{d.name}</SelectItem>
              ))}
            </Select>
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Usuario Asignado:</label>
            <TextInput placeholder='' type='text' name='userAsignated' />
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Fecha de Entrega:</label>
            <TextInput placeholder='' name='date' type='date' />
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Estado:</label>
            <Select onValueChange={setStats} className='z-99 bg-inherit'>
              <SelectItem className='z-99 hover:cursor-pointer bg-slate-100 hover:bg-gray-200' value='Activo'>Activo</SelectItem>
              <SelectItem className='z-99 hover:cursor-pointer bg-slate-100 hover:bg-gray-200' value='No activo'>No activo</SelectItem>
            </Select>
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Manager:</label>
            <Select onValueChange={setMng}>
              {displayManagers.map((d) => (
                <SelectItem className='z-99 hover:cursor-pointer bg-slate-100 hover:bg-gray-200' key={d._id} value={d.name}>{d.name}</SelectItem>
              ))}
            </Select>
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Departamento:</label>
            <Select onValueChange={setTeam}>
              {displayTeams.map((d) => (
                <SelectItem className='z-99 hover:cursor-pointer bg-slate-100 hover:bg-gray-200' key={d._id} value={d.name}>{d.name}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className='flex'>
          <Button type='submit' className='mt-8 w-36 h-8 rounded-full bg-green-400 ml-3'>Aceptar</Button>
          <Link to='/'><button className='mt-8 w-36 h-8 rounded-full bg-red-400 ml-3'>Cancelar</button></Link>
        </div>
      </form>
    </div>
  )
}
