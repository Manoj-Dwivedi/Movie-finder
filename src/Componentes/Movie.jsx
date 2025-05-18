import React from 'react'
import { useState, useEffect } from 'react'
import { movies } from './Data'
import Nav from './Nav'

export default function Movie() {
  const [movieslist, setMovieslist] = useState(movies)
  const filterbycotegrey = (ct) => {
    setMovieslist(movies.filter((data) => data.category === ct))
  }

  return (
    <>
      <Nav set={setMovieslist} filter={filterbycotegrey} />
      <div className='container '>
        <div className=' d-flex flex-wrap gap-4 justify-content-center p-5 text-center'>
          {movieslist.map((item) => {
            return <div className=' cart' key={item.id}><img src={item.poster_path} className='rounded' style={{ 'max-width': '220px' }} alt="" />
              <p className='mt-3'>{item.title.slice(0, 25)}</p>
              <p>{item.release_date}</p>
            </div>

          })}
        </div>
      </div>
    </>
  )
}
