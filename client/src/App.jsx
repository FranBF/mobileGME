import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Profile } from './Pages/Profile'
import { Entry } from './Pages/Entry'
import { NewEntry } from './Pages/NewEntry'
import { Devices } from './Pages/Devices'
import { Managers } from './Pages/Managers'
import { NewDevice } from './Pages/NewDevice'

export function App () {
  return (
    <div className='h-screen w-screen flex flex-col'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-profile' element={<Profile />} />
        <Route path='/entry/:id' element={<Entry />} />
        <Route path='/create-entry' element={<NewEntry />} />
        <Route path='/devices' element={<Devices />} />
        <Route path='/managers-and-teams' element={<Managers />} />
        <Route path='/new-device' element={<NewDevice />} />
      </Routes>
    </div>
  )
}
