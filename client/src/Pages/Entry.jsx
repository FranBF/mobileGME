import axios from 'axios'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TextInput, Button, Select, SelectItem } from '@tremor/react'
import { useState } from 'react'

export function Entry () {
  const location = useLocation()
  const navigate = useNavigate()
  const [val, setVal] = useState('')

  const { entry } = location.state

  const isoDate = new Date(entry.deliverDate).toISOString().slice(0, 10)

  const handleForm = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const device = formData.get('dispositivo')
    const personGiven = formData.get('userAsignated')
    const deliverDate = formData.get('date')
    const status = val
    const personManager = formData.get('manager')
    const team = formData.get('department')
    const delegation = formData.get('delegation')
    try {
      await axios.put(`https://api-mobilestock.onrender.com/api/entry/${entry._id}`, { device, personGiven, deliverDate, status, personManager, team, delegation }, {
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
            <TextInput className='bg-gray-200' type='text' name='dispositivo' value={entry.device} />
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Usuario Asignado:</label>
            <TextInput className='bg-gray-200' name='userAsignated' value={entry.personGiven} />
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Fecha de Entrega:</label>
            <TextInput className='bg-gray-200' name='date' type='date' value={isoDate} />
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Estado:</label>
            <Select onValueChange={setVal} defaultValue={entry.status} className='z-99 bg-inherit'>
              <SelectItem className='z-99 hover:cursor-pointer bg-slate-100 hover:bg-gray-200' value='Activo'>Activo</SelectItem>
              <SelectItem className='z-99 hover:cursor-pointer bg-slate-100 hover:bg-gray-200' value='No activo'>No activo</SelectItem>
            </Select>
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Manager:</label>
            <TextInput className='bg-gray-200' name='manager' value={entry.personManager} />
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Departamento:</label>
            <TextInput className='bg-gray-200' name='department' value={entry.team} />
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Delegación:</label>
            <TextInput className='bg-gray-200' name='delegation' value={entry.delegation} />
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
