import { useState } from 'react'

export function Searcher ({ whereToLook, whatToLook, setSearch }) {
  const [filter, setFilter] = useState('')

  const handleSearch = () => {
    setSearch(whereToLook.filter((data) => {
      const w = whatToLook
      return data.name === filter
    }))
  }
  return (
    <div className='flex mt-5'>
      <div>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
        </svg>
      </div>
      <input onChange={(e) => { setFilter(e.target.value); handleSearch() }} type='text' className='w-48 h-8 rouneded-md border-[1px] border-gray-300' />
      <div>
        <svg onClick={handleSearch} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' />
        </svg>
      </div>
    </div>
  )
}
