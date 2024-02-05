// components/Detail.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdShare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa6";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const Bookmarks = () => {
  const { id } = useParams();
  const [text, setText] = useState(null);
  const [active, setActive] = useState('Details')
  const navigate = useNavigate()
  useEffect(()=>{
    setText(post.body)
    setActive('Details')
  },[])

 

  const allPost = useSelector((state) => state.posts.posts);

  const post = allPost.find((post) => post.id.toString() === id)

console.log(allPost)

  if (!post) return <div>Loading...</div>;

  return (<>
  <div className=' px-5 py-3 font-bold text-2xl flex justify-start items-center gap-4'>
  <FaRegArrowAltCircleLeft onClick={()=> navigate('/')} /> {`Post Number ${post.id}`}
  </div>
  <div class="flex max-w-2xl flex-col items-center rounded-md border p-3 md:flex-row m-5 ">
  <div class="h-full w-[50%] md:h-[200px] md:w-[300px] relative">
    <img
     src={`https://picsum.photos/200?random=${post.id}`}
      class="h-full w-full rounded-md object-cover"
    />
     <div className=' absolute bottom-2 right-5 flex justify- items-center gap-3 text-2xl text-white'> <IoMdShare /> <CiHeart />
</div>
  </div>
  <div className=' self-start w-full h-full'>
    <div class="p-4">
    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-justify">{post.title.slice(0, 30)}</h5>
    <div>
    <button
    type="button"
    onClick={()=>{
      setText(post.body)
      setActive('Details')
    } }
    class={`rounded-md ${active === 'Details' ? "bg-orange-600" : " bg-slate-100"} ${active === 'Details'  ? "text-white" : " text-black"} px-3 py-2 text-sm font-semibold shadow-sm mr-3  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600`}
  >
   Details
  </button>
  <button
    type="button"
    onClick={()=> {
      setText(`Post was posted by ${post.userId}`)
      setActive('userInfo')
    }}
    class={`rounded-md px-3 py-2 ${active === 'userInfo' ? "bg-orange-600" : " bg-slate-100"} ${active === 'userInfo' ? "text-white" : " text-black"} text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 `}
  >
   User Info
  </button>
    </div>

    <div className='p-1 text-justify '>
      {text}
    </div>

    </div>
   
  </div>
</div>

<h1 className='px-7 py-3 text-2xl font-bold'>More Posts</h1>

<div className='p-10 flex flex-wrap justify-center gap-3'>

{allPost.map((post)=>(
  <div key={post.id} className=" relative max-w-sm h-[370px] w-[350px] bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
  <span className=' inline-block  bg-orange-500 p-2 rounded-lg text-white shadow-md font-bold absolute bottom-7 right-7' onClick={()=> {
    setText(post.body)
    setActive('Details')
    navigate(`/Bookmarks/${post.id}`)
  }} >
<FaGreaterThan />
</span>
</div>
))}

</div>
  </>
  );
};

export default Bookmarks;
