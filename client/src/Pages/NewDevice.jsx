import { Button, TextInput } from '@tremor/react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export function NewDevice () {
  const navigate = useNavigate()
  const URL_PROD = process.env.URL_PROD

  const handleForm = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const name = formData.get('name')
    const price = formData.get('price')

    try {
      await axios.post('https://api-mobilestock.onrender.com/api/device', { name, price }, {
        headers: {
          Authorization: 'Bearer access_token'
        },
        withCredentials: true
      })
      navigate('/devices')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <form onSubmit={handleForm} className='flex flex-col mt-12 justify-center items-center w-full'>
        <div className='flex'>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Nombre:</label>
            <TextInput placeholder='' type='text' name='name' />
          </div>
          <div className='flex flex-col mt-3 ml-3'>
            <label>Precio:</label>
            <TextInput placeholder='' name='price' type='float' />
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
