import { useEffect, useState } from 'react'
import './App.css'
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
    .then(data=>setPosts(data))
  },[])

  return (
    <>
      <h1 style={{textAlign:'center'}}>Facebook Posts</h1>
      <div className='Post-container'>
      {
        posts.map((post)=><Post post={post}></Post>)
      }
      </div>
    </>
  )
}

export default App
