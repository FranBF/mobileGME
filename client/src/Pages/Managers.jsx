import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { useSelector } from 'react-redux'

export function Managers () {
  const { displayManagers } = useSelector((state) => state.manager)
  const { displayTeams } = useSelector((state) => state.team)
  return (
    <div className='mt-12 w-full flex justify-center flex-col items-center'>
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
    </div>
  )
}
