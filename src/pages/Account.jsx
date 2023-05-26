import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ceb3b1eb-2673-4dd9-a6e3-0cd7a5e130ee/a6118ae2-a8b0-4356-bc8e-42882d9ba5c3/US-en-20230522-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background movie images"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text 3xl md: text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account
