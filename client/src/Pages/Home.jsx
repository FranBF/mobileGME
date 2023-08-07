import { Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, Button } from '@tremor/react'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteEntry, fetchEntries } from '../redux/entries/entriesSlice'
import { fetchDevices } from '../redux/devices/devicesSlice'
import { fetchTeams } from '../redux/teams/teamsSlice.js'
import { fetchManagers } from '../redux/managers/managersSlice.js'

export function Home () {
  const dispatch = useDispatch()
  const { displayEntries } = useSelector((state) => state.entry)
  const { currentUser } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const handleEntries = async () => {
    await axios.get('https://api-mobilestock.onrender.com/api/entry', {
      withCredentials: true
    }).then((r) => { dispatch(fetchEntries(r.data)) })
  }

  const handleDevices = async () => {
    try {
      await axios.get('https://api-mobilestock.onrender.com/api/device', {
        withCredentials: true
      }).then((r) => { dispatch(fetchDevices(r.data)) })
    } catch (error) {
      console.log(error)
    }
  }

  const handleManagers = async () => {
    try {
      await axios.get('https://api-mobilestock.onrender.com/api/manager', {
        withCredentials: true
      }).then((d) => { dispatch(fetchManagers(d.data)) })
    } catch (error) {

    }
  }

  const handleTeams = async () => {
    try {
      await axios.get('https://api-mobilestock.onrender.com/api/team', {
        withCredentials: true
      }).then((r) => dispatch(fetchTeams(r.data)))
    } catch (error) {

    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api-mobilestock.onrender.com/api/entry/${id}`, {
        headers: {
          Authorization: 'Bearer access_token'
        },
        withCredentials: true
      })
      dispatch(deleteEntry(id))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
    handleEntries()
    handleDevices()
    handleTeams()
    handleManagers()
  }, [])

  return (
    <div className='mt-12 w-full flex justify-center flex-col items-center'>
      <div className='w-11/12 flex justify-end'>
        <Link to='/create-entry'><Button size='md' className='w-36 h-8 mt-8'>Crear nueva entrada</Button></Link>
      </div>
      <Table className='w-11/12 border-[1px] border-gray-400 mt-4'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Dispositivo</TableHeaderCell>
            <TableHeaderCell>Usuario Asignado</TableHeaderCell>
            <TableHeaderCell>Fecha de entrega</TableHeaderCell>
            <TableHeaderCell>Estado</TableHeaderCell>
            <TableHeaderCell>Responsable</TableHeaderCell>
            <TableHeaderCell>Departamento</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayEntries && displayEntries.map((l) => (
            <TableRow key={l._id}>
              <TableCell>{l.device}</TableCell>
              <TableCell>{l.personGiven}</TableCell>
              <TableCell>{new Date(l.deliverDate).toISOString().slice(0, 10)}</TableCell>
              <TableCell>{l.status === 'Activo'
                ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'
                    className='w-6 h-6 text-green-500'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                  )
                : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'
                    className='w-6 h-6 text-red-600'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' />
                  </svg>
                  )}
              </TableCell>
              <TableCell>{l.personManager}</TableCell>
              <TableCell>{l.team}</TableCell>
              <TableCell className='flex flex-row'>
                <Link to={`/entry/${l._id}`} state={{ entry: l }}>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' />
                  </svg>
                </Link>
                <button onClick={() => handleDelete(l._id)} value={l._id}>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
                  </svg>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
