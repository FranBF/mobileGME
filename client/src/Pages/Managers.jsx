import { Button, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../Components/Breadcrumb'

export function Managers () {
  const { displayManagers } = useSelector((state) => state.manager)
  const { displayTeams } = useSelector((state) => state.team)
  const { displayDelegations } = useSelector((state) => state.delegation)
  const pathName = window.location.pathname.toString()

  return (
    <div className='mt-12 w-full flex justify-center flex-col items-center'>
      <div className='flex w-11/12 justify-between items-end mt-8'>
        <Link to={pathName}><Breadcrumb path={pathName} /></Link>
      </div>
      <div className='w-11/12'>
        <div className='w-11/12 flex justify-start mt-12'>
          <h2 className='text-xl font-bold'>Responsables</h2>
        </div>
        <Table className='w-11/12 border-[1px] border-gray-400 mt-4'>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Nombre</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayManagers && displayManagers.map((l) => (
              <TableRow key={l._id}>
                <TableCell>{l.name}</TableCell>
                <TableCell>{l.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='w-11/12'>
        <div className='w-11/12 flex justify-start mt-12'>
          <h2 className='text-xl font-bold'>Equipos</h2>
        </div>
        <Table className='w-11/12 border-[1px] border-gray-400 mt-4'>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Nombre</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayTeams && displayTeams.map((l) => (
              <TableRow key={l._id}>
                <TableCell>{l.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className='w-11/12'>
        <div className='w-11/12 flex justify-start mt-12'>
          <h2 className='text-xl font-bold'>Delegaciones</h2>
        </div>
        <Table className='w-11/12 border-[1px] border-gray-400 mt-4'>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Nombre</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayDelegations && displayDelegations.map((l) => (
              <TableRow key={l._id}>
                <TableCell>{l.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
