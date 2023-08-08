import { Button, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDevice } from '../redux/devices/devicesSlice'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../Components/Breadcrumb'
import { Searcher } from '../Components/Searcher'
import { useState } from 'react'

export function Devices () {
  const { displayDevices } = useSelector((state) => state.device)
  const pathName = window.location.pathname.toString()
  const dispatch = useDispatch()
  const [search, setSearch] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api-mobilestock.onrender.com/api/device/${id}`, {
        headers: {
          Authorization: 'Bearer access_token'
        },
        withCredentials: true
      })
      dispatch(deleteDevice(id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mt-12 w-full flex justify-center flex-col items-center'>
      <Searcher whereToLook={displayDevices} whatToLook='name' setSearch={setSearch} />
      <div className='flex w-11/12 justify-between items-end'>
        <Link to={pathName}><Breadcrumb path={pathName} /></Link>
        <div className='w-11/12 flex mt-8 justify-end'>
          <Link to='/new-device'><Button className=''>Añadir Dispositivo</Button></Link>
        </div>
      </div>

      <Table className='w-11/12 border-[1px] border-gray-400 mt-4'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Dispositivo</TableHeaderCell>
            <TableHeaderCell>Precio</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(displayDevices && search.length === 0)
            ? displayDevices.map((l) => (
              <TableRow key={l._id}>
                <TableCell>{l.name}</TableCell>
                <TableCell>{l.price}</TableCell>
                <TableCell className='flex'>
                  <button onClick={() => handleDelete(l._id)} value={l._id}>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
                    </svg>
                  </button>
                </TableCell>
              </TableRow>
            ))
            : search.map((l) => (
              <TableRow key={l._id}>
                <TableCell>{l.name}</TableCell>
                <TableCell>{l.price}</TableCell>
                <TableCell className='flex'>
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
