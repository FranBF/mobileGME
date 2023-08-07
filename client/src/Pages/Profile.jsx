import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../redux/users/userSlice.js'

export function Profile () {
  const location = useLocation()
  const { user } = location.state
  const [password, setPwd] = useState('')
  const navigate = useNavigate()
  const DEV = 'http://localhost:9899'
  const URL_PROD = process.env.URL_PROD
  const dispatch = useDispatch()

  const handlePwd = (e) => {
    e.preventDefault()
    const val = e.target.value
    setPwd(val)
  }

  const handleChangePwd = async (e) => {
    console.log(user._id)
    e.preventDefault()
    try {
      console.log('llego')
      await axios.put(`${URL_PROD}/api/user/${user._id}`, { password }, {
        headers: {
          Authorization: 'Bearer access_token'
        },
        withCredentials: true
      })
      console.log('no llego')
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full h-full mt-12 flex justify-center'>
      <div className='flex flex-col items-center mt-3'>
        <h1>Hola {user.username},  ¿deseas cambiar tu contraseña?</h1>
        <input type='text' onChange={handlePwd} className='border-[1px] border-gray-400 w-48 h-8 rounded-md mt-3' />
        <button onClick={handleChangePwd} className='mt-3 rounded-full w-48 h-8 bg-blue-200'>Cambiar</button>
      </div>
    </div>
  )
}
