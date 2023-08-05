import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/users/userSlice'
import axios from 'axios'

export function Login () {
  const [showPass, setShowpass] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const PROD = 'http://localhost:9899'

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(username + ' ' + password)
    try {
      const res = await axios.post(`${PROD}/api/user/login`, { username, password }, {
        headers: {
          Authorization: 'Bearer access_token'
        },
        withCredentials: true
      })
      dispatch(login(res.data))
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleShowPass = (e) => {
    e.preventDefault()
    setShowpass(!showPass)
  }

  const handleIsLogin = (e) => {
    e.preventDefault()
    setIsLogin(!isLogin)
  }

  const handlePassword = (e) => {
    const value = e.target.value
    setPassword(value)
    console.log(password)
  }

  const handleUsername = (e) => {
    const value = e.target.value
    setUsername(value)
  }

  return (
    <div className='w-full h-full flex justify-center items-center mt-5'>
      <div className='w-1/3 h-2/4 rounded-lg border-[1px] border-gray-400 flex flex-col'>
        <h1 className='font-bold text-xl self-start ml-5 mt-5'>Log in</h1>
        <div className='w-full flex flex-col justify-between mt-5'>
          <div className='flex justify-between ml-5 mr-5'>
            <p>Enter username</p>
            <p>{'Need an account?' + ' '}
              <span
                className='text-blue-300 underline hover:cursor-pointer hover:text-blue-400'
                onClick={handleIsLogin}
              >
                Sign Up
              </span>
            </p>
          </div>
          <input type='text' onChange={handleUsername} className='h-12 mr-5 mt-2 rounded-md border-[1px] border-gray-400 ml-5 outline-none' />
        </div>
        <div className='w-full flex flex-col justify-between mt-5'>
          <div className='flex justify-between ml-5 mr-5 items-center'>
            <p>Enter password</p>
            {showPass
              ? (<BsFillEyeSlashFill className='w-12 h-6 hover:cursor-pointer' onClick={handleShowPass} />)
              : (<BsFillEyeFill className='w-12 h-6 hover:cursor-pointer' onClick={handleShowPass} />)}
          </div>
          <input
            type={showPass ? 'text' : 'password'} onChange={handlePassword}
            className='h-12 mr-5 mt-2 rounded-md border-[1px] border-gray-400 ml-5 outline-none'
          />
        </div>
        <button className='m-5 h-12 bg-blue-200 rounded-full font-bold hover:bg-blue-300' onClick={handleLogin}>Log in</button>
        <div className='flex w-full items-center mb-5 justify-end'>
          <Link to='/'><BiLeftArrowAlt className='w-6 h-6 hover:text-blue-400' /></Link>
          <Link to='/'><AiFillHome className='w-6 h-6 hover:text-blue-400 mr-5' /></Link>
        </div>
      </div>
    </div>
  )
}
