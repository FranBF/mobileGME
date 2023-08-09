import { useEffect, useState } from 'react'

export function Modal ({ action, name, item, visible, setVisible, func, fromWhere }) {
  const [id, setId] = useState('')

  const handleDelete = () => {
    setVisible(false)
    func(id)
    action(id)
  }
  useEffect(() => {
    item.map((d) => setId(d._id))
  }, [visible])
  return (
    <div className={`fixed inset-0 mt-12 w-full h-full flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-md ${!visible && 'hidden'}`}>
      <div className='bg-white w-1/3 h-1/3 flex flex-col items-center justify-center text-center p-8'>
        <p className=''>Seguro que quieres {name} el siguiente item: {item.map((d) => (d._id + ` (${fromWhere.toLowerCase() === 'device' ? d.name : d.device + ' a ' + d.personGiven})`))}?</p>
        <div className='flex w-full items-center justify-around mt-8'>
          <button className='w-36 bg-green-500 h-8 rounded-full' onClick={handleDelete}>Si</button>
          <button className='w-36 bg-red-500 h-8 rounded-full' onClick={() => setVisible(false)}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
