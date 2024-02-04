import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Home() {
  const posts = useSelector((state)=> state.posts.posts)
  console.log(posts)
  const navigate = useNavigate()
  return (
   <div>
    <h1 className='w-[95%] mx-auto mt-5 text-2xl font-bold'>Social Media for Travellers</h1>
      <div className="flex justify-start  items-center gap-3 w-[95%] mx-auto mt-5 p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <CiSearch /><input type="text" id="search-navbar" className='w-full outline-none'  placeholder="Search..."></input>

      </div>    
    <div className='p-10 flex flex-wrap justify-center gap-7'>

    {posts.map((post)=>(
      <div key={post.id} className=" relative max-w-sm h-[400px] bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <img className="rounded-t-lg w-full h-2/4" src={`https://picsum.photos/200?random=${post.id}`} alt="" />
      </a>
      <div className="p-5">
          <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-justify">{post.title.slice(0, 30)}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{`${post.body.slice(0, 70)}...`}</p>
          <span onClick={()=> navigate(`/Bookmarks/${post.id}`)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-7 left-7">
              Read more
               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </span>
      </div>
  </div>
    ))}

    </div>

   </div>
  )
}

export default Home