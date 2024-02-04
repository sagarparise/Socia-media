
import './App.css'
import Navbar from './components/navbar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchposts } from './Slices/PostsSlice';
import { Outlet } from 'react-router-dom';
function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchposts())
  }, [dispatch])

  return (
    <>
      <Navbar/>
     <Outlet>
     </Outlet>
    </>
  )
}

export default App
