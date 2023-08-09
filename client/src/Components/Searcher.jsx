import { useState } from 'react'

export function Searcher ({ whereToLook, whatToLook, setSearch }) {
  const [filter, setFilter] = useState('')

  const handleSearch = (e) => {
    console.log(filter)
    const val = e.target.value
    setSearch(whereToLook.filter((data) => {
      if (val === '') {
        return data
      }
      return data.name.toLowerCase().includes(filter)
    }))
  }
  return (
    <div className='flex mt-5 justify-center items-center rounded-md border-[1px] border-gray-400'>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 mr-4'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
      </svg>
      <input
        onChange={(e) => { setFilter(e.target.value); handleSearch(e) }} type='text'
        className='w-80 outline-none h-8 rouneded-md'
      />
      <svg onClick={handleSearch} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 ml-4'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' />
      </svg>
    </div>
  )
}
