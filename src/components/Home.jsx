import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa6";
function Home() {
  const posts = useSelector((state)=> state.posts.posts)
  const [searchQuery, setSearchQuery] = useState('');
  console.log(posts)

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate()
  return (
   <div>
    <h1 className='w-[95%] mx-auto mt-5 text-2xl font-bold'>Social Media for Travellers</h1>
      <div className="flex justify-start  items-center gap-3 w-[95%] mx-auto mt-5 p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <CiSearch /><input type="text" id="search-navbar" value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  className='w-full outline-none'  placeholder="Search..."></input>

      </div>    
    <div className='p-10 flex flex-wrap justify-center gap-7'>

    {filteredPosts.map((post)=>(
      <div key={post.id} className=" relative max-w-sm h-[400px] bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <img className="rounded-t-lg w-full h-2/4" src={`https://picsum.photos/200?random=${post.id}`} alt="" />
      </a>
      <div className="p-5">
          <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-justify">{post.title.slice(0, 30)}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{`${post.body.slice(0, 70)}...`}</p>
          <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-cent text-orange-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-7 left-7">
              Read more ....
              
          </span>
      </div>
      <span className=' inline-block   bg-gradient-to-b from-orange-600 via-orange-300 p-2 rounded-lg text-white shadow-md font-bold absolute bottom-7 right-7' onClick={()=> navigate(`/Bookmarks/${post.id}`)} >
<FaGreaterThan />
</span>
  </div>
    ))}

    </div>

   </div>
  )
}

export default Home
