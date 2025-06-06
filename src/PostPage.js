import React from 'react'
import { Link,useParams } from 'react-router-dom'
const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id)
  return (
    <main className='PostPage'>
      <article className='post'>
        {post && 
        <>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
        <p className='postBody'>{post.body}</p>
        <Link to={`/edit/${post.id}`}><button style={{color:'white', backgroundColor:'grey'}} >Edit Post</button></Link>
        <button style={{color:'white', backgroundColor:'red'}} onClick={() => handleDelete(post.id)}>Delete Post</button>
        </>}
        {!post &&
        <>
        <h2>Post Not Found</h2>
        <p>Well, that's disappointing</p>
        <Link to='/'>Visit Our Homepage</Link>
        </>}
      </article>
    </main>
  )
}

export default PostPage