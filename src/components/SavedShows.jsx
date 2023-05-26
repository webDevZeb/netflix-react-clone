import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { UpdateData, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { AiOutlineClose } from 'react-icons/ai'

const SavedShows = () => {
  const [movies, setMovies] = useState([])
  const { user } = UserAuth()

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows)
    })
  }, [user?.email])

  const movieRef = doc(db, 'users', `${user?.email}`)

  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID)
      await updateDoc(movieRef, {
        savedShows: result,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2 className="text-white front-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={'slider'}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative left-0"
        >
          {movies?.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                <p onClick={() => deleteShow(item.id)}>
                  <AiOutlineClose className="absolute text-gray-300 top-4 right-4" />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
        />
      </div>
    </>
  )
}

export default SavedShows
