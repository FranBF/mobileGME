import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/users/userSlice'

export function Navbar () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser } = useSelector((state) => state.user)
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div className='w-full h-12 fixed top-0 border-b-[1px] border-gray-400 flex items-center justify-between bg-white'>
      <Link to='/'><h1 className='ml-4 text-xl font-bold'>Mobile Stock</h1></Link>
      {currentUser
        ? (
          <div className='flex'>
            <Link className='mr-4 hover:underline' to='/devices'>Dispositivos</Link>
            <Link className='mr-4 hover:underline' to='/managers-and-teams'>Responsables y departamentos</Link>
            <Link className='mr-4 hover:underline' to='/my-profile' state={{ user: currentUser }}>{currentUser.username}</Link>
            <svg
              onClick={handleLogout}
              xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'
              className='w-6 h-6 mr-4 hover:text-gray-400 hover:cursor-pointer'
            >
              <path
                strokeLinecap='round' strokeLinejoin='round'
                d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
              />
            </svg>
          </div>
          )
        : (<Link className='mr-4' to='/login'>Login</Link>)}
    </div>
  )
}
